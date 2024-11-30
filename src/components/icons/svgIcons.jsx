import { createSvgIcon } from "@mui/material";

export const BurgerIcon = createSvgIcon(
    <svg id="burgerSVG" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="menu_FILL0_wght400_GRAD0_opsz24 1">
            <path
                id="Vector"
                d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
                fill="white"
            />
        </g>
    </svg>,
    "Burger"
);
export const DownloadIcon = createSvgIcon(
    <svg id="downloadSVG" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="download_FILL0_wght400_GRAD0_opsz24 1">
            <path
                id="Vector"
                d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z"
                fill="white"
            />
        </g>
    </svg>,
    "Download"
);
export const PersonIcon = createSvgIcon(
    <svg id="personSVG" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="material-symbols:person">
            <path
                id="Vector"
                d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 20V17.2C4 16.6333 4.146 16.1123 4.438 15.637C4.73 15.1617 5.11733 14.7993 5.6 14.55C6.63333 14.0333 7.68333 13.6457 8.75 13.387C9.81667 13.1283 10.9 12.9993 12 13C13.1 13 14.1833 13.1293 15.25 13.388C16.3167 13.6467 17.3667 14.034 18.4 14.55C18.8833 14.8 19.271 15.1627 19.563 15.638C19.855 16.1133 20.0007 16.634 20 17.2V20H4Z"
                fill="white"
            />
        </g>
    </svg>,
    "Person"
);
export const SortIcon = createSvgIcon(
    <svg id="sortIconSvg" fill="white" xmlns="http://www.w3.org/2000/svg">
        <g id="filter_list_FILL0_wght400_GRAD0_opsz24 1">
            <path
                id="Vector"
                d="M10 18V16H14V18H10ZM6 13V11H18V13H6ZM3 8V6H21V8H3Z"
            />
        </g>
    </svg>,
    "Sort"
);
export const CloseIcon = createSvgIcon(
    <svg id="closeSvg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Frame 274">
            <path
                id="Vector 1"
                d="M18.5 6L6 18.5M6 6L18.5 18.5"
                stroke="black"
            />
        </g>
    </svg>,
    "Close"
);

export const RemoveIcon = createSvgIcon(
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
            fill="#192599"
        />
    </svg>,
    "Remove"
);

export const CloseIconInSircle = createSvgIcon(
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 8.59L13.59 5L15 6.41L11.41 10L15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59Z"
            fill="#9C9C9C"
        />
    </svg>,
    "Close"
);

export const CalendarSvg = createSvgIcon(
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20ZM6.5 13C6.5 11.62 7.62 10.5 9 10.5C10.38 10.5 11.5 11.62 11.5 13C11.5 14.38 10.38 15.5 9 15.5C7.62 15.5 6.5 14.38 6.5 13Z"
            fill="#49454F"
        />
    </svg>,
    "calendar"
);
