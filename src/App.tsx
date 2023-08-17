import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import { persistor, store } from "./app/Store";
import Router from "./utils/Router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";

function App() {
  const [isDark, setIsDark] = useState(false);
  const themeHandler = () => {
    if (!isDark) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  };
  return (
    <Provider store={store}>
      <PersistGate loading={<></>} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider>
            <div className={`${isDark ? "dark" : "light"}`}>
              <Header isDark={isDark} setDarkMode={themeHandler} />
              <Router/>
              <Footer/>
            </div>
          </ThemeProvider>
          <ToastContainer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
