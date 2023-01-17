import React from "react";
import ReactDOM from "react-dom/client";
// import by Default Method
import Header from "./components/Header";
//Import by Named MEthod
// import { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";




const AppLayOut = () => {
  return (
    <>
      <Header />
      <Body />
    
      <Footer />
      
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayOut />);
