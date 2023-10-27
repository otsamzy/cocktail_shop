import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

const AppProvider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [searchitemValue, setsearchitemValue] = useState("a");
  const [cocktailList, setCocktailList] = useState([]);
  const [subscriber, setSubscriber] = useState(null);
  const getCockTails = async () => {
    setloading(true);
    try {
      const response = await fetch(`${url}${searchitemValue}`);
      const recData = await response.json();
      const { drinks } = recData;

      if (drinks) {
        const newData = drinks.map((items) => {
          const {
            idDrink,
            strAlcoholic,
            strDrinkThumb,
            strGlass,
            strCategory,
            strDrink,
          } = items;
          return {
            id: idDrink,
            category: strCategory,
            image: strDrinkThumb,
            type: strAlcoholic,
            glass: strGlass,
            title: strDrink,
          };
        });

        setCocktailList(newData);
        setloading(false);
      }
      if (!drinks) {
        setCocktailList([]);
        setloading(false);
      }
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  useEffect(() => {
    getCockTails();
  }, [searchitemValue]);

  return (
    <AppContext.Provider
      value={{
        cocktailList,
        setsearchitemValue,
        loading,
        subscriber,
        setSubscriber,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
