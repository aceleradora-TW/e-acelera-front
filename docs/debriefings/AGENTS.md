# Debriefs (issues) — e-acelera-front

Debriefings pós-implementação (GitHub) vivem **neste repositório**, em `docs/` (nunca `doc/`).

**Migração (2026-04):** conteúdos que estavam em `doc/debriefings/issues/` foram movidos para `docs/debriefings/issues/`, com renome para o padrão `github-<n>-<slug>.md`. A pasta `doc/debriefings/` deixou de ser usada.

## Estrutura

```
docs/debriefings/
  AGENTS.md          # este ficheiro
  issues/
    YYYY-MM/         # mês de referência do debrief (não a data de criação da issue)
      github-<número>-<slug-curto>.md
```

- **Pasta `issues/YYYY-MM/`** — organiza por **mês** (primeiro `created` do ficheiro ou mês do trabalho analisado).
- **Nome do ficheiro — GitHub:** `github-<issue#>-<slug>.md`
  - `slug`: ASCII minúsculo, palavras com hífen, descritivo e curto (ex.: `visualizacao-lista-topicos`).
- **Não** usar o padrão antigo `RE <id> - título longo.md` em novos ficheiros; renomes em lote de arquivos existentes são opcionais.

## Frontmatter sugerido

```yaml
---
tags:
  - Debrief
  - Dev
created: YYYY-MM-DD
updated: YYYY-MM-DD
issue_source: "github"
issue_ref: "aceleradora-TW/e-acelera-front#<n>"
issue_url: "https://github.com/aceleradora-TW/e-acelera-front/issues/<n>"
purpose: debriefing compartilhado para ações corretivas e melhorias
---
```

