import { React } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Routes from "./utils/Routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
