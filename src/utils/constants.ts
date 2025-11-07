export interface IconData {
    src: string;
    name: string;
    alt: string;
}

export const BACKEND_BASE_URL= process.env.BACKEND_BASE_URL
export const STACKBY_SECRET_KEY= process.env.STACKBY_SECRET_KEY
export const STACKBY_BASE_URL= process.env.STACKBY_BASE_URL
export const ARRAY_SPECIAL_CHARS = [
  { char: "= &gt;", replace: "=>" },
  { char: "&amp;", replace: "&" },
  { char: "&lt;", replace: "<" },
  { char: "&gt;", replace: ">" },
  { char: "%40;", replace: "@" },
];

export const technologyIcons: Record<string, IconData> = {
    HTML: {src: "/assets/html-icon.svg", name: 'HTML', alt: "Ícone da linguagem de marcação HTML"},
    CSS: {src: "/assets/css-icon.svg", name: 'CSS', alt: "Ícone da linguagem de estilos CSS"},
    TS: { src: "/assets/ts-icon.svg", name: 'TypeScript', alt: "Ícone da linguagem TypeScript" },
    REACT: {src: "/assets/react-icon.svg", name: 'React', alt: "Ícone da biblioteca JavaScript React"},
    NODE: {src: "/assets/node-icon.svg", name: 'Node JS', alt: "Ícone do ambiente de execução Node JS"},
    EXPRESS: { src: "/assets/express-icon.svg", name: 'Express', alt: "Ícone do framework web Express" },
    POSTGRESQL: { src: "/assets/postgres-icon.svg", name: 'PostgreSQL', alt: "Ícone do banco de dados PostgreSQL" },
    NEXTJS: { src: "/assets/next-icon.svg", name: 'Next JS', alt: "Ícone do framework web Next JS" },
    JEST: { src: "/assets/jest-icon.svg", name: 'Jest', alt: "Ícone do framework de testes Jest" },
    GIT: { src: "/assets/git-icon.svg", name: 'Git', alt: "Ícone do sistema de controle de versão Git" },
    GITHUB: { src: "/assets/github-icon.svg", name: 'GitHub', alt: "Ícone da plataforma de hospedagem de código GitHub" },
};