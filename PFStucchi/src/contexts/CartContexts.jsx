import {createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);
    
    const clear = () => setItems([]);

    const addItem = (item, quantity) => {
        const itemexistente = isInCart(item);
        if (itemexistente) {
          const updateItem = {...itemexistente,quantity: itemexistente.quantity + quantity};
          setItems((prev) => prev.map((items) => items.id === item.id ? updateItem : items ));
        } else {
          setItems((prev) => {return prev.concat({...item, quantity})}); 
        }
      }
    
      const isInCart = (item) => {
        return items.find((items) => items.id === item.id);
      }
    
      const removeItem = (id) => {
        const newItems = items.filter((prev) => prev.id !== id);
        setItems(newItems);
      }
        
    return <CartContext.Provider value={{clear,addItem,items,removeItem }}>{children}</CartContext.Provider>;
};


