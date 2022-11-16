import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login";
import Register from "./Components/Register";
import userContext from "./userContext";

function Worker(){
    const [user, setUser] = useState("");
    // async function check() {
    //     const response = await fetch(`http://localhost:5000/check`);
    //     if (!response.ok) {
    //         const message = `An error occurred: ${response.statusText}`;
    //         window.alert(message);
    //         return;
    //     }
    //     const userObj = await response.json();
    //     console.log(userObj.user);
    //     setUser(userObj.user);
    //     }
    // useEffect(() => {
    //     check();
    //     return;
    // }, [user]);
    const value = useMemo(()=>({user,setUser}),[user,setUser]);
    return (
    <userContext.Provider value={value}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<App />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/auth" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </userContext.Provider>
    )
}

export default Worker;