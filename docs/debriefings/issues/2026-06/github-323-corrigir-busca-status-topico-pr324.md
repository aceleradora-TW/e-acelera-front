---
tags:
  - Debrief
  - Dev
created: 2026-06-02
updated: 2026-06-02
issue_source: "github"
issue_ref: "aceleradora-TW/e-acelera-front#323"
issue_url: "https://github.com/aceleradora-TW/e-acelera-front/issues/323"
purpose: debriefing compartilhado para ações corretivas e melhorias
---

# [BUG] Corrigir busca de status do tópico retornando itemId null

**PR:** [#324](https://github.com/aceleradora-TW/e-acelera-front/pull/324) — *merged* 2026-05-28 12:22 UTC  
**Branch:** `corrigir-busca-status` → `main`  
**Autor PR:** Lorenzo Brizolla (`Lorenzo-Brizolla`)  
**Issue #323:** **aberta** após merge; label `bug`, `em ajuste`.

**Metadados GitHub:** assignees Jhamyllie, Peu-Wan, Lorenzo-Brizolla; critérios de aceite detalhados (proxy, remoção de busca duplicada, formato de URL); comentário de QA de NETONoHands em 2026-06-02 documentando diagnóstico com mentora.

## Resumo do que foi feito

Correção do fluxo de status de exercícios por tópico no frontend:

- **`getTopicExercisesStatus/route.ts`:** remove leitura de `itemId`; alinha chamada ao backend em `/status/{topicId}/topicId`.
- **`DetailingTopicContent`:** remove `useFetchTopicStatus(id)` e `useEffect` duplicado.
- **`RenderDetailingTopicPage`:** reposiciona `GlobalContextProvider` para envolver conteúdo que consome contexto global.
- **`package-lock.json`:** atualização incidental durante merge/rebase.

Elimina URLs incorretas como `/status/{topicId}/item/null` e requisições duplicadas ao carregar a tela de tópico.

## Commits (PR #324)

| SHA (curto) | **Data (autor)** | Branch | Mensagem |
|-------------|------------------|--------|----------|
| `a5ad4aa` | **2026-05-15** | `corrigir-busca-status` | fix: update fetch logic and clean up unused imports in topic detail components |
| `a1e5cdd` | **2026-05-19** | merge `main` | Merge branch `main` into corrigir-busca-status |
| `68c50d2` | **2026-05-19** | `corrigir-busca-status` | refactor: clean up imports in DetailingTopicContent component |
| `d40d507` | **2026-05-19** | `corrigir-busca-status` | chore: update dependencies in package-lock.json |
| `42ee1a2` | **2026-05-19** | `corrigir-busca-status` | chore: update package-lock.json |

**Nota autor vs committer:** datas coincidem em todos os commits acima — sem sinal de rebase tardio.

**Tamanho (gh):** +442 / −377; 4 ficheiros; reviews: **jauregao** *changes requested* 2026-05-18, **approved** 2026-05-19; Copilot comentou variáveis não usadas.

**Timeline:** PR criado 2026-05-15; aprovado 2026-05-19; merge 2026-05-28 (~9 dias após aprovação).

## Diagnóstico de duração

- **PR grande:** +442 linhas (zona de alerta > 400); parte do volume vem de `package-lock.json` e merge de `main`, mas o diff funcional ainda é substancial.
- **Branch longa:** branch aberta ~13 dias (15/05 → 28/05).
- **Review wait pós-aprovação:** aprovado 19/05, merge só 28/05 — gap de ~9 dias sem novos commits funcionais.
- **Escopo bem definido:** issue com critérios numerados e notas técnicas (401 resolvido no back, foco front) reduziu ambiguidade.
- **Bug de difícil detecção:** comentário de QA (02/06) confirma dependência de pareamento com mentora — possível atrito de diagnóstico antes do fix.

**Sinais moderados** de duração operacional (fila pós-aprovação, PR volumoso); escopo alinhado ao card.

## Pendências

- **Fechar issue #323** após confirmar QA em ambiente de teste (comentário de NETONoHands indica validação recente).
- Remover label `em ajuste` quando card for fechado.
- Checklist do PR (review, QA) ainda desmarcada no corpo do merge.
- Validar se variáveis não usadas apontadas por Copilot (`handleTopicStatus`, `id`) foram resolvidas na `main`.

## Perguntas úteis para reunião

1. **Avanço:** os critérios de aceite (URL, uma requisição, proxy sem `itemId`) aceleraram o alinhamento entre hook e rota? O que replicar em cards de integração front/back?
2. **Atrito:** o intervalo 19/05→28/05 entre aprovação e merge veio de fila de review/QA, prioridade noutros cards, ou espera por validação do bug elusivo?
3. **Coding agent:** Copilot review apontou variáveis não usadas — onde o agente ajudou (proxy route, duplicação) e onde faltou apoio (reprodução do `/item/null`, teste e2e de Network tab)?
