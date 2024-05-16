import "./fma-general.css";
import "./fma-responsive.css";
import "./homeStyle.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";


function App() {
  return (
    <div className="App">
      <Nav activePage ="active"/>

      <Hero title="The effective solutions for your business"/>

      <Stats />

    </div>
  );
}

export default App;
