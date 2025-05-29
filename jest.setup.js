import '@testing-library/jest-dom';

jest.mock('react-markdown', () => {
    return {
      __esModule: true,
      default: () => <div>Mocked React Markdown</div>,
    };
  });
  