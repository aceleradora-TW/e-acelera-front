---
tags:
  - Debrief
  - Dev
created: 2026-05-19
updated: 2026-05-19
issue_source: "github"
issue_ref: "aceleradora-TW/e-acelera-front#320"
issue_url: "https://github.com/aceleradora-TW/e-acelera-front/issues/320"
purpose: debriefing compartilhado para ações corretivas e melhorias
---

# [BUG] Frontend: Inconsistência na listagem de temas (Stackby vs CMS)

**PR:** [#322](https://github.com/aceleradora-TW/e-acelera-front/pull/322) — *merged* 2026-05-14 (UTC)  
**Branch:** `320/inconsistencia-listagem-temas` → `main`  
**Autor PR:** Pedro Wantuir (`Peu-Wan`)  
**Issue #320:** **aberta** após merge; label `qa em prod`.

**Metadados GitHub:** assignees Peu-Wan, Geoziihdev, aalinemariah; 0 comentários na issue.

## Resumo do que foi feito

Correção da listagem de temas/trilhas em `/nivelamento` e `/autoestudo` quando coexistem fluxos **CMS** (`/api/themes`) e legado **Stackby**, com respostas em formatos diferentes:

- **`ContainerCardsThemes`:** normaliza array (`data.data` vs `data.data.data`), filtra por `category` antes do render, optional chaining para dados incompletos.
- **`src/app/api/themes/route.ts`:** proxy alinhado ao endpoint `/themes` do backend; mapeamento PT→EN (`Nivelamento`→`Leveling`, `Autoestudo`→`SelfStudy`).
- **`src/types/type.ts`:** interfaces para tipagem da resposta.
- **`.gitignore`:** ignora doc interno de filtragem.

Documentação extensa no corpo do PR explica troca de `/status` vs `/themes` e comportamento esperado do backend.

## Commits (PR #322)

| SHA (curto) | **Data (autor)** | Mensagem |
|-------------|------------------|----------|
| `cba23bb` | **2026-05-05** | fix: corrige bug de nivelamento, autoestudo e flagsmith *(Geoziihdev)* |
| `fdf85f9` | **2026-05-06** | Remove debug console.log statements from themes route *(Copilot agent + Peu-Wan)* |
| `0806cb8` | **2026-05-12** | feat: alterações requisitadas foram implementadas |
| `03f7d81` | **2026-05-13** | fix: implementa interfaces no arquivo type |
| `c203794` | **2026-05-14** | Merge branch `main` into feature branch |

**Tamanho (gh):** +103 / −56; 4 ficheiros; 5 reviews (incl. Copilot PR reviewer).

**Timeline:** PR criado 2026-05-06, merge 2026-05-14 (~8 dias) — ciclo relativamente curto após retomada do card.

## Diagnóstico de duração

- **Complexidade de domínio:** bug estrutural (dois fluxos de dados + Flagsmith + formatos de resposta) — justifica iteração e documentação longa.
- **Handoff no branch:** primeiro commit de outra autora (Geovana) no mesmo tema; trabalho consolidado por Peu-Wan no PR final.
- **Rework / refinamento:** commits de 12–13/05 sugerem feedback de review (alterações pedidas + interfaces).
- **Issue não fechada** com label `qa em prod` — possível validação em produção ainda em curso após merge.

**Sinais leves** de duração; entrega dentro de ~1,5 semana no PR #322.

## Pendências

- **Fechar ou atualizar a issue #320** após QA em prod (label `qa em prod` indica follow-up pendente).
- Checklist do PR (review, QA, deploy teste) aparece **desmarcada** no template — confirmar o que foi feito de fato.
- Avaliar se filtro só no front é suficiente a médio prazo ou se convém card de backend/Flagsmith para eliminar duplicidade de fluxos.
- Retirar dependência de formatos ambíguos (`data.data.data`) quando o contrato da API estabilizar.

## Perguntas úteis para reunião

1. **Avanço:** a documentação no PR (mapeamento PT/EN, `/themes` vs `/status`) ajudou review/QA? Replicar esse nível de contexto em bugs de integração?
2. **Atrito:** o que mais custou — entender Flagsmith, formatos Stackby vs CMS, ou coordenação entre pessoas no mesmo branch?
3. **Coding agent:** commit do Copilot agent removeu console.logs — onde agente ajudou vs. onde precisou de implementação manual (filtro, tipos)? Que apoio extra faria diferença (teste de contrato da API, matriz flag on/off)?


## Melhorias

- Handoff poderia ter sido mais rápido para resolver problema em produção