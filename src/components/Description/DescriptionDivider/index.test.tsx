import {DescriptionDivider} from "@/components/Description/DescriptionDivider"
import {render, screen} from "@testing-library/react"



describe("Testes nos componentes DescriptionDivider", () => {
    it ("Verificando se o texto é quebrado em duas partes", () => {
        const text = "Neste texto teremos duas partes essa que estou escrevendo é a primeira. Agora vou escrever aqui a segunda parte do texto."
        render(<DescriptionDivider text={text}/> )
       screen.findAllByAltText("Neste texto teremos duas partes essa que estou escrevendo é a primeira.")
       screen.findAllByAltText("Agora vou escrever aqui a segunda parte do texto.")

        
    })

    it ("Verificando se o texto é quebrado em duas partes", () => {
        const text = "Neste texto teremos duas partes essa que estou escrevendo é a primeira. Agora vou escrever aqui a segunda parte do texto."
        render(<DescriptionDivider text={text}/> )
       screen.findAllByAltText("Neste texto teremos duas partes essa que estou escrevendo é a primeira.")
       screen.findAllByAltText("Agora vou escrever aqui a segunda parte do texto.")

        
    })
}) 