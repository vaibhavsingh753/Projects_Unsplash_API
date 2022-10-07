import React, { useContext, useState } from "react";
import { ImageContext } from "../App";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleButtonSearch = () => {
    fetchData(
      `search/photos?page=1&per_page=20&query=${searchValue}&client_id=b65VRHpz_7OM_oOr14qyG09ig8AwEskUg1pD29GT4IM`
    );
      setSearchValue("");
      setSearchImage(searchValue);
    };
    
    const handleEnterSearch = (e) => { 
        if (e.key == "Enter") { 
              fetchData(
                `search/photos?page=1&per_page=20&query=${searchValue}&client_id=b65VRHpz_7OM_oOr14qyG09ig8AwEskUg1pD29GT4IM`
              );
            setSearchValue("");
            setSearchImage(searchValue)
        }
    }

  return (
    <div className="flex">
      <input
        className="bg-gray-50 border border-gray-300 text-sm w-full 
        indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        type="search"
        placeholder="Search Image"
        value={searchValue}
              onChange={handleInputChange}
              onKeyDown={handleEnterSearch}
      />
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br
          focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
