import '@testing-library/jest-dom';

jest.mock('react-markdown', () => {
    return {
      __esModule: true,
      default: () => <div>Mocked React Markdown</div>,
    };
  });
  jest.mock('remark-gfm', () => {
    return {
      __esModule: true,
      default: () => <div>Mocked React GFM</div>,
    };
  });
jest.mock('rehype-raw', () => {
    return {
      __esModule: true,
      default: () => <div>Mocked Rehype Raw</div>,
    };
  });
  jest.mock('react-syntax-highlighter', () => ({
   __esModule: true,  
  Light: ({ children }) => <pre>{children}</pre>,
  Prism: ({ children }) => <pre>{children}</pre>,
  default: ({ children }) => <pre>{children}</pre>,
}));

jest.mock('react-syntax-highlighter/dist/esm/styles/prism', () => ({}));