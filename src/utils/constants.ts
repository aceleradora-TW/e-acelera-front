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
