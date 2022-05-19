import React from "react";
import "./assets/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import AboutUs from "./pages/AboutUs";
import Nav from "./components_Fathers/Nav";
import Footer from "./components_Fathers/Footer";

const App = () => {
  // const [apiBdEEANJFR, setApiBdEEANJFR] = useState(null);
  // const API =
  //   "https://docs.google.com/spreadsheets/d/e/2PACX-1vSMscbBfAJBfLLv-2X38e7eWpLAz4pk0enqu1BvQkxUiB3UdjsGK93Rz4MxMZw26-ySmBcWPy-ZMwZO/pub?gid=1829392902&single=true&output=csv";
  //   const convertData = (data) => {
  //   const json = data.map((line, index) => {
  //     if (index > 0) {
  //       let obj = {};
  //       data[0].forEach((key, j) => (obj = { ...obj, [key]: line[j] }));
  //       return obj;
        
  //     }
  //   });
  //   json.shift();
  //   setApiBdEEANJFR(json);
  // };

  // useEffect(() => {
  //   fetch(API)
  //     .then((result) => result.text())
  //     .then((text) => papa.parse(text))
  //     .then((data) => convertData(data.data));
      
  // }, []);

  // if(!apiBdEEANJFR){
  //   return <p>Loading...</p>
  // }
  
  return (
    <div className="appDivContainer">
      <div className="appDivContainerBody">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div >
  );
};

export default App;
