import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import GlobalStyle from "./style/GlobalStyle";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import {
  CartPage,
  CategoryPage,
  Contact,
  ForYouPage,
  Homepage,
  LoginPage,
  Products,
  SearchPage,
  SignUpPage,
  SingleProductPage,
} from "./pages";
import authService from "./appwrite/auth";
import { useDispatch, useSelector } from "react-redux";
import { getItemFromLocalStorage, login, logout } from "./store/store";
import LoadngScreen from "./components/loading/LoadngScreen";
import { Div } from "./style/Container";
import VitonPage from "./pages/vitonpage/VitonPage";
import TopsPage from "./pages/toppage/TopPage";
import VitonPage2 from "./pages/vitonpage/VitonPage2";
import CameraTryPage from "./pages/cameratrypage/CameraTryPage";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login(user));
          dispatch(getItemFromLocalStorage());
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={<Layout />}
        path='/'
      >
        <Route
          index
          element={<Homepage />}
        />
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='signup'
          element={<SignUpPage />}
        />
        <Route
          path='products'
          element={<Products />}
        />

        <Route
          element={<CategoryPage />}
          path='category/:name'
        />
        <Route
          element={<SingleProductPage />}
          path='products/:name/:id'
        />
        <Route
          element={<ForYouPage />}
          path='foryou/:name/:id'
        />

        <Route
          path='/search/:product'
          element={<SearchPage />}
        />
        <Route
          path='/cart'
          element={<CartPage />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />

        <Route
          path='products/:category/:id/try_on'
          element={<VitonPage />}
        />

        <Route
          path='tops/:id'
          element={<TopsPage />}
        />

        <Route
          path='tops/:id/try_on'
          element={<VitonPage2 />}
        />

        <Route
          path='real_camera_try'
          element={<CameraTryPage />}
        />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={lightTheme}>
      {loading ? <LoadngScreen /> : <RouterProvider router={router} />}
      <GlobalStyle />
      {error && <Div>{error}</Div>}
    </ThemeProvider>
  );
}

export default App;
