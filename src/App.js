import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./components/pages/HomePage";
import SignInPage from "./components/pages/SignInPage";
import CustomThemeProvider from "./CustomThemeProvider";

export const userContext = createContext();

function App() {
  const shoppingCartInitialState = [];
  const [shoppingCart, setShoppingCart] = useState(shoppingCartInitialState);

  const addToCart = (productData) => {
    //lets check if the product is already in the cart
    const productFound = shoppingCart.find(
      (cartItem) => cartItem.id === productData.id
    );

    if (productFound) {
      // you want to return exact same cart + update quantity and total
      const newShoppingCart = shoppingCart.map((cartItem) => {
        if (cartItem.id === productFound.id) {
          const newItemQuantity = cartItem.quantity + 1;
          return {
            ...cartItem,
            quantity: newItemQuantity + 1,
            total: (newItemQuantity + 1) * cartItem.price,
          };
        }

        return cartItem;
      });

      setShoppingCart(newShoppingCart);
    } else {
      //if you dont find the product, we want to add it to the shopping cart for the first time
      const newCartItem = {
        ...productData,
        quantity: 1,
        total: productData.price,
      };
      setShoppingCart([...shoppingCart, newCartItem]);
    }
  };

  return (
    <CustomThemeProvider>
      <userContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/user" element={<SignInPage />} />
            <Route
              path="/"
              element={
                <HomePage
                  shoppingCart={shoppingCart}
                  setShoppingCart={setShoppingCart}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </CustomThemeProvider>
  );
}

export default App;
