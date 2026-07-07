---
tags:
  - Debrief
  - Dev
created: 2026-06-30
updated: 2026-06-30
issue_source: "github"
issue_ref: "aceleradora-TW/e-acelera-front#338"
issue_url: "https://github.com/aceleradora-TW/e-acelera-front/issues/338"
purpose: debriefing compartilhado para ações corretivas e melhorias
---

# [MVP3] Edição Exercises

**PR:** [#341](https://github.com/aceleradora-TW/e-acelera-front/pull/341) — *merged* 2026-06-29 12:28 UTC  
**Branch:** `338-mvp3-edicao-exercises` → `main`  
**Autor PR:** Jamile Santana da Silva (`Jhamyllie`)  
**Issue #338:** *closed* com o merge do PR #341.

**Metadados GitHub:** assignees Jhamyllie, Peu-Wan; sem labels; 0 comentários na issue; critérios de aceite com Figma (inputs editáveis, botão salvar, tooltip em salvar/cancelar, redirecionamento).

## Resumo do que foi feito

Implementação da **edição de exercícios** no CMS (`/cms/exercises/[id]/edit`):

- Refatoração do componente de detalhe para suportar modo visualização e edição: `detail-exercise.tsx`.
- Página de edição: `src/app/cms/exercises/[id]/edit/page.tsx`.
- Rota BFF `PATCH`: `src/app/api/exercises/updateExercise/route.ts`.
- Ajustes em `form-actions.tsx`, `form.styles.ts` e tipos em `type.ts` para fluxo salvar/cancelar.
- Cliente API: `src/utils/api/exercises.ts`.

Iteração em sequência: esboço inicial (19/06), refatoração da página e rotas GET/PATCH (23/06), correção do botão salvar (24/06), merge de `main` e remoção de botões duplicados no header (28/06).

## Commits (PR #341)

| SHA (curto) | **Data (autor)** | Branch | Mensagem |
|-------------|------------------|--------|----------|
| `ef11d58` | **2026-06-19** | `338-mvp3-edicao-exercises` | feat: inicia edicao do item de exercicio |
| `db3255c` | **2026-06-23** | `338-mvp3-edicao-exercises` | fix: cria pagina de edicao de exercicio e refatora componente para aceitar detalhar e editar |
| `4fa583e` | **2026-06-24** | `338-mvp3-edicao-exercises` | fix: resolve problema de não estar salvando ao clicar no botão salvar |
| `8c094cc` | **2026-06-28** | `338-mvp3-edicao-exercises` | Merge origin/main into 338-mvp3-edicao-exercises |
| `2189beb` | **2026-06-28** | `338-mvp3-edicao-exercises` | fix: remove botoes SALVAR e CANCELAR do header |

**Nota autor vs committer:** datas coincidem nos commits funcionais listados.

**Tamanho (gh):** +229 / −100; 7 ficheiros no diff final; review: **jauregao** *approved* 2026-06-25.

**Timeline:** issue criada 2026-06-12; primeiro commit 2026-06-19 (~7 dias); PR aberto 2026-06-25; aprovação 2026-06-25; merge 2026-06-29 (~4 dias após aprovação; ~17 dias desde abertura da issue).

## Diagnóstico de duração

- **Pickup moderado:** ~7 dias entre issue e primeiro commit — card criado após entrega de visualização (#302).
- **Rework em sequência:** três commits `fix:` sobre `detail-exercise.tsx` e form (salvar, header duplicado) — típico de alinhar UX ao Figma e reutilizar componente de detalhe.
- **Review wait pós-aprovação:** aprovado 25/06 no commit `4fa583e`, mas merge só 29/06 após commits de 28/06 (merge `main` + ajuste de header) — possível espera de estabilização ou fila.
- **Reutilização de padrão CMS:** segue o mesmo molde de edição de themes/topics (#334, #340) — acelera implementação.
- **PR de tamanho moderado:** 7 ficheiros, escopo vertical (página + BFF + componente).
- **Issue sem thread:** critérios claros (Figma + checklist) mas zero comentários; bloqueios do botão salvar não documentados na issue.

**Sinais moderados** de rework de UX e gap aprovação→merge; ciclo issue→merge em ~17 dias é aceitável para card CMS com refator de componente compartilhado.

## Pendências

- Validar em homologação tooltip de confirmação e redirecionamento após salvar/cancelar (critérios de aceite).
- Checklist do PR (review duplo, QA) desmarcada no corpo do merge.
- Confirmar contrato `PATCH` com back (update de exercício) e matriz de status HTTP (400, 401, 403, 404).
- Verificar se edição depende de tratamento de erro do back (#89, #100) para payloads inválidos.

## Perguntas úteis para reunião

1. **Avanço:** reutilizar `detail-exercise.tsx` em modo edição (como themes/topics) reduziu tempo vs. página isolada? O que do padrão `form-actions` + BFF `update*` vale documentar para os próximos CRUDs?
2. **Atrito:** o bug do botão salvar (24/06) veio de estado do form, contrato PATCH ou guard de sessão? Por que merge 4 dias após aprovação — commits pós-review ou fila de merge?
3. **Coding agent:** foi usado coding agent em alguma iteração (sem evidência nos commits)? Que apoio teria ajudado — testes e2e do fluxo salvar/cancelar, checklist de paridade com Figma, ou espelhar diff do PR #340 (topics) como template?
