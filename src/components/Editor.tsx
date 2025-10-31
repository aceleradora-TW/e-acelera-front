"use client";

import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useEffect, useRef, useState } from "react";
import { oneDark } from "@codemirror/theme-one-dark";

import {
  Box,
  Button,
  CardHeader,
  Grid,
  Input,
  Typography,
} from "@mui/material";

export default function Editor() {
  const editorRef = useRef<HTMLDivElement>(null);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("");
  const [inputValue, setInputValue] = useState("");

  const exercise = {
    title: "soma",
    description: `Maria quer somar quantas laranjas ela e João compraram`,
    input: "3,2",
    expectedOutput: "5\n",
    tests: [
      { input: "3,2", expectedOutput: "5\n" },
      { input: "10,5", expectedOutput: "15\n" },
      { input: "7,8", expectedOutput: "15\n" },
    ],
    initialCode: `function evenOrOdd(jogada1, jogada2) {
     return //sua resposta ;\n}`,
  };

  useEffect(() => {
    if (!editorRef.current) return;
    const view = new EditorView({
      doc: exercise.initialCode,
      extensions: [
        basicSetup,
        javascript(),
        oneDark,
        EditorView.updateListener.of((update) => {
          const value = update.state.doc.toString();
          setCode(value);
        }),
      ],
      parent: editorRef.current,
    });

    return () => view.destroy();
  }, [exercise.initialCode]);

  const handleRunCode = async () => {
    try {
      const cleanCode = code.replace("export ", "");

      let allPassed = true;
      const testResults = [];

      for (const test of exercise.tests) {
        const finalCode = `
        ${cleanCode}
        console.log(evenOrOdd(${test.input}));
      `;

        const response = await fetch(
          "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
              "x-rapidapi-key":
                "18cb6a49b5mshdd029114f6adb98p140cfejsnc32f1d3c40de",
            },
            body: JSON.stringify({
              language_id: 63, // Node.js
              source_code: finalCode,
            }),
          }
        );

        console.log(response);
        

        const result = await response.json();

        const saida =
          result.stdout?.trim() ||
          result.stderr?.trim() ||
          result.compile_output?.trim() ||
          "Sem saída";

        const esperado = test.expectedOutput.trim();

        const passou = saida === esperado;

        testResults.push({
          input: test.input,
          saida,
          esperado,
          passou,
        });

        if (!passou) allPassed = false;
      }

      // Atualiza visualmente o resultado final
      setOutput(
        testResults
          .map(
            (t, i) =>
              `Teste ${i + 1}:\nEntrada: ${t.input}\nEsperado: ${
                t.esperado
              }\nObtido: ${t.saida}\nResultado: ${
                t.passou ? "✅ Passou" : "❌ Falhou"
              }\n`
          )
          .join("\n")
      );

      setStatus(
        allPassed
          ? "🎉 Todos os testes passaram!"
          : "❌ Alguns testes falharam."
      );
    } catch (err) {
      console.error("Erro ao executar código:", err);
      setOutput("Erro ao executar código. Verifique a conexão com Judge0.");
    }
  };

  return (
    <Grid container spacing={2} padding={4}>
      {/* <Grid item xs={12}>
        <Typography variant="h2">Exercicio {exercise.title} </Typography>
        <Typography>{exercise.description}</Typography>
        <CardHeader title="Editor de Código" />
      </Grid> */}
      <Grid item xs={12} md={7}>
        <Typography variant="body2">Código:</Typography>
        <div
          ref={editorRef}
          style={{
            border: "1px solid #ccc",
            borderRadius: "6px",
            minHeight: "200px",
            background: "#282c34",
          }}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <Grid item xs={12}>
          <Typography variant="body2">Output:</Typography>
          <Box
            sx={{
              background: "#282c34",
              borderRadius: "4px",
              display: "flex",
              alignContent: "flex-start",
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
              overflowY: "auto",
              paddingTop: 1,
              paddingX: 2,
              color: "white",
            }}
          >
            {output || "A saída aparece aqui ..."}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">Output esperado:</Typography>
          <Box
            sx={{
              background: "#282c34",
              borderRadius: "4px",
              display: "flex",
              alignContent: "flex-start",
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
              overflowY: "auto",
              paddingTop: 1,
              paddingX: 2,
              color: "white",
            }}
          >
            {exercise.expectedOutput}
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} paddingLeft={2}>
        <Grid item xs={12} md={3}>
          <Typography>Input</Typography>
          <Input
            sx={{
              background: "#282c34",
              width: "350px",
              height: "50px",
              borderRadius: "4px",
              display: "flex",
              color: "white",
              paddingLeft: 1,
            }}
            placeholder={exercise.input}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button onClick={handleRunCode}>Submeter resposta</Button>
          {status}
        </Grid>
      </Grid>
    </Grid>
  );
}
