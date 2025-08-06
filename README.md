# Projeto: E-acelera
Este projeto é parte integrante do desenvolvimento do projeto e-acelera, uma plataforma edutech projetada para ajudar as alunas da Aceleradora Ágil no nivelamento de conhecimentos e no autoestudo.
Neste repositório você aprenderá estilizar componentes do Material UI, para a construção de uma tela Home em colaboração com o React.js em um ambiente Next.js.

## Arquitetura MVC

- **Model**: Responsável por gerenciar os dados, a lógica de negócios e as regras da aplicação.
- **View**: Responsável pela apresentação dos dados e interação com o usuário.
- **Controller**: Atua como um intermediário entre o Model e a View, recebendo as entradas do usuário via View, processando os dados através do Model e retornando a resposta adequada para a View.

## Estrutura de Diretórios

```lua
e-acelera-front/
.next/
node_modules/
├── public/
│ ├── assets/
│ │ ├── js.png
│ │ ├── next.png
│ │ └── react.png
│ └── /...
├── src/
│ ├── app / # Contém as páginas do Next.js
│ │ └── globals.css / # Contém arquivos de estilo
│ │ └─ layout.tsx / # Estilos de fontes...
│ │ └─page.tsx / # Pagina.
│ ├── componentes / # Contém os componentes reutilizáveis (Views)
│ │ └── config
│ │ └─Theme.tsx/ # Contém arquivos de estilo(Reutilizável)
│ └── /...
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

# Instalação e Configuração
## Siga os passos abaixo para configurar e executar o projeto localmente.
Pré-requisitos
**Node.js (>= 20.x.x)**
npm
## Passo a Passo
Fork o repositório:
Clone o repositório:
Copiar código
git clone <url do repositorio>


## Instale as dependências:
npm install
npm run dev

## Acesse no navegador:
Abra seu navegador e acesse http://localhost:3000 para visualizar a aplicação em execução.
Descrição do Projeto
Este projeto implementa uma tela home básica utilizando Material-UI para estilização dos componentes React dentro de um ambiente Next.js.

## Tecnologias Utilizadas
>Next.js
>React
>Material-UI
>TypeScript
>Tailwind CSS

# FRONTEND (Netlify)
### Etapas: feature → staging → production

1. Atualizar a branch main local
```bash
git checkout main
git pull origin main
```
 2. Atualizar a branch staging com as últimas mudanças da main
 ```bash
git checkout staging
git pull origin staging
git merge main
git push origin staging
```
### Obs: 
Deploy no Netlify (Staging): Assim que a branch staging for atualizada no GitHub, o Netlify automaticamente dispara o build e faz o deploy. Você pode acompanhar:

- Acesse o site: https://staging--e-acelera-homologacao.netlify.app/
- Verifique se a funcionalidade nova está disponível.
- Caso tenha erros, acesse https://app.netlify.com/ > Site do projeto > Aba "Deploys" e veja logs do build.

 3. Criar PR da sua feature para staging (no GitHub)

- Vá até o repositório no GitHub.
- Clique em Compare & pull request (ou vá em Pull Requests > New PR).
- Base: staging | Compare: feature/nome-da-sua-branch
- Descreva o que foi feito e crie o PR.
- Aguarde a aprovação do time.
- Após aprovação, clique em "Merge pull request" e depois em "Confirm merge".

 4. Testar no ambiente de homologação (staging)
- Acesse: https://staging--e-acelera-homologacao.netlify.app/
- Teste sua funcionalidade no navegador.
- Valide se ela está funcionando como esperado.
- Verifique se não quebrou outras funcionalidades.
- Veja se o layout está correto e sem bugs visuais.

### Obs:
Se houver erro, corrija na mesma branch e repita os passos de commit/push/PR.

5. Enviar para produção (staging → production)
```bash
git checkout production
git pull origin production
git merge staging
git push origin production
```
### OU (alternativamente pelo GitHub):

- Vá em Pull Requests > New Pull Request
- Base: production | Compare: staging
- Clique em Create pull request, escreva uma mensagem como:
Envio de staging para production. Funcionalidade testada e validada.
- Clique em Merge pull request e depois em Confirm merge.

### Obs:
Deploy no Netlify (Production): Após o merge na branch production, o Netlify inicia automaticamente o build do ambiente final. Para acompanhar:

- Acesse https://app.netlify.com/ > Projeto > Aba Deploys
- Verifique se o deploy foi bem-sucedido
- Acesse: https://aceleradora-agil.com.br/ para validar visualmente

6. Testar em produção
Acesse o site: https://aceleradora-agil.com.br/
- Valide se a funcionalidade está disponível.
- Verifique se está tudo funcionando normalmente.
- Se estiver ok, o card pode ser movido para PRONTO.

## Contribuição
**Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.**
