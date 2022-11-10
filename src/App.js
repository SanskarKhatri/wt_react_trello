import { ThemeProvider } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';
import Workspace from './Components/Workspace';

function App() {
  const data = {
    name: "First Workspace",
    lists: [
      {
        name: "First List",
        cards: [
          {
            content: "hdkjashkjdahjha"
          }, 
          {
            content: "bfduuwebbnnuweiniu"
          },
          {
            content: "nhidjihwihwihfihwfih"
          }
        ]
      }, {
        name: "Second List",
        cards: [
          {
            content: "hdkjashkjdahjha"
          }, 
          {
            content: "bfduuwebbnnuweiniu"
          },
          {
            content: "nhidjihwihwihfihwfih"
          }
        ]
      }
    ]
  }
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="App">
        <Header />
        <Workspace workspaceName={data.name} listsArr={data.lists} />
      </div>
    </ThemeProvider>
  );
}
export default App;
