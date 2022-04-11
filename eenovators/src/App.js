// import Route from "react-router-dom";
import Header from "./components/Header";
import OurClients from "./components/OurClients";
import OurModel from "./components/OurModel";
import Testimaonials from "./components/Testimonials";
import Welcome from "./components/Welcome";
import WhoWeAre from "./components/WhoWeAre";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <WhoWeAre />
      <OurModel />
      <Testimaonials />
      <OurClients />
    </>
  );
}

export default App;
