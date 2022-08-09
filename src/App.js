import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import "./style/landingpage.css";
import SuperHero from "./components/SuperHero";
function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="myBG border">
        <NavigationBar />
        <Intro />
      </div>
      {/* End */}
      {/*Trending Section */}
      <div className="trending">
        <Trending />
      </div>
      {/* End */}
      {/*Superhero Section */}
      <div className="superhero">
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
