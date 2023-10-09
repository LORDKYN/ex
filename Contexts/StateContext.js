import { createContext } from "react";
import { useState } from "react";



const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [navbarData, setNavbarData] = useState([]);

  const [ swiperData , setSwiperData] = useState([])

  

  return (
    <StateContext.Provider value={{ navbarData, setNavbarData, swiperData , setSwiperData }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;
