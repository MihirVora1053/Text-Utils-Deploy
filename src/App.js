import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/alert";
import About from "./components/about";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      showAlert("Dark mode is enabled successfully.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFF";
      showAlert("Light mode is enabled successfully.", "success");
    }
  };
  return (
    <Router>
      <Switch>
        <div>
          <Navbar
            title="Text Utils"
            aboutText="About Text Utils"
            mode={mode}
            toggleMode={toggleMode}
          />
          <Alert alert={alert} />
          <Route exact path="/">
            <TextForm mode={mode} showAlert={showAlert} />
          </Route>
          <Route exact path="/about">
            <About mode={mode} toggleMode={toggleMode} />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
