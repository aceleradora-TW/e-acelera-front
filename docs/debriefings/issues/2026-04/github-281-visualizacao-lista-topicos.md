---
tags:
  - Debrief
  - Dev
created: 2026-04-28
updated: 2026-04-28
issue_source: github
issue_ref: "aceleradora-TW/e-acelera-front#281"
issue_url: "https://github.com/aceleradora-TW/e-acelera-front/issues/281"
purpose: debriefing compartilhado para ações corretivas e melhorias
---

# [MVP3] Visualização de lista de Tópicos

## Cabeçalho

| | |
|---|---|
| **GitHub** | [Issue #281](https://github.com/aceleradora-TW/e-acelera-front/issues/281) |
| **Estado** | Aberta (`OPEN`) |
| **Label** | `em ajuste` |
| **Assignees (GitHub)** | Jhamyllie, andrea-leite, pedro-idiarte, Geoziihdev |
| **Autor issue** | @Geoziihdev |
| **Criada / atualizada** | 2026-01-06 / 2026-04-28 |
| **PR associado** | [#307](https://github.com/aceleradora-TW/e-acelera-front/pull/307) `281/visualizacao conteudo topics` — **aberto**, base `main`, head `281/visualizacao-conteudo-topics` |
| **Branch (feature)** | `281/visualizacao-conteudo-topics` |
| **Estado do merge (gh)** | `MERGEABLE`, `mergeStateStatus: BEHIND` (branch atrás de `main`) |

**Nota (evidência via `gh`, sem análise por `git log` local):** a lista de commits e ficheiros alterados foi obtida com `gh pr view 307 --json commits,files,...`. A pesquisa `gh search commits "281"` / `"#281"` no repo devolveu **0 resultados** — o rastreio do trabalho está no **PR #307** e nas mensagens dos commits (nem todas citam `281` no título).

**Comentários na issue:** 0 (sem discussão no thread da #281).

## Resumo do que está a ser feito

Implementação da rota/área **CMS Topics** com dados da API de Topics, integrando listagem com o layout admin:

- Página/entrada: `src/app/cms/topics/page.tsx` (+9 linhas).
- Novo render da tabela de tópicos: `src/components/PageElements/cms/render-topic.tsx` (+62 linhas).
- Utilitário/API: `src/utils/api/topics.ts` (+5 linhas).

No corpo do PR, o autor descreve que **isActive** de Topics estava com problema no *backend* (`serviceTopics`); o card foi encerrado do lado dele **sem** coluna isActive correta na tabela até correção no backend, com plano de voltar a expor isActive no admin após o fix.

Iteração visível nos commits: feature inicial de lista, vários ajustes/fixes/refactors em **isActive** (valor errado, tipagem no `form-topic`, limpeza de dados não usados), mais merges de `main` e sincronização da branch.

## Commits (PR #307, ordem no PR)

| SHA (curto) | **Data (autor)** | Mensagem |
|-------------|------------------|----------|
| `745c24a` | **2026-03-17** | `feat: lista de topics aparecendo` |
| `4ee4488` | **2026-03-24** | `fix: isActive esta aparecendo mas aparece errado` |
| `dba78dd` | **2026-03-25** | `refs #281 - chore: teste link com issue` (autor: Alejandro Olchik) |
| `e4f0ff7` | **2026-03-26** | `refactor: refatorado campo de isActive no table` |
| `71d2ca0` | **2026-03-26** | Merge de branch remota (sync) |
| `6d4ba58` | **2026-03-26** | `refactor: refatorado campo isActive no table, limpeza... dados nao utiliazdos` |
| `1fbd14d` | **2026-03-26** | `Merge branch 'main' into 281/visualizacao-conteudo-topics` |
| `846057f` | **2026-03-26** | `fix: removido tipagem booleana do isActive no form-topic` |
| `9c11cc9` | **2026-04-01** | Merge de branch remota (sync) |

**Autor vs committer:** nos metadados do `gh pr view`, `authoredDate` e `committedDate` coincidem por commit; não há indício de rebase com datas de committer diferentes.

**Tamanho do PR (gh):** +76 / −0 nas alterações agregadas do diff do PR; 3 ficheiros listados.

## Diagnóstico de duração

Sinais observáveis:

- **Múltiplos commits de correção/refator** no mesmo eixo (**isActive** / tipagem / limpeza) — indica iteração ou dependência de contrato dado errado (alinha com a nota do PR sobre backend).
- **PR aberto** desde **2026-03-26** (criação do PR) com **última atualização 2026-04-06** e **branch `BEHIND` main** — risco de conflito/rebase e tempo até merge.
- **Issue ainda aberta** com label **em ajuste** — alinhado a trabalho não concluído do ponto de vista de fluxo (merge + validação de aceite).
- **Zero comentários** na issue — pouca transparência no thread sobre bloqueios (só a descrição do PR documenta o problema de backend).
- `gh search commits` não substitui o rastreio por **PR** quando a convenção de mensagem não cita o número.

**Nenhum sinal** de escopo claramente fora da issue nos ficheiros listados; o foco mantém-se em topics + isActive.

## Pendências (critérios da #281 vs. estado actual)

- Fechar o ciclo: **merge** do PR #307 (ou substituir por outro PR) e **atualizar/revisar a issue** (fechar ou redefinir escopo).
- Confirmar no ambiente: **Figma** (node no critério de aceite), **ordenação em todos os campos**, **vazio** e **paginação** — o diff do PR, pela descrição, centra-se em listagem e isActive; validar se ordenação/empty state/paginação estão cobertos neste PR ou noutros.
- **isActive** dependente do **serviceTopics** no backend — alinhar com backend antes de considerar aceite fechado.
- Sincronizar a branch com `main` (`BEHIND`) antes do merge.
- Comentar na #281 o estado (bloqueio backend, link do #307) para quem seguir só a issue.

## Perguntas úteis para reunião

1. **O que ajudou** a avançar (ex.: card dependente do header/tabela #284–285, clareza do critério de rota `/cms/topics`, testes manuais locais)? Há algo a repetir em cards de admin semelhantes?
2. **O que atrasou** o merge: dependência de backend (isActive), fila de review, branch atrás de `main`, ou prioridade noutro card? O rótulo *em ajuste* reflete ainda a causa principal?
3. **Coding agent:** alguém usou agent/assistente neste card (há commit `refs #281 - chore: teste link` de outro autor) — em que fases (exploração, boilerplate, testes) e **que apoio extra** faria diferença (ex.: teste E2E, checagem de alinhamento com Figma, PR menor só com listagem e PR separado para isActive)?

---

## Referência de comandos `gh` (para repetir a análise)

```bash
gh issue view 281 --repo aceleradora-TW/e-acelera-front --json title,state,labels,assignees,url,body,updatedAt
gh pr list --repo aceleradora-TW/e-acelera-front --search "281" --state all
gh pr view 307 --repo aceleradora-TW/e-acelera-front --json commits,files,state,mergeStateStatus,additions,deletions,url,title,body
```

`gh search commits "281" --repo aceleradora-TW/e-acelera-front` pode devolver vazio; o PR liga a issue e os commits de trabalho.
