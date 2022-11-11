import { ThemeProvider } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';
import Workspace from './Components/Workspace';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="App">
        <Header />
        <Workspace workspaceName="First Workspace" />
      </div>
    </ThemeProvider>
  );
}
export default App;
