import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./components/pages/HomePage";
import SignInPage from "./components/pages/SignInPage";
import CustomThemeProvider from "./CustomThemeProvider";

function App() {
  // const userInitialState = undefined;
  const [user, setUser] = useState();
  const signIn = (userData) => setUser(userData);

  const signOut = () => setUser();

  const [shoppingCart, setShoppingCart] = useState({
    products: {},
    itemNumber: 0,
  });

  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/user"
            element={
              <SignInPage user={user} signIn={signIn} signOut={signOut} />
            }
          />
          <Route
            path="/home"
            element={
              <HomePage
                user={user}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
