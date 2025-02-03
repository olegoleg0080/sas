import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "./components/pages/Home";
import { GlobalStyle } from "./GlobalStyle";
import { Class } from "./components/pages/Class";
import { SortByParams } from "./components/pages/SortByParams";
import { Typography } from "@mui/material";
// import { Class } from "./components/pages/Class";
// import { SortByParams } from "./components/pages/SortByParams";

export const App = () => {
    return (
        <>
        <Typography>Hello World</Typography>
            {/* <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/class/:className" element={<Class />} />
                    <Route path="/sort/:par" element={<SortByParams />} />
                    <Route path="*" element={<div>404!!!</div>} />
                </Route>
            </Routes> */}
            <GlobalStyle />
        </>
    );
};
