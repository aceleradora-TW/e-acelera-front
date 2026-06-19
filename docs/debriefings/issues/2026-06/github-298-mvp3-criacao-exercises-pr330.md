---
tags:
  - Debrief
  - Dev
created: 2026-06-09
updated: 2026-06-09
issue_source: "github"
issue_ref: "aceleradora-TW/e-acelera-front#298"
issue_url: "https://github.com/aceleradora-TW/e-acelera-front/issues/298"
purpose: debriefing compartilhado para ações corretivas e melhorias
---

# [MVP3] Criação Exercises

**PR:** [#330](https://github.com/aceleradora-TW/e-acelera-front/pull/330) — *merged* 2026-06-05 17:31 UTC  
**Branch:** `298-mvp3-criacao-exercises` → `main`  
**Autor PR:** Neto Trindade (`NETONoHands`)  
**Issue #298:** *closed* com o merge do PR #330.

**Metadados GitHub:** assignees Jhamyllie, NETONoHands; sem labels; 0 comentários na issue; critérios de aceite com fluxo, Figma e tooltip em salvar/cancelar.

## Resumo do que foi feito

Implementação da **criação de exercícios** no CMS (`/cms/exercises/create`), reutilizando o formulário genérico do dashboard:

- Definição de campos: `src/components/UI/dashboard/forms/defs/exercise.defs.ts` (novo).
- Página de criação: `src/app/cms/exercises/create/page.tsx`.
- Rota API Next `POST`: `src/app/api/exercises/route.ts` (+45 linhas).
- Cliente: `src/utils/api/exercises.ts`.
- Ajustes compartilhados em `form.tsx`, `field-renderer.tsx` e pequena alteração em `themes/create/page.tsx` para alinhar o fluxo de formulário.

Entrega cobre página, inputs, salvar/cancelar e redirecionamento pós-ação. O critério de **tooltip** em salvar/cancelar não aparece explicitamente no changelog do PR.

## Commits (PR #330)

| SHA (curto) | **Data (autor)** | Branch | Mensagem |
|-------------|------------------|--------|----------|
| `7ca876a` | **2026-05-22** | `298-mvp3-criacao-exercises` | feat: cria arquivo def para exercicio |
| `000f691` | **2026-05-22** | `298-mvp3-criacao-exercises` | fix: criacao da pasta create e arquivo page.tsx para exercicios refs #298 |
| `b0c56f9` | **2026-05-26** | `298-mvp3-criacao-exercises` | feat: implement exercise creation API and update form handling *(Co-authored-by: Jamile)* |
| `9dfdde0` | **2026-06-03** | `298-mvp3-criacao-exercises` | fix: remove código comentado |
| `bf1dbe6` | **2026-06-03** | `298-mvp3-criacao-exercises` | fix: remove comentario |

**Nota autor vs committer:** datas coincidem nos commits funcionais — sem rebase tardio visível.

**Tamanho (gh):** +258 / −41; 9 ficheiros; reviews: **jauregao** *changes requested* 2026-06-03, *approved* 2026-06-05.

**Timeline:** issue criada 2026-02-18; primeiro commit na branch 2026-05-22 (~94 dias); PR aberto 2026-05-26; merge 2026-06-05 (~10 dias com PR aberto).

## Diagnóstico de duração

- **Pickup time alto:** ~94 dias entre abertura da issue e primeiro commit funcional — padrão semelhante a outros cards MVP3 (ex.: #296).
- **Ciclo de PR relativamente curto:** uma vez aberto o PR #330, merge em ~10 dias com um ciclo de review (changes → ajustes → approve).
- **Rework pós-review leve:** dois commits de limpeza (comentários/código comentado) em 2026-06-03 após *changes requested*.
- **PR de tamanho moderado:** 258 linhas em 9 ficheiros — dentro da faixa revisável; parte do diff é infraestrutura de formulário compartilhada com outros cards CMS.
- **Pair visível:** commit `b0c56f9` com **Co-authored-by** Jamile — indica trabalho conjunto NETONoHands + Jhamyllie na API e no form.
- **Issue sem thread:** zero comentários; bloqueios do intervalo fev→mai não ficaram registrados no GitHub.

**Sinais moderados** de duração prolongada no pickup; entrega e review do PR em si foram ágeis.

## Pendências

- Confirmar em QA se o **tooltip** em salvar/cancelar (critério da issue) foi implementado ou ficou fora de escopo.
- Validar fluxo end-to-end com `topicId` real (passos do PR pedem ID manual do banco).
- Checklist do PR (“como testar”, review, QA) permanece desmarcada no corpo do merge.
- Testes de erro 400/401/403 não estão documentados no PR (presentes no card #299, não na #298).

## Perguntas úteis para reunião

1. **Avanço:** o reuso de `form.tsx` / `field-renderer` (já evoluído no card #299) acelerou a criação de exercises? O pair NETONoHands + Jhamyllie no commit da API ajudou a fechar a integração?
2. **Atrito:** o que explica os ~94 dias entre a issue e o primeiro commit — priorização, dependência da listagem (#296) ou do formulário compartilhado?
3. **Coding agent:** há evidência de agente de código neste PR (sem `Co-authored-by` de bot)? Onde teria ajudado — gerar `exercise.defs.ts` a partir do Figma, testes da rota `POST /api/exercises`, ou validar o critério de tooltip?
