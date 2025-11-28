export const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL || "http://localhost:5002";
export interface IconData {
    src: string;
    name: string;
    alt: string;
}

export const STACKBY_SECRET_KEY= process.env.STACKBY_SECRET_KEY
export const STACKBY_BASE_URL= process.env.STACKBY_BASE_URL
export const ARRAY_SPECIAL_CHARS = [
  { char: "= &gt;", replace: "=>" },
  { char: "&amp;", replace: "&" },
  { char: "&lt;", replace: "<" },
  { char: "&gt;", replace: ">" },
  { char: "%40;", replace: "@" },
];
export const FLAGSMITH_ENVIRONMENT_ID = process.env.NEXT_PUBLIC_FLAGSMITH_ENVIRONMENT_ID

export enum ThemeCategory {
  LEVELING = "Leveling",
  SELF_STUDY = "SelfStudy"
}

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
    GITHUB: { src: "/assets/github-icon2.svg", name: 'GitHub', alt: "Ícone da plataforma de hospedagem de código GitHub" },
};

export const TESTIMONIALS = [
    {
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      img: "/assets/avatar1.svg",
      name: "Carlos Schallenberger",
      class: "Turma 25",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printings",
      img: "/assets/avatar1.svg",
      name: "Carlos Schallenberger",
      class: "Turma 25",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      img: "/assets/avatar1.svg",
      name: "Carlos Schallenberger",
      class: "Turma 25",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      img: "/assets/avatar1.svg",
      name: "Carlos Schallenberger",
      class: "Turma 25",
    },
  ];


export const FAQ_QUESTIONS = [
  {
    question: "Qual a diferença entre a Aceleradora Ágil e o E-Acelera?",
    answer:
      "O E-acelera é a plataforma de estudos onde fica a trilha de nivelamento e a trilha de autoestudo, disponível gratuitamente para todas as pessoas. A Aceleradora Ágil é o projeto de estágio intensivo de 18 semanas, com formação prática, mentoria e desenvolvimento de produtos reais, voltado para quem quer entrar no mercado de tecnologia.",
  },
  {
    question: "Quem pode participar do Programa Aceleradora Ágil? E como funciona?",
    answer:
      "O programa é voltado para pessoas que querem entrar no mercado de tecnologia e já têm uma base inicial em programação. As turmas são semestrais, com 11 participantes por ciclo, e o formato é remoto, com estágio remunerado e certificado ao final.\n\nPara participar, você precisa:\n- Estar matriculado em curso superior ou técnico\n- Ter disponibilidade nos turnos: 09h às 12h e 13h às 16h\n- Ter conhecimento em lógica de programação, HTML e CSS\n- Possuir acesso à internet e computador próprio\n- Residir em qualquer parte do Brasil\n\nO processo seletivo inclui um desafio técnico, seguido de entrevista em grupo e individual.\nAs inscrições acontecem em ciclos. Fique de olho nas [redes sociais da Aceleradora](https://www.linkedin.com/school/aceleradora-%C3%A1gil/) ou aqui no site para saber quando a próxima turma vai estar aberta.",
  },
  {
    question: "Quem pode fazer as trilhas da plataforma e-acelera? E como acessar?",
    answer:
      "Qualquer pessoa interessada em aprender programação pode acessar a plataforma, ela é aberta, gratuita e feita para quem quer estudar no seu ritmo. As trilhas incluem conteúdos introdutórios, exercícios práticos e tecnologias usadas no mercado.\n\nAcesse diretamente a página da [Trilha de Nivelamento](https://aceleradora-agil.com.br/nivelamento) no e-Acelera para começar seus estudos.",
  },
  {
    question: "O que é a Aceleradora Inclusiva?",
    answer:
      "A Aceleradora Inclusiva é uma iniciativa parceira que compartilha do mesmo propósito: formar pessoas diversas de forma inclusiva para atuarem na área de tecnologia. Ela também oferece formação prática, mentoria e apoio para quem quer transformar sua trajetória.\n\nAcesse o site da [Aceleradora Inclusiva](https://aceleradorainclusiva.com.br/) para saber mais sobre o programa.",
  },
  {
    question: "O Programa Aceleradora Ágil garante vaga no mercado?",
    answer:
      "Não garantimos contratação, mas oferecemos formação prática, mentoria e apoio para que cada pessoa esteja preparada para buscar oportunidades reais.",
  },
  {
    question: "Como apoiar o projeto ou ser parceiro?",
    answer:
      "Se você representa uma organização ou quer apoiar essa iniciativa, entre em contato com a gente. Juntos, podemos ampliar o impacto e abrir mais portas para quem precisa.",
  },
];
