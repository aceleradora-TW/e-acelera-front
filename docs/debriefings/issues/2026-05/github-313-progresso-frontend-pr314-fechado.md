---
tags:
  - Debrief
  - Dev
created: 2026-05-26
updated: 2026-05-26
issue_source: "github"
issue_ref: "aceleradora-TW/e-acelera-front#313"
issue_url: "https://github.com/aceleradora-TW/e-acelera-front/issues/313"
purpose: debriefing compartilhado para ações corretivas e melhorias
---

# [BUG] Correção das requisições de progresso e envio de autenticação (Frontend)

**PR:** [#314](https://github.com/aceleradora-TW/e-acelera-front/pull/314) — *closed* 2026-05-13 (sem merge)  
**Branch:** `fix/progress-401-frontend`  
**Autor PR:** Geovana Santos (`Geoziihdev`)  
**Issue #313:** **aberta**; labels `bug`, `em ajuste`.

## Resumo do que foi feito

Investigação e mitigação de erros 401/400 nas rotas de progresso em produção, atuando na **prevenção de chamadas inválidas no frontend**:

- Utilitário `src/utils/progress-debug.ts` — validação de params (`null`/`undefined`/vazio) e logs condicionais por flag.
- Bloqueio de fetch/update quando `topicId`/`itemId` inválidos ou sessão ausente (`fetchProgress`, `fetchStatus*`, rotas `/api/backend/*`).
- `StatusSelect`: sanitização de IDs da URL, remoção de update duplicado.
- Fallback `NotStarted` em 404 no `getExerciseStatus`.
- `.gitignore` para doc de investigação gerada.

Escopo explícito no PR: separar análise de erro **403** para card específico.

## Commits (PR #314)

| SHA (curto) | **Data (autor)** | Mensagem |
|-------------|------------------|----------|
| `9484189` | **2026-04-07** | fix: corrige fluxo de progresso e validacao de parametros no frontend |
| `5c204d6` | **2026-04-10** | chore: ignore generated investigation doc |
| `d6ae11e` | **2026-04-10** | refactor: simplify topic status backend request |

**Tamanho (gh):** +347 / −26; 10 ficheiros; Copilot review (abril); **sem reviews humanas aprovando**.

**Timeline:** PR aberto 2026-04-07, fechado 2026-05-13 (~36 dias) **sem merge**.

## Diagnóstico de duração

- **PR fechado sem merge** com issue ainda aberta e label `em ajuste` — trabalho não integrado via este PR ou substituído por outra abordagem.
- **Branch longa:** ~36 dias aberta; último commit funcional em 2026-04-10.
- **Escopo de investigação + logs temporários:** risco de não atender checklist “sem console.log” se mergeado sem limpeza final.
- **Horizontal slicing:** card pareado com backend #75 / PR #76 (também fechado sem merge) — integração end-to-end incompleta.
- **Pickup time:** gap longo entre abril e fechamento em maio sem novos commits.

**Sinais fortes** de duração prolongada e entrega incompleta neste PR.

## Pendências

- Confirmar se alguma parte deste diff entrou em `main` por outro PR ou se o fix de progresso no front ainda está pendente.
- Atualizar issue #313 com decisão: reabrir PR, cherry-pick, ou novo card.
- Alinhar com backend #75 — ambos PRs fechados no mesmo dia (13/05).
- Remover ou formalizar logs de debug (`progress-debug.ts`) antes de merge futuro.

## Perguntas úteis para reunião

1. **Avanço:** a investigação documentada (401 por params inválidos vs. token) ajudou a isolar causa raiz mesmo sem merge?
2. **Atrito:** por que #314 foi fechado sem merge após ~36 dias (review, escopo de logs, duplicidade com outro fix)?
3. **Coding agent:** Copilot reviewou 9 ficheiros em abril — o agente acelerou a investigação? Que apoio faltou (teste e2e do fluxo de progresso, pair front/back)?
