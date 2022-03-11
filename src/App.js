import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from "./pages/Home";
import QRgen from "./pages/QRgenerator";
import QRscan from "./pages/QRscanner";
import Badri from "./pages/Badri";
import Gangotri from "./pages/Gangotri";
import Yamnotri from "./pages/Yamnotri";
import Kedar from "./pages/Kedar";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/qr_generator">
                <QRgen />
              </Route>
              <Route path="/Badri">
                <Badri />
              </Route>
              <Route path="/Kedar">
                <Kedar />
              </Route>
              <Route path="/Yamnotri">
                <Yamnotri />
              </Route>
              <Route path="/Gangotri">
                <Gangotri />
              </Route>
              {/* <Route path="/qr_scanner">
                <QRscan/>
              </Route> */}
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
