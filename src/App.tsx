import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import "./global.css";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}