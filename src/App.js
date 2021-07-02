import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/mainpage/Main";
import VideoPage from "./components/videopage/VideoPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/video">
          <VideoPage />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
