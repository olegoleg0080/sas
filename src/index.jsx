import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./components/Theme/ThemeMui";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import "@fontsource/manrope";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter basename="/sas/">
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <App />
                    </PersistGate>
                </Provider>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
