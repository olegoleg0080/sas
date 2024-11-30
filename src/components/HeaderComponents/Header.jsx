import { Box, Container, IconButton, Link, useTheme } from "@mui/material";
import { BurgerIcon, DownloadIcon, PersonIcon } from "../icons/svgIcons";
import { HeaderSortNav } from "./HeaderSortNav";
import { useDispatch } from "react-redux";
import { tornBurgerModal, tornLoginModal } from "../../redux/slice";
import {
    eSchoolLogo,
    headerContainer,
    headerBurgerIcon,
    headerIconBox,
    headerIcons,
} from "../../styles/headerStyles.js";

export const Header = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

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
                href="/"
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
