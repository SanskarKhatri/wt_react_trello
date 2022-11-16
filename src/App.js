import { useContext, useState } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import { Navigate, Route, Routes, useNavigate } from 'react-router';
import Header from './Components/Header';
import Workspace from './Components/Workspace';
import userContext from './userContext';

function App() {
  const {user,setUser} = useContext(userContext);
  function AppDiv() {
      console.log(user);
      return (
      <div className="App">
          <Header />
          <Workspace workspaceName="First Workspace" />
          {/* <Routes>
            <Route path="/" element={<Workspace workspaceName="First Workspace" />} />
            <Route path="/home" element={<Workspace workspaceName="First Workspace" />} />
            <Route path="/workspaces" element={<Workspace workspaceName="First Workspace" />} />
            <Route path="/settings" element={<Workspace workspaceName="First Workspace" />} />
          </Routes> */}
      </div>
      )
  }
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      {user?AppDiv():<Navigate to="/auth"/>}
    </ThemeProvider>
  );
}

export default App;
