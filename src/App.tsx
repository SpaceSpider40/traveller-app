import {Route, Routes} from "react-router-dom";

import routes from './routes.json';
import Login from "./pages/login/Login.tsx";
import React from "react";
import Home from "./pages/home/Home.tsx";

interface IProps{

}

interface IState{

}

export default class App extends React.Component<IProps, IState>{
    render(){
        return (
            <Routes>
                <Route index path={routes.login} element={<Login />}/>
                <Route path={routes.home} element={<Home />}/>
            </Routes>
        )
    }
}