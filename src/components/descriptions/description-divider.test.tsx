import '@testing-library/jest-dom'
import '@/test/setup/theme-mock'
import { DescriptionDivider } from "@/components/descriptions/description-divider"
import { cleanup, render } from "@testing-library/react"

const useMediaQueryMock = jest.fn();
jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  useMediaQuery: () => useMediaQueryMock(),
}));

jest.mock("@/components/UI/markdown-renderer", () => ({
  MarkdownRenderer: ({ children }: { children: string }) => (
    <div data-testid="markdown-content">{children}</div>
  ),
}))

describe("Teste no componente DescriptionDivider", () => {
  beforeAll(() => {
    jest.clearAllMocks();
    useMediaQueryMock.mockReset();
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
    useMediaQueryMock.mockReset();
  });

  afterAll(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });

  it("O texto deve ser quebrado em duas partes de acordo com a preferencia", async () => {
    const text =
      "Neste texto teremos duas partes essa que estou escrevendo é a primeira. Agora vou escrever aqui a segunda parte do texto."
    const { getAllByTestId } = render(<DescriptionDivider text={text} />)
    
    const markdownElements = getAllByTestId('markdown-content')
    expect(markdownElements).toHaveLength(2)
    expect(markdownElements[0]).toHaveTextContent(
      "Neste texto teremos duas partes essa que estou escrevendo é a primeira."
    )
    expect(markdownElements[1]).toHaveTextContent(
      "Agora vou escrever aqui a segunda parte do texto."
    )
  })

  it("Verificando o comportamento com o texto com muitos caracteres preferidos próximos", async () => {
    const text =
      "Este é o início do primeiro parágrafo... Ele contém várias pausas curtas, como vírgulas, pontos e até quebras de linha. Além disso, este parágrafo tem bastante conteúdo, para testar bem o comportamento do algoritmo. Agora, começamos o segundo parágrafo... Será que, o texto será dividido corretamente? Aqui temos mais uma sequência de caracteres preferidos: pontos, vírgulas, e até alguns espaços extras. É importante verificar se tudo está funcionando como esperado!"
    const { getAllByTestId } = render(<DescriptionDivider text={text} />)
    
    const markdownElements = getAllByTestId('markdown-content')
    expect(markdownElements).toHaveLength(2)
    expect(markdownElements[0]).toHaveTextContent(
      "Este é o início do primeiro parágrafo... Ele contém várias pausas curtas, como vírgulas, pontos e até quebras de linha. Além disso, este parágrafo tem bastante conteúdo, para testar bem o comportamento do algoritmo. Agora, começamos o segundo parágrafo..."
    )
    expect(markdownElements[1]).toHaveTextContent(
      "Será que, o texto será dividido corretamente? Aqui temos mais uma sequência de caracteres preferidos: pontos, vírgulas, e até alguns espaços extras. É importante verificar se tudo está funcionando como esperado!"
    )
  })

  it("A maior parte do texto deve ficar no primeiro bloco", async () => {
    const text = `Este é o primeiro parágrafo... Ele apresenta algumas pausas curtas, como vírgulas e pontos, para verificar se o algoritmo consegue lidar bem com a divisão. Além disso, possui várias frases que permitem uma boa análise do comportamento do código. 
      
    Agora começamos o segundo parágrafo! Este contém mais algumas estruturas típicas, como perguntas e pausas adicionais. Será que, o algoritmo consegue identificar corretamente o melhor ponto de divisão? Vamos descobrir... Aqui temos muitos, caracteres preferidos próximos. 
      
    Por fim, chegamos ao terceiro parágrafo. Ele é mais simples, mas ainda tem algumas quebras... como pontos, vírgulas e espaços. A ideia aqui é garantir que, mesmo com três parágrafos, o texto seja dividido corretamente em apenas duas partes, priorizando a maior parte na primeira variável.`

    const { getAllByTestId } = render(<DescriptionDivider text={text} />)

    const markdownElements = getAllByTestId('markdown-content')
    expect(markdownElements).toHaveLength(2)

    const normalizeText = (text: string) => text.replace(/\s+/g, ' ').trim()

    const firstPart = normalizeText(`Este é o primeiro parágrafo... Ele apresenta algumas pausas curtas, como vírgulas e pontos, para verificar se o algoritmo consegue lidar bem com a divisão. Além disso, possui várias frases que permitem uma boa análise do comportamento do código. Agora começamos o segundo parágrafo! Este contém mais algumas estruturas típicas, como perguntas e pausas adicionais. Será que, o algoritmo consegue identificar corretamente o melhor ponto de divisão? Vamos descobrir... Aqui temos muitos, caracteres preferidos próximos.`)
    
    const secondPart = normalizeText("Por fim, chegamos ao terceiro parágrafo. Ele é mais simples, mas ainda tem algumas quebras... como pontos, vírgulas e espaços. A ideia aqui é garantir que, mesmo com três parágrafos, o texto seja dividido corretamente em apenas duas partes, priorizando a maior parte na primeira variável.")

    expect(normalizeText(markdownElements[0].textContent || '')).toBe(firstPart)
    expect(normalizeText(markdownElements[1].textContent || '')).toBe(secondPart)
  })

  it("Em telas menores o DescriptionFull deve ser aplicado", async () => {
    const text = `Este é o primeiro parágrafo. Ele contém algumas informações iniciais e tenta verificar se o algoritmo consegue dividir o texto de forma eficiente.
    
    No segundo parágrafo, a ideia é testar como o código lida com uma sequência de palavras e pausas adicionais, garantindo que a maior parte do texto seja alocada na primeira variável.`

    useMediaQueryMock.mockReturnValue(true);

    const { getByTestId } = render(<DescriptionDivider text={text} />)

    const markdownElement = getByTestId('markdown-content')
    const normalizeText = (text: string) => text.replace(/\s+/g, ' ').trim()
    
    expect(normalizeText(markdownElement.textContent || '')).toBe(normalizeText(text))

    useMediaQueryMock.mockReset();
  })
})
