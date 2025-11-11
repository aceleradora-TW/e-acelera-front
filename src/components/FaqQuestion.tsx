import {Grid, Link, Typography, useTheme} from "@mui/material";
import AccordionFaq from "./AccordionFaq";

export default function FaqQuestion() {
  const theme = useTheme();

  const faqData = [
    {
      question: "Qual a diferença entre a Aceleradora Ágil e o E-Acelera?",
      answer:
        "O E-acelera é a plataforma de estudos onde fica a trilha de nivelamento e a trilha de autoestudo, disponível gratuitamente para todas as pessoas. A Aceleradora Ágil é o projeto de estágio intensivo de 18 semanas, com formação prática, mentoria e desenvolvimento de produtos reais, voltado para quem quer entrar no mercado de tecnologia.",
    },
    {
      question:
        "Quem pode participar do Programa Aceleradora Ágil? E como funciona?",
      answer:(
        <>
          O programa é voltado para pessoas que querem entrar no mercado de tecnologia e já têm uma base inicial em programação. As turmas são semestrais, com 11 participantes por ciclo, e o formato é remoto, com estágio remunerado e certificado ao final.<br /><br />Para participar, você precisa:<br />- Estar matriculado em curso superior ou técnico<br />- Ter disponibilidade nos turnos: 09h às 12h e 13h às 16h<br />- Ter conhecimento em lógica de programação, HTML e CSS<br />- Possuir acesso à internet e computador próprio<br />- Residir em qualquer parte do Brasil<br /><br />O processo seletivo inclui um desafio técnico, seguido de entrevista em grupo e individual<br />As inscrições acontecem em ciclos. Fique de olho nas redes sociais da Aceleradora ou aqui no site para saber quando a próxima turma estiver aberta.
        </>
      )
    },
    {
      question: "Quem pode fazer as trilhas da plataforma e-acelera? E como acessar?",
      answer: (
        <>
          Qualquer pessoa interessada em aprender programação pode acessar a plataforma, ela é aberta, gratuita e feita para quem quer estudar no seu ritmo. As trilhas incluem conteúdos introdutórios, exercícios práticos e tecnologias usadas no mercado.
          <br />Acesse diretamente a página da{" "}
          <Link
            href="https://aceleradora-agil.com.br/nivelamento"
            target="_blank"
            rel="noopener"
          >
          trilha de nivelamento
          </Link>{" "}
          no e-Acelera para começar seus estudos.
        </>
      ),
    },
    {
      question: "O que é a Aceleradora Inclusiva?",
      answer: (
        <>
          A Aceleradora Inclusiva é uma iniciativa parceira que compartilha do mesmo propósito: formar pessoas diversas de forma inclusiva para atuarem na área de tecnologia. Ela também oferece formação prática, mentoria e apoio para quem quer transformar sua trajetória.
         <br />Acesse o site da{" "}
          <Link
            href="https://aceleradorainclusiva.com.br/"
            target="_blank"
            rel="noopener"
          >
            Aceleradora Inclusiva
          </Link>{" "}
          para saber mais sobre o programa.
        </>
      ),  
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
  
  return (
    <Grid container spacing={{ xs:2, md:4,}}>
      <Grid item xs={12} md={4}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" gutterBottom color={theme.palette.textColor?.main}>
          Tire suas dúvidas - FAQ
        </Typography>
        <Typography variant="body2">
          Começar algo novo pode gerar muitas perguntas, e tudo bem! Aqui estão
          as dúvidas mais comuns da nossa comunidade, respondidas de forma
          simples e direta.
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        {faqData.map((item, i) => (
            <AccordionFaq question={item.question} answer={item.answer} key={i} />
          ))}
      </Grid>
    </Grid>
  );
}
