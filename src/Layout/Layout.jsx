import { Outlet } from "react-router-dom";
import { Header } from "../components/HeaderComponents/Header";
import { RootModal } from "../components/rootModals/RootModal";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { showAllSelect } from "../redux/slice";

export const Layout = () => {
    const dispatch = useDispatch();
    return (
        <Box onClick={(e) => {
            dispatch(showAllSelect(Array.from(e.target.classList)));
        }}>
            <Header />
            <Outlet />
            <RootModal />
        </Box>
    );
};
