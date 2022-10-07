import logo from "./logo.svg";
import "./App.css";
import React, { createContext, useState } from "react";
import axios from "axios";
import DisplayHeader from "./components/DisplayHeader";
import SearchBar from "./components/SearchBar";
import Images from "./components/Images";
import useAxios from "./hooks/useAxios";


// Context API 
export const ImageContext = createContext();


function App() {
  const [searchImage, setSearchImage] = useState("")
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&per_page=20&query=office&client_id=b65VRHpz_7OM_oOr14qyG09ig8AwEskUg1pD29GT4IM`
  );
  // console.log(response);
   const value = {
     response,
     isLoading,
     error,
     fetchData,
     searchImage,
     setSearchImage,
   };

  return (
    <ImageContext.Provider value={value}>
      <DisplayHeader>
        <SearchBar></SearchBar>
      </DisplayHeader>
      <Images></Images>
    </ImageContext.Provider>
  );
}

export default App;
