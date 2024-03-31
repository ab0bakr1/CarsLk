import { useContext, createContext, useState, useEffect } from "react";
import FavCart from "../Component/header/favorite/FavCart";
const ShppingFavContext = createContext({});

const initialFavItem = localStorage.getItem("fav")
  ? JSON.parse(localStorage.getItem("fav"))
  : [];
  const ShoppingFavProvider = ({ children }) => {
    const [isOpen,setIsOpen] = useState(false);
    const [FavItems,setFavItems] = useState(initialFavItem);
    useEffect(() => {
      localStorage.setItem("fav", JSON.stringify(FavItems));
    }, [FavItems]);
    const FavQuantity = FavItems.reduce(
      (quantity, item) => item.quantity + quantity,
      0
    );
    const openFav = () => {
      setIsOpen(true)
  };
  const closeFav = () => {
      setIsOpen(false)
  };
    const decreaseFavQuantity = (id) => {
      setFavItems((currItems) => currItems.filter((item) => item.id !== id));
    };
    
    const increaseFavQuantity = (id) => {
      setFavItems((currItems) => {
        if (currItems.find((item) => item.id === id) == null) {
          return [...currItems, { id, quantity: 1 }];
        }  } )
    }
  return (
        <ShppingFavContext.Provider value={{FavItems ,increaseFavQuantity, decreaseFavQuantity,FavQuantity,openFav,closeFav}}>{children}<FavCart isOpen={isOpen}/></ShppingFavContext.Provider>
    )
}

export default ShoppingFavProvider

export const useShoppingFav = () =>{
    return useContext(ShppingFavContext)
};