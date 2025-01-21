import { DescriptionDivider } from "@/components/Description/DescriptionDivider"
import { render, screen } from "@testing-library/react"
import { DescriptionFull } from "../DescriptionFull"

jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  useMediaQuery: jest.fn(),
}))

describe("Teste nos componente DescriptionDivider", () => {
  it("O texto deve ser quebrado em duas partes de acordo com a preferencia", () => {
    const text =
      "Neste texto teremos duas partes essa que estou escrevendo é a primeira. Agora vou escrever aqui a segunda parte do texto."
    render(<DescriptionDivider text={text} />)
    screen.findAllByText(
      "Neste texto teremos duas partes essa que estou escrevendo é a primeira."
    )
    screen.findAllByText("Agora vou escrever aqui a segunda parte do texto.")
  }),

  it("Verificando o comportamento com o texto com muitos caracteres preferidos próximos", () => {
      const text =
        "Este é o início do primeiro parágrafo... Ele contém várias pausas curtas, como vírgulas, pontos e até quebras de linha. Além disso, este parágrafo tem bastante conteúdo, para testar bem o comportamento do algoritmo. Agora, começamos o segundo parágrafo... Será que, o texto será dividido corretamente? Aqui temos mais uma sequência de caracteres preferidos: pontos, vírgulas, e até alguns espaços extras. É importante verificar se tudo está funcionando como esperado!"
      render(<DescriptionDivider text={text} />)
      screen.findAllByText(
        "Este é o início do primeiro parágrafo... Ele contém várias pausas curtas, como vírgulas, pontos e até quebras de linha. Além disso, este parágrafo tem bastante conteúdo, para testar bem o comportamento do algoritmo. Agora, começamos o segundo parágrafo..."
      )
      screen.findAllByText(
        "Será que, o texto será dividido corretamente? Aqui temos mais uma sequência de caracteres preferidos: pontos, vírgulas, e até alguns espaços extras. É importante verificar se tudo está funcionando como esperado!."
      )
  })

  it("A maior parte do texto deve no primeiro bloco", () => {
    const text = `Este é o primeiro parágrafo... Ele apresenta algumas pausas curtas, como vírgulas e pontos, para verificar se o algoritmo consegue lidar bem com a divisão. Além disso, possui várias frases que permitem uma boa análise do comportamento do código. 
      
    Agora começamos o segundo parágrafo! Este contém mais algumas estruturas típicas, como perguntas e pausas adicionais. Será que, o algoritmo consegue identificar corretamente o melhor ponto de divisão? Vamos descobrir... Aqui temos muitos, caracteres preferidos próximos. 
      
    Por fim, chegamos ao terceiro parágrafo. Ele é mais simples, mas ainda tem algumas quebras... como pontos, vírgulas e espaços. A ideia aqui é garantir que, mesmo com três parágrafos, o texto seja dividido corretamente em apenas duas partes, priorizando a maior parte na primeira variável.`

    render(<DescriptionDivider text={text} />)

    screen.findAllByText(`Este é o primeiro parágrafo... Ele apresenta algumas pausas curtas, como vírgulas e pontos, para verificar se o algoritmo consegue lidar bem com a divisão. Além disso, possui várias frases que permitem uma boa análise do comportamento do código. 
      
    Agora começamos o segundo parágrafo! Este contém mais algumas estruturas típicas, como perguntas e pausas adicionais. Será que, o algoritmo consegue identificar corretamente o melhor ponto de divisão? Vamos descobrir... Aqui temos muitos, caracteres preferidos próximos. `)

    screen.findAllByText(
      "Por fim, chegamos ao terceiro parágrafo. Ele é mais simples, mas ainda tem algumas quebras... como pontos, vírgulas e espaços. A ideia aqui é garantir que, mesmo com três parágrafos, o texto seja dividido corretamente em apenas duas partes, priorizando a maior parte na primeira variável."
    )
  })

  it("Em telas menores o DescriptionFull deve ser aplicado", () => {
    const text = `Este é o primeiro parágrafo. Ele contém algumas informações iniciais e tenta verificar se o algoritmo consegue dividir o texto de forma eficiente.
    
    No segundo parágrafo, a ideia é testar como o código lida com uma sequência de palavras e pausas adicionais, garantindo que a maior parte do texto seja alocada na primeira variável.`

    require("@mui/material").useMediaQuery.mockReturnValue(true);
    render(<DescriptionFull text={text} />)

    screen.findAllByText(`Este é o primeiro parágrafo. Ele contém algumas informações iniciais e tenta verificar se o algoritmo consegue dividir o texto de forma eficiente.
    
    No segundo parágrafo, a ideia é testar como o código lida com uma sequência de palavras e pausas adicionais, garantindo que a maior parte do texto seja alocada na primeira variável.`)
  })
})
