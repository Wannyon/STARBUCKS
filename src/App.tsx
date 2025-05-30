import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.ts';
import AppRoutes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
