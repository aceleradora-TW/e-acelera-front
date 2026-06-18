---
tags:
  - Debrief
  - Dev
created: 2026-06-09
updated: 2026-06-09
issue_source: "github"
issue_ref: "aceleradora-TW/e-acelera-front#299"
issue_url: "https://github.com/aceleradora-TW/e-acelera-front/issues/299"
purpose: debriefing compartilhado para ações corretivas e melhorias
---

# [MVP3] Criação de Tópicos

**PR:** [#326](https://github.com/aceleradora-TW/e-acelera-front/pull/326) — *merged* 2026-06-05 17:34 UTC  
**Branch:** `299-mvp3-criação-topics` → `main`  
**Autor PR:** Jamile Santana da Silva (`Jhamyllie`)  
**Issue #299:** *closed* com o merge do PR #326.

**Metadados GitHub:** assignees Jhamyllie, NETONoHands; sem labels; 0 comentários na issue; critérios de aceite com fluxo, Figma e exibição do novo tópico na lista.

## Resumo do que foi feito

Implementação da **criação de tópicos** no CMS (`/cms/topics/create`):

- Definição de campos: `src/components/UI/dashboard/forms/defs/topic.defs.ts` (novo).
- Página de criação: `src/app/cms/topics/create/page.tsx`.
- Rota API Next `POST`: `src/app/api/topics/route.ts` (+45 linhas).
- Cliente: `src/utils/api/topics.ts`.

Iteração longa na branch: página inicial em abril, ajustes de formulário reutilizável, rota POST, campos obrigatórios, autenticação e schema do form refinados após review. O PR de merge foi aberto com escopo enxuto (4 ficheiros, +154 linhas).

## Commits (PR #326)

| SHA (curto) | **Data (autor)** | Branch | Mensagem |
|-------------|------------------|--------|----------|
| `2f7cde2` | **2026-04-17** | `299-mvp3-criação-topics` | feat: implemeta pagina de criacao de topicos refs #299 |
| `23cce39` | **2026-05-11** | `299-mvp3-criação-topics` | fix: ajusta form reaproveitado, cria topic.def.ts, ajusta URL API refs #299 |
| `cc00931` | **2026-05-12** | `299-mvp3-criação-topics` | fix: cria rota para POST topics refs #299 |
| `7879d77` | **2026-05-13** | `299-mvp3-criação-topics` | fix: tentativa de ajuste de rota |
| `09d88b5` | **2026-05-13** | `299-mvp3-criação-topics` | fix: atualiza campos obrigatórios, corrige rota e autenticação |
| `aecd34a` | **2026-05-19** | `299-mvp3-criação-topics` | fix: atualiza package-lock.json |
| `e5d4fdb` | **2026-05-21** | `299-mvp3-criação-topics` | fix: atualiza tipos na pagina de criacao de temas refs #299 |
| `fb8c9da` | **2026-06-03** | `299-mvp3-criação-topics` | fix: retira catch desnecessário e ajusta schema do form de topicos |

**Nota autor vs committer:** datas coincidem nos commits funcionais listados.

**Tamanho (gh):** +154 / −0; 4 ficheiros; reviews: **jauregao** *changes requested* 2026-06-01, *approved* 2026-06-05; Jhamyllie comentou 2026-06-03.

**Timeline:** issue criada 2026-02-18; primeiro commit 2026-04-17 (~59 dias); PR aberto 2026-05-19; merge 2026-06-05 (~17 dias com PR aberto; ~49 dias com branch ativa).

## Diagnóstico de duração

- **Branch de vida longa:** ~49 dias entre primeiro commit funcional e merge; vários merges de `main` na branch (sinal de divergência acumulada).
- **Pickup time alto:** ~59 dias entre issue e primeiro commit; gap adicional abril→maio entre `2f7cde2` e `23cce39`.
- **Rework em sequência:** série de commits `fix:` em maio (rota, form, autenticação, schema) — típico de integração API + formulário compartilhado.
- **Review wait:** PR aberto 2026-05-19; *changes requested* só em 2026-06-01 (~13 dias); aprovação e merge no mesmo dia (2026-06-05).
- **PR focado no merge final:** diff enxuto (4 ficheiros) — boa aderência ao anti-padrão “PR gigante”.
- **Horizontal slicing leve:** ajustes em `themes/create` (`e5d4fdb`) dentro da mesma branch de tópicos — possível escopo cruzado entre cards CMS.
- **Issue sem thread:** bloqueios e decisões (rota, auth) não documentados nos comentários da issue.

**Sinais moderados a fortes** de duração prolongada (pickup + branch longa + rework); entrega final compacta e review fechado rapidamente após os ajustes de 2026-06-03.

## Pendências

- Validar em homologação os cenários do PR (201, 400, 401, 403, 500) e se o novo tópico aparece na lista após criar.
- Checklist do PR (deploy, review, QA) desmarcada no corpo do merge.
- Confirmar se alterações em `themes/create` (`e5d4fdb`) eram pré-requisito deste card ou deveriam ter ido em issue separada.
- `package-lock.json` atualizado na branch — verificar se houve dependência funcional ou apenas sync.

## Perguntas úteis para reunião

1. **Avanço:** o padrão `topic.defs.ts` + rota `POST /api/topics` virou base para o card #298 (exercises)? O que do formulário genérico vale documentar para os próximos CRUDs do CMS?
2. **Atrito:** os vários `fix:` de rota e autenticação em maio vieram de ambiente local, contrato com o back, ou guard de sessão (#319 / #321)? O intervalo de 13 dias até o primeiro review travou em fila ou em WIP na branch?
3. **Coding agent:** foi usado coding agent em alguma iteração (sem evidência nos commits)? Que apoio teria ajudado — testes da rota `POST /api/topics`, matriz de status HTTP, ou separar o ajuste de `themes/create` em PR próprio?
