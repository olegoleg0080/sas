import {
    Box,
    IconButton,
    ListItemButton,
    Modal,
    Typography,
    useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { tornBurgerModal } from "../../redux/slice";
import { CloseIcon } from "../icons/svgIcons";



export const BurgerModal = ({ isOpen, onClose }) => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const styleBtn = {
        display: "flex;",
        width: "138px;",
        textAlign: "center",
        alignItems: "center;",
        gap: "10px;",
        p: 0,
        borderRadius: "32px",
        transition: ".5s",
        "&:has(a.active)": {
            borderRadius: "12px;",
            outline: `1px solid ${theme.palette.primary.main};`,
        },
        "&>a": {
            color: theme.palette.primary.main,
            textDecoration: "none",
            fontFamily: "Manrope;",
            fontSize: "20px;",
            fontWeight: "400;",
            lineHeight: "1.4;",
            padding: "10px 16px;",
        },
    };
    const styleBox = {
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        marginLeft: "16px",
        borderRadius: "16px",
        background: "#FFF",
    };
    const styleLabel = {
        display: "flex;",
        width: "201px;",
        height: "54px;",
        padding: " 10px 16px;",
        alignItems: "center;",
        gap: "8px;",
        flexShrink: "0;",
        borderRadius: "12px;",
        bgcolor: "#FFF;",
        "&:has(a.active)": {
            borderRadius: "12px;",
            // p: "0",
            outline: `1px solid ${theme.palette.primary.main};`,
        },
        "&,&>a": {
            color: theme.palette.primary.main,
            fontFamily: "Manrope;",
            fontSize: "20px;",
            fontStyle: "normal;",
            fontWeight: "800;",
            textDecoration: "none",
            lineHeight: "1.4;",
        },
    };

    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box
                sx={{
                    bgcolor: "#fff",
                    width: "233px",
                    p: "48px 16px",
                    height: "100%",
                    flexShrink: "0",
                    position: "relative",
                }}
            >
                <IconButton
                    sx={{
                        fontSize: 24,
                        p: 0,
                        position: "absolute",
                        top: 16,
                        right: 16,
                    }}
                    aria-label="burger"
                    color={"#fff"}
                    onClick={() => {
                        dispatch(tornBurgerModal());
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <ListItemButton sx={styleLabel}>
                    <NavLink to="/class">Класи</NavLink>
                </ListItemButton>
                {/* // */}
                <Typography sx={styleLabel}>Групи</Typography>
                {/* // */}
                <Box sx={styleBox}>
                    <ListItemButton sx={styleBtn}>
                        <NavLink to="/sort/group1" state={{filterGroup: "group1"}} >Основна</NavLink>
                    </ListItemButton>
                    <ListItemButton sx={styleBtn}>
                        <NavLink to="/sort/group2" state={{filterGroup: "group2"}}>Підготовча</NavLink>
                    </ListItemButton>
                    <ListItemButton sx={styleBtn}>
                        <NavLink to="/sort/group3" state={{filterGroup: "group3"}} >Спеціальна</NavLink>
                    </ListItemButton>
                    <ListItemButton sx={styleBtn}>
                        <NavLink to="/sort/group4" state={{filterGroup: "group4"}} >Звільнені</NavLink>
                    </ListItemButton>
                </Box>
                {/* // */}
                <Typography sx={styleLabel}>Щеплення</Typography>
                {/* // */}
                <Box sx={styleBox}>
                    <ListItemButton sx={styleBtn}>
                        <NavLink to="/sort/vac1" state={{filterVac: "vac1"}}>Спеціальна</NavLink>
                    </ListItemButton>
                    <ListItemButton sx={styleBtn}>
                        <NavLink to="/sort/vac2" state={{filterVac: "vac2"}}>Звільнені</NavLink>
                    </ListItemButton>
                </Box>
            </Box>
        </Modal>
    );
};
