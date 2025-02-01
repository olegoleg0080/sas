import { Outlet } from "react-router-dom";
import { Header } from "../components/HeaderComponents/Header";
import { RootModal } from "../components/rootModals/RootModal";
import { Box, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { showAllSelect } from "../redux/slice";
import { isLoadingSelector } from "../redux/selectors";
import { Hourglass } from "react-loader-spinner";

export const Layout = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const loader = useSelector(isLoadingSelector);
    return (
        <Box
            sx={{ position: "relative" }}
            onClick={e => {
                dispatch(showAllSelect(Array.from(e.target.classList)));
            }}
        >
            {loader && (
                <Box
                    sx={{
                        backgroundColor: "rgba(0, 0, 0, 0.34)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        width: "100%",
                        height: "100vh",
                    }}
                >
                    <Hourglass
                        visible={true}
                        height="150"
                        width="150"
                        ariaLabel="hourglass-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        colors={["#192599", "#495AF5"]}
                    />
                </Box>
            )}
            <Header />
            <Outlet />
            <RootModal />
        </Box>
    );
};
