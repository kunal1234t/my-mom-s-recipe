import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import OurStory from "./pages/OurStory";
import LaunchingSoon from "./pages/LaunchingSoon";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Listing from "./pages/Listing";
import BlogPage from "./pages/BlogPage";

// Create context
const MyContext = createContext();

function App() {
  const [stateList, setStateList] = useState([]);
  const [isOpenProductModel, setisOpenProductModel] = useState(false); // Add modal state

  useEffect(() => {
    getState("https://api.countrystatecity.in/v1/countries/IN/states");
  }, []);

  const getState = async (url) => {
    try {
      const response = await axios.get(url, {
        headers: {
          'X-CSCAPI-KEY': process.env.REACT_APP_CSCAPI_KEY,
        },
      });
      setStateList(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching state data:", error);
    }
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={{ stateList, isOpenProductModel, setisOpenProductModel }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory/>} />
          <Route path="/shop" element={<Listing/>} />
          <Route path="/launching-soon" element={<LaunchingSoon/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/blog-page" element={<BlogPage/>} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}


export default App;
export { MyContext };
