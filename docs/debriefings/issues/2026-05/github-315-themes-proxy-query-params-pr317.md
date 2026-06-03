---
tags:
  - Debrief
  - Dev
created: 2026-05-26
updated: 2026-05-26
issue_source: "github"
issue_ref: "aceleradora-TW/e-acelera-front#315"
issue_url: "https://github.com/aceleradora-TW/e-acelera-front/issues/315"
purpose: debriefing compartilhado para ações corretivas e melhorias
---

# [BUG] Lista de temas não aparece no CMS em produção (GET /api/themes)

**PR:** [#317](https://github.com/aceleradora-TW/e-acelera-front/pull/317) — *merged* 2026-05-13 (UTC)  
**Branch:** `feat/api-themes-proxy-query-params` → `main`  
**Autor PR:** Geovana Santos (`Geoziihdev`)  
**Issue #315:** **aberta** após merge.

**Metadados GitHub:** assignee Geoziihdev; label `bug`; critérios de aceite e cenários detalhados na issue.

## Resumo do que foi feito

Ajuste do proxy Next.js `GET /api/themes` para destravar listagem paginada no CMS e manter filtro por categoria nas trilhas:

- **`src/app/api/themes/route.ts`:** lê `category`, `page`, `limit` via query params; repassa ao backend só quando informados; retorna payload original (`data` + `meta`) sem reempacotar.
- **`src/hooks/useThemeApi.ts`:** envia `category` via query param em vez de header.
- **`src/utils/api/themes.ts`:** consome proxy com paginação na query string.

Relacionado ao bug #320 (filtro Stackby vs CMS), mas escopo deste card restrito ao contrato do proxy.

## Commits (PR #317)

| SHA (curto) | **Data (autor)** | Mensagem |
|-------------|------------------|----------|
| `489b124` | **2026-04-25** | feat(api): ajusta proxy de themes para query params e payload original |
| `0876234` | **2026-04-25** | refactor(api): remove normalizacao extra de category no proxy |
| `5b70f18` | **2026-05-13** | fix: resolve merge conflict |

**Tamanho (gh):** +37 / −18; 3 ficheiros; **jauregao** aprovou 2026-05-12; Copilot comentou pós-merge.

**Timeline:** PR criado 2026-04-25, merge 2026-05-13 (~18 dias); implementação nos dois primeiros commits do mesmo dia.

## Diagnóstico de duração

- **Review wait:** código pronto 25/04; aprovação 12/05; merge no dia seguinte após resolução de conflito.
- **PR pequeno e vertical:** proxy + consumidores alinhados — bom slicing.
- **Issue não fechada:** entrega mergeada mas card aberto — atualizar estado ou validar critérios restantes.
- **Dependência com #320:** PR #322 posterior alterou novamente `route.ts`; confirmar que critérios de #315 permanecem satisfeitos.

**Sinais leves** de duração (fila de review + conflito com `main`).

## Pendências

- Fechar issue #315 se `/cms/themes` paginado e trilhas por categoria validados em prod.
- Corrigir mensagem de log inconsistente apontada pelo Copilot (`Error fetching status` em rota de themes).
- Checklist de testes do PR ainda desmarcada no corpo.

## Perguntas úteis para reunião

1. **Avanço:** a especificação de cenários (`/nivelamento`, `/autoestudo`, `/cms/themes`) na issue reduziu retrabalho?
2. **Atrito:** o conflito de merge em 13/05 veio de trabalho paralelo no mesmo `route.ts` (#322 / #320)?
3. **Coding agent:** Copilot review pós-merge — vale automatizar checklist de contrato (`data`/`meta`) para proxies `/api/*`?
