import Aboutme from "./components/aboutme";
import "./App.css";
import Banner from "./components/banner";
import Project from "./components/project";
import Techstack from "./components/techstack";
import Socialprofile from "./components/socialprofile/socialprofile";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Banner />
      <Aboutme />
      <Techstack />

      <Project />

      <Socialprofile />
      <Footer/>
    </>
  );
}

export default App;
