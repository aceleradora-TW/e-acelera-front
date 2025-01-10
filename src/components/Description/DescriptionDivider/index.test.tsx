import {DescriptionDivider} from "@/components/Description/DescriptionDivider"
import {render, screen} from "@testing-library/react"



describe("Testes nos componentes DescriptionDivider", () => {
    it ("Verificando testes do textDivider"), () => {
        const text = "Neste texto teremos duas partes essa que estou escrevendo é a primeira. Agora vou escrever aqui a segunda parte do texto."
        render(<DescriptionDivider text={text}/> )
        // const firstPart = screen.getByText("Neste texto teremos duas partes essa que estou escrevendo é a primeira.")
        // const secondPart = screen.getByText("Agora vou escrever aqui a segunda parte do texto.")
        // expect(firstPart).toBeInTheDocument()
        // expect(secondPart).toBeInTheDocument()
        
    }
}) 