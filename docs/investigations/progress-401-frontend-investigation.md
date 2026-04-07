# Progress 401 - Investigacao Frontend

Data: 2026-04-06
Branch: fix/progress-401-frontend

## Contexto
Em producao, as rotas de progresso/status retornavam 401 e havia oscilacao no envio de itemId (ora preenchido, ora null/undefined).

Observacao: os 403 vistos durante o teste vao ser tratados em card separado, a menos que aparecam em fluxo autenticado de progresso/status com token valido. Neste documento, o foco continua sendo o 401 e a consistencia de parametros.

## O que foi identificado no frontend
1. Havia risco de chamada com `itemId` invalido no componente de status:
- `StatusSelect` recebe `id` opcional.
- Em cenarios de renderizacao assincrona, `id` podia chegar vazio/indefinido no momento da chamada.

2. Havia chamada duplicada de update de status no `handleChange`:
- `updateStatus(...)` era chamado uma vez para validacao de sucesso e novamente dentro do `try`.
- Isso aumentava ruido de rede e podia mascarar analise de causa raiz.

3. A rota interna de topico estava montando URL com sufixo de item mesmo quando itemId nao existia:
- `getTopicExercisesStatus` encaminhava para `/status/{topicId}/item/{itemId}`.
- Quando itemId nao era fornecido, isso podia virar `/item/null` ou `/item/undefined` dependendo do fluxo.

4. Faltavam logs padronizados para comparar local x producao:
- Nao havia rastreio consistente de URL final, parametros, estado de token e timestamp antes/depois das chamadas.

## Alteracoes aplicadas
### Novo utilitario de validacao/log
Arquivo: `src/utils/progress-debug.ts`
- Funcao para detectar parametro invalido (`""`, `null`, `undefined`, inclusive como string).
- Funcao para validar presenca de token util.
- Logger temporario controlado por flag:
  - `NEXT_PUBLIC_PROGRESS_DEBUG=true` (cliente)
  - `PROGRESS_DEBUG=true` (server)

### Endurecimento no client
Arquivo: `src/components/fetchStatus/fetchStatusExercise/index.ts`
- Bloqueia requisicao quando `topicId/itemId` sao invalidos.
- Adiciona logs de inicio/sucesso/erro e skip por parametro invalido.

Arquivo: `src/components/StatusSelect/index.tsx`
- Sanitiza IDs extraidos da URL.
- Sanitiza `itemId` antes de chamar hook.
- Remove chamada duplicada de `updateStatus`.
- Adiciona log quando skipa por parametro invalido.

Arquivo: `src/components/fetchProgress/index.ts`
- Bloqueia chamada de progresso quando `id` invalido.
- Adiciona logs de inicio/sucesso/erro.

### Endurecimento nas rotas internas do Next
Arquivo: `src/app/api/backend/getExerciseStatus/route.ts`
- Valida `topicId/itemId` contra valores invalidos.
- Loga forward para backend com URL final e contexto.

Arquivo: `src/app/api/backend/updateExerciseStatus/route.ts`
- Valida `topicId/itemId`.
- Loga forward (URL final, token presente, payload de status).

Arquivo: `src/app/api/backend/getProgress/route.ts`
- Valida `id/idType` antes da chamada.
- Loga forward da URL final e resposta.

Arquivo: `src/app/api/backend/getTopicExercisesStatus/route.ts`
- Para status de topico:
  - se `itemId` for invalido, chama `/status/{topicId}`
  - se `itemId` valido, chama `/status/{topicId}/item/{itemId}`
- Evita encaminhar `/item/null` e similares.

## Como validar (local x producao)
1. Ative logs temporarios:
- frontend: `NEXT_PUBLIC_PROGRESS_DEBUG=true`
- server (rotas Next): `PROGRESS_DEBUG=true`

2. Reproduza o mesmo fluxo em local e em producao:
- Abrir tema/topico/exercicio/video
- Ler status
- Alterar status para `InProgress` e depois `Completed`

3. Compare no Network e nos logs:
- URL final montada
- `topicId` e `itemId` no momento da chamada
- presenca de token (`hasAccessToken`/`hasSessionToken`)
- status HTTP da resposta
- timestamp dos eventos

4. Criticos para o card:
- Confirmar ausencia de chamadas com `itemId` invalido
- Confirmar se o 401 restante (se existir) ocorre com token presente e parametro valido
- Confirmar equivalencia de comportamento entre local e producao
- Tratar 403 sem autenticacao como comportamento esperado e fora do escopo deste card

## Resultado esperado apos patch
- Requisicoes com parametros invalidos nao sao disparadas.
- Fluxo de update nao duplica chamada.
- Rotas de topico nao encaminham `itemId` nulo/indefinido.
- Logs temporarios permitem provar se o 401 e de autenticacao real, de token invalido, ou de divergencia de ambiente.

## Proximos passos para fechamento
1. Rodar validacao em producao com logs habilitados por curto periodo.
2. Anexar evidencias (prints de Network e logs) no card.
3. Se confirmado, remover ou desabilitar logs temporarios apos a investigacao.
