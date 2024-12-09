import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { WebMenu } from '@/components/NavBar/WebNavBar' 
import { useSession } from 'next-auth/react'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} alt={props.alt} />;
  }
}));

jest.mock('next-auth/react', () => ({
  useSession: jest.fn()
}))

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
  useRouter: jest.fn(() => ({ push: jest.fn() }))
}))

describe('Testes do botão de Login do componente WebMenu', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Deve mostrar o botão de login quando não houver sessão', () => {
    (useSession as jest.Mock).mockReturnValue({ data: null })

    render(<WebMenu list={['Nivelamento', 'Autoestudo']} />)
    
    const loginButton = screen.queryByText('L')
    expect(loginButton).toBeInTheDocument()
  })

  it('Não deve mostrar o botão de login quando houver sessão', () => {
    (useSession as jest.Mock).mockReturnValue({ 
      data: { 
        user: { 
          image: 'url-da-imagem', 
          name: 'Usuário Teste' 
        } 
      } 
    })

    render(<WebMenu list={['Nivelamento', 'Autoestudo']} />)
    
    const loginButton = screen.queryByText('LOGIN')
    expect(loginButton).not.toBeInTheDocument()
  })
})