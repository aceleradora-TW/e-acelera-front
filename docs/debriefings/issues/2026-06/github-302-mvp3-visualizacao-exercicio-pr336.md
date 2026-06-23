---
tags:
  - Debrief
  - Dev
created: 2026-06-17
updated: 2026-06-17
issue_source: "github"
issue_ref: "aceleradora-TW/e-acelera-front#302"
issue_url: "https://github.com/aceleradora-TW/e-acelera-front/issues/302"
purpose: debriefing compartilhado para ações corretivas e melhorias
---

# [MVP3] Visualização do item Exercício

**PR:** [#336](https://github.com/aceleradora-TW/e-acelera-front/pull/336) — *merged* 2026-06-17 19:17 UTC  
**Branch:** `302-mvp3-visualizacao-do-item-exercicio` → `main`  
**Autor PR:** Jamile Santana da Silva (`Jhamyllie`)  
**Issue #302:** *closed* com o merge do PR #336.

**Metadados GitHub:** assignees Jhamyllie, Peu-Wan, Lorenzo-Brizolla; sem labels; 0 comentários na issue; critérios de aceite com Figma, campos bloqueados, botões Editar/Arquivar/Cancelar e tooltip ao cancelar.

## Resumo do que foi feito

Implementação da **visualização de exercício** no CMS (`/cms/exercises/[id]`), com leitura via API Next e campos somente leitura:

- Rota BFF `GET`: `src/app/api/exercises/getExerciseById/route.ts` (proxy para backend `/exercises/:id`, id via header).
- Página dinâmica: `src/app/cms/exercises/[id]/page.tsx`.
- Componente de detalhe: `src/components/PageElements/cms/exercises/detail-exercise.tsx` (campos read-only: título, descrição, descrição curta, tópico, status).
- Navegação da listagem: `TableCMS` já redireciona clique da linha para `/cms/exercises/{id}`.
- Botão **Editar** no `UpperBanner` (`editButton`) aponta para `${pathname}/edit`.
- Botão **VOLTAR PARA LISTA** no rodapé do detalhe.
- Refatoração paralela: renomeação/organização de componentes CMS de **themes** (`detail-theme`, `render-theme`) e estilos compartilhados em `form.styles.ts`.

Entrega cobre leitura e layout básico do detalhe. **Não** implementa Arquivar, Cancelar com tooltip nem rota de edição (`/cms/exercises/[id]/edit` inexistente no repo).

## Commits (PR #336)

| SHA (curto) | **Data (autor)** | Branch | Mensagem |
|-------------|------------------|--------|----------|
| `79c0745` | **2026-06-02** | `302-mvp3-visualizacao-do-item-exercicio` | feat: cria visualização do item exercicio |
| `ebed06c` | **2026-06-08** | `302-mvp3-visualizacao-do-item-exercicio` | fix: adiciona demais campos ao detalhe do exercício |
| `e0e1634` | **2026-06-08** | `302-mvp3-visualizacao-do-item-exercicio` | fix: ajusta botão voltar para a lista refs #302 @Peu-Wan |
| `a84bf33` | **2026-06-08** | `302-mvp3-visualizacao-do-item-exercicio` | fix: ajusta estilizacao do botao de voltar para alista refs #302 @Peu-Wan |
| `9af220d` | **2026-06-12** | `302-mvp3-visualizacao-do-item-exercicio` | fix: remove bloco de código comentando |

**Nota autor vs committer:** datas coincidem nos commits funcionais — sem rebase tardio visível.

**Tamanho (gh):** +222 / −21; 12 ficheiros; review: **jauregao** *approved* 2026-06-17 (única review no PR).

**Timeline:** issue criada 2026-02-18; primeiro commit 2026-06-02 (~104 dias); PR aberto 2026-06-09; merge 2026-06-17 (~8 dias com PR aberto).

## Diagnóstico de duração

- **Pickup time alto:** ~104 dias entre abertura da issue e primeiro commit — padrão recorrente nos cards MVP3 CMS.
- **Burst de entrega:** após o feat inicial (02/06), iteração concentrada em 08/06 (campos + botão voltar após feedback @Peu-Wan) e limpeza em 12/06.
- **Rework localizado:** dois commits seguidos no botão “voltar” (funcional + estilo) — feedback de review incorporado na branch, sem thread na issue.
- **PR moderado:** 222 linhas; escopo vertical (API + página + detalhe); merges de `main` na branch (09/06, 10/06) indicam manutenção da branch, não feature extra.
- **Review wait:** PR aberto 09/06, aprovação só 17/06 (~8 dias) — gap entre último commit funcional (12/06) e merge.
- **Issue sem discussão:** zero comentários; critérios de aceite completos no corpo, mas sem registro de trade-offs (ex.: botões Arquivar/Cancelar).
- **Qualidade:** `console.log("RESPOSTA DA API:")` permanece em `detail-exercise.tsx` — checklist do PR pede ausência de console.log.

**Sinais moderados** de pickup prolongado; ciclo de implementação pós-início foi curto; **escopo entregue vs. card** é parcial (ver pendências).

## Pendências

- **Critérios de aceite não cobertos no merge:** botões **Arquivar** e **Cancelar** com tooltip de confirmação; redirecionamento ao cancelar conforme Figma; fluxo de **edição** (`/cms/exercises/[id]/edit` não existe — botão Editar no banner levaria a 404).
- Remover `console.log` / validar ausência de warnings (checklist do PR desmarcada).
- Dependência de backend: passos de teste do PR citam branch **98** no back — confirmar se `GET /exercises/:id` já está em `main` do `e-acelera-back`.
- Segundo revisor solicitado no template do PR — só **jauregao** aprovou.
- Card irmão **#301** (visualização tópico) pode servir de referência para alinhar padrão de ações (Arquivar/Cancelar/Editar).

## Perguntas úteis para reunião

1. **Avanço:** reutilizar `UpperBanner` + `TableCMS` + padrão de detalhe acelerou em relação a criar do zero? O feedback do @Peu-Wan nos commits de 08/06 (botão voltar) foi suficiente sem thread na issue?
2. **Atrito:** o que explica ~104 dias até o primeiro commit — dependência da listagem (#296), do backend (#98) ou priorização da turma? Por que Arquivar/Cancelar/tooltip ficaram de fora — escopo cortado ou card seguinte?
3. **Review:** o intervalo 12/06 → aprovação 17/06 foi fila de review, dependência do back ou outro bloqueio?
4. **Coding agent:** não há `Co-authored-by` de bot — usaram agente para gerar `detail-exercise.tsx` ou a rota BFF? Onde teria ajudado — checklist vs critérios de aceite, remover console.log, ou scaffold da página `/edit`?
