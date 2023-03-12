import Aboutme from "./components/aboutme";
import "./App.css";
import Banner from "./components/banner";
import Project from "./components/project";
import Techstack from "./components/techstack";
import Socialprofile from "./components/socialprofile/socialprofile";
import Footer from "./components/footer/footer";
import think from "./img/thnk.gif"
import React, { useState, useEffect } from 'react'
function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])
  return (
    <>
        {loading === false ? (
          <>
   <Banner />
   <Aboutme />
   <Techstack />

   <Project />

   <Socialprofile />
   <Footer/></>
      ) : (
<>  
<div class="thinker">
<img  class="think" src={think}></img>
</div>
</>
      )}
     
    </>
  );
}

export default App;
