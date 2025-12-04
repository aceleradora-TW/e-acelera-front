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
    GITHUB: { src: "/assets/github-icon2.svg", name: 'GitHub', alt: "Ícone da plataforma de hospedagem de código GitHub" },
};

export const TESTIMONIALS = [
    {
      text: "A Aceleradora foi fundamental na minha colocação profissional como programador. Eu vinha cursando matemática na época, mas o meu interesse maior era na parte computacional e a Aceleradora foi a porta de entrada para o mundo profissional dessa área. Os aprendizados foram muito grandes, como desenvolvedor e como pessoa.",
      img: "/assets/avatar1.svg",
      name: "Pedro Henrique Salton",
      class: "Turma 09",
    },
    {
      text: "A Aceleradora é um programa que exercita e desenvolve todas as áreas necessárias dentro de uma equipe ágil. Um lugar para evoluir tecnicamente e como pessoa, aprendendo a entregar software com qualidade, com alto foco em colaboração.",
      img: "/assets/avatar1.svg",
      name: "Lucas da Silva Veloso",
      class: "Turma 7",
    },
    {
      text: "A aceleradora teve um grande impacto na minha carreira profissional, através dela tive a oportunidade para ingressar na área de TI, e mesmo depois da aceleradora (como um ex-aluno) ela continua me ajudando em minha carreira profissional, através de todo o conhecimento adquirido participando do projeto.",
      img: "/assets/avatar1.svg",
      name: "Renan Schmitt",
      class: "Turma 12",
    },
    {
      text: "A Aceleradora foi muito importante na minha carreira. Foi minha primeira experiência com desenvolvimento ágil de software e os workshops, discussões, desafios e aprendizado ajudaram a moldar e definir os rumos da minha carreira. Sou extremamente grato pela oportunidade.",
      img: "/assets/avatar1.svg",
      name: "Lucas Falk Beier",
      class: "Turma 3",
    },

    {
      text: "Melhor experiência de aprendizado para ingressar na área.",
      img: "/assets/avatar1.svg",
      name: "Luiz Felipe Trindade",
      class: "Turma 11",
    },

    {
      text: "A Aceleradora é um projeto de desenvolvimento incrível, os alunos evoluem em alguns meses, o que demorariam anos em outros lugares.",
      img: "/assets/avatar1.svg",
      name: "Andrei Rupertti",
      class: "Turma 12",
    },

    {
      text: "A aceleradora é um ambiente de aprendizagem muito importante para que alunos se sintam mais preparados para o mercado de trabalho. É o lugar fundamental para dar início à carreira e ter certeza do que deseja seguir na vida profissional.",
      img: "/assets/avatar1.svg",
      name: "Maria Eduarda de Abreu Bortoletti",
      class: "Turma 14",
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
