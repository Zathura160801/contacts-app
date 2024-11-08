import { BrowserRouter } from "react-router-dom";
import ContactApp from "./components/ContactApp";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <ContactApp />
    </BrowserRouter>
  );
}

export default App;
