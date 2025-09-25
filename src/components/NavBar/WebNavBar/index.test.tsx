import '@testing-library/jest-dom'
import '@/test/setup/theme-mock'
import { cleanup, render, screen } from '@testing-library/react'
import { WebMenu } from '@/components/NavBar/WebNavBar'
import { useSession } from 'next-auth/react'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} alt={props.alt} />
}))

jest.mock('next-auth/react', () => ({
  useSession: jest.fn()
}))

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
  useRouter: jest.fn(() => ({ push: jest.fn() }))
}))

describe('Testes do botão de Login do componente WebMenu', () => {
  const mockRouter = { push: jest.fn() };
  
  beforeAll(() => {
    jest.clearAllMocks();
    (useSession as jest.Mock).mockReset();
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
    (useSession as jest.Mock).mockReset();
    mockRouter.push.mockReset();
  });

  afterAll(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });

  it('Deve mostrar o botão de login quando não houver sessão', async () => {
    (useSession as jest.Mock).mockReturnValue({ data: null });

    render(<WebMenu list={['Nivelamento', 'Autoestudo']} session={null} />);
    
    const loginButton = await screen.findByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  it('Não deve mostrar o botão de login quando houver sessão', async () => {
    const sessionData = {
      user: { image: 'url-da-imagem', name: 'Usuário Teste' },
      expires: '2025-01-01T00:00:00Z'
    };

    (useSession as jest.Mock).mockReturnValue({ data: sessionData });

    render(<WebMenu list={['Nivelamento', 'Autoestudo']} session={sessionData} />);
    
    await expect(async () => {
      await screen.findByRole('button', { name: /login/i }, { timeout: 1000 })
    }).rejects.toThrow();
  });
});
