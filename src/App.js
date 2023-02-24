import logo from "./logo.svg";
import "./App.css";
import { Contact } from "./models/contact.model";
import ComponentA from "./components/ComponentA";

const contact = new Contact(
  "Wilson",
  "Parker",
  "wilson_parker@email.com",
  true
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ComponentA contact={contact}></ComponentA>
      </header>
    </div>
  );
}

export default App;
