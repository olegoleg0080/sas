export const headerContainer = {
    p: "16px 23px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    "@media (min-width: 744px)": {
        p: "25px 48px",
    },
    "@media (min-width: 1440px)": {
        p: "12px 80px 16px 80px",
    },
};
export const headerBurgerIcon = {
    fontSize: 24,
    p: 0,
    "@media (min-width: 744px)": {
        fontSize: 32,
    },
    "@media (min-width: 1440px)": {
        display: "none",
    },
};
export const eSchoolLogo = {
    fontFamily: "Manrope",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "1.4",
    textWrap: "nowrap",
    marginLeft: "32px",
    "@media (min-width: 744px)": {
        fontSize: "24px",
        marginLeft: "56px",
    },
    "@media (min-width: 1440px)": {
        marginLeft: "0",
    },
};

export const headerIconBox = {
    display: "flex",
    gap: "8px",
    "@media (min-width: 744px)": {
        gap: "24px",
    },
};
export const headerIcons = {
    fontSize: 24,
    p: 0,
    "@media (min-width: 744px)": {
        fontSize: 32,
    },
};

// *************************************

export const headerSortNavBox = {
    marginLeft: "27px",
    gap: "36px",
    display: "none",
    "@media (min-width: 1440px)": {
        display: "flex",
    },
};
export const headerSortNavBtn = {
    fontFamily: "Manrope",
    p: "10px 16px",
    color: "#fff",
    fontSize: "24px;",
    fontWeight: "600;",
    lineHeight: "1.4; ",
    textTransform: "none",
};
export const headerNavSelectGroup = {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    "&>div": {
        left: "-56px",
    },
};
export const headerNavSelectVac = {
    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    "&>div": {
                        left: "-27px",
                    },
}
export const headerNavSelectBtn = {
    p: "10px 16px",
    gap: "8px",
    color: "#fff",
    //* boxShadow: "none",
    fontFamily: "Manrope",
    fontSize: "24px;",
    fontWeight: "600;",
    lineHeight: "1.4; ",
    textTransform: "none",
};

// *****************************************

export const headerSortItem = {
    fontFamily: "Manrope",
                        p: "10px 24px",
                        gap: "10px",
                        color: "#fff",
                        fontSize: "24px",
                        fontWeight: "600",
                        lineHeight: "1.4",
                        transition: ".5s",
                        textTransform: "none",
                        textWrap: "nowrap",
}

export const headerSortList = {
    zIndex: 99,
                position: "absolute",
                borderRadius: "16px",
p: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                top: "82px",
                gap: "24px",
}