import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css'
import 'mdbootstrap/css/mdb.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter } from 'react-router-dom';






let root2e=document.getElementById('root2');
let rooo2=ReactDom.createRoot(root2e)
rooo2.render(<App/>)