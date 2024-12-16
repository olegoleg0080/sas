import { Box, Container, IconButton, Link, useTheme } from "@mui/material";
import { BurgerIcon, DownloadIcon, PersonIcon } from "../icons/svgIcons";
import { HeaderSortNav } from "./HeaderSortNav";
import { useDispatch, useSelector } from "react-redux";
import { tornBurgerModal, tornLoginModal } from "../../redux/slice";
import {
    eSchoolLogo,
    headerContainer,
    headerBurgerIcon,
    headerIconBox,
    headerIcons,
} from "../../styles/headerStyles.js";
import { tokenSelector } from "../../redux/selectors.js";
import { downloadExcel } from "../../API.js";
import { useParams, useSearchParams } from "react-router-dom";

export const Header = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [params, setParams] = useSearchParams();
    const token = useSelector(tokenSelector)
    const filterGroup = params.get("filterGroup");
    const filterVac = params.get("filterVac");
    const { className } = useParams();
    const handleDownload = () => {

    
        dispatch(downloadExcel({
            token,
            filterKey: filterGroup ? "group" : "vac" || "All",
            filterValue: filterGroup || filterVac || "All",
            specificClass: className || "All",
        }));
    };
    return (
        <Container
            maxWidth="false"
            sx={{ ...headerContainer, bgcolor: theme.palette.primary.main }}
        >
            <IconButton
                sx={{ ...headerBurgerIcon }}
                aria-label="burger"
                color={"#fff"}
                onClick={() => {
                    dispatch(tornBurgerModal());
                }}
            >
                <BurgerIcon />
            </IconButton>
            <Link
                href="/sas"
                underline="none"
                color="#fff"
                sx={{ ...eSchoolLogo }}
            >
                Єдина Школа
            </Link>
            <HeaderSortNav />

            <Box
                sx={{
                    ...headerIconBox,
                }}
            >
                <IconButton
                    sx={{
                        ...headerIcons
                    }}
                    aria-label="download"
                    color={"#fff"}
                    onClick={handleDownload}
                >
                    <DownloadIcon />
                </IconButton>
                <IconButton
                    onClick={() => {
                        dispatch(tornLoginModal())
                    }}
                    sx={{
                        ...headerIcons
                    }}
                    aria-label="person"
                    color={"#fff"}
                >
                    <PersonIcon />
                </IconButton>
            </Box>
        </Container>
    );
};
