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
    question:
      "Quem pode participar do Programa Aceleradora Ágil? E como funciona?",
    answer:
      "O programa é voltado para pessoas que querem entrar no mercado de tecnologia e já têm uma base inicial em programação. As turmas são semestrais, com 11 participantes por ciclo, e o formato é remoto, com estágio remunerado e certificado ao final. Para participar, você precisa:",
  },
  {
    question: "O que é a Aceleradora Inclusiva?",
    answer:
      "A Aceleradora Inclusiva é uma iniciativa parceira que compartilha do mesmo propósito: formar pessoas diversas de forma inclusiva para atuarem na área de tecnologia. Ela também oferece formação prática, mentoria e apoio para quem quer transformar sua trajetória.",
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