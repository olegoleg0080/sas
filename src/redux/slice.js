import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { getData, getDataById, signin, updateStudent } from "../API";

const medSlice = createSlice({
    name: "med",
    initialState: {
        list: [],
        token: "",
        selectId: "",
        reductStudent: "",
        showBurgerModal: false,
        showSelectGroup: false,
        showSelectVac: false,
        showRedactModal: false,
        showLoginModal: true,
        error: null,
    },
    extraReducers: (builder) =>
        builder
            .addCase(signin.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(signin.fulfilled, (state, action) => {
                console.log("fulfilled");
                state.token = action.payload.token;
            })
            .addCase(signin.rejected, (state, action) => {
                console.log(action);
                console.log("rejected");
            })

            .addCase(getData.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(getData.fulfilled, (state, action) => {
                console.log("fulfilled");
                console.log(action.payload);
                state.list = action.payload;
            })
            .addCase(getData.rejected, (state, action) => {
                console.log(action.payload);
                state.token = "";
                state.showLoginModal = true;
                console.log("rejected");
            })

            .addCase(getDataById.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(getDataById.fulfilled, (state, action) => {
                console.log("fulfilled");
                console.log(action.payload);
                state.reductStudent = action.payload;
            })
            .addCase(getDataById.rejected, (state, action) => {
                console.log(action.payload);
                state.token = "";
                state.showLoginModal = true;
                console.log("rejected");
            })

            .addCase(updateStudent.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(updateStudent.fulfilled, (state, action) => {
                console.log("fulfilled");
                console.log(action.payload);
                state.showRedactModal = false;
            })
            .addCase(updateStudent.rejected, (state, action) => {
                console.log(action.payload);
                state.token = "";
                state.showLoginModal = true;
                console.log("rejected");
            }),
    reducers: {
        showAllSelect: (state, action) => {
            const classes = action.payload;
            if (!classes.includes("navBtn")) {
                state.showSelectGroup = false;
                state.showSelectVac = false;
            }
            // if (state.showSelectGroup === true) {
            //     state.showSelectGroup = false;
            // } else if (state.showSelectVac === true) {
            //     state.showSelectVac = false;
            // } else {
            //     state.showSelectGroup = false;
            //     state.showSelectVac = false;
            // }
        },
        showSelectGroup: (state, action) => {
            state.showSelectGroup = true;
            state.showSelectVac = false;
        },
        showSelectVac: (state, action) => {
            state.showSelectVac = true;
            state.showSelectGroup = false;
        },
        tornBurgerModal: (state, action) => {
            state.showBurgerModal = !state.showBurgerModal;
        },

        tornRedactModal: (state, action) => {
            console.log(action.payload);
            state.selectId = action.payload;
            state.reductStudent = "";
            state.showRedactModal = !state.showRedactModal;
        },
        tornLoginModal: (state, action) => {
            state.showLoginModal = !state.showLoginModal;
        },
    },
});
export const {
    showAllSelect,
    showSelectGroup,
    showSelectVac,
    tornBurgerModal,
    tornRedactModal,
    login,
    tornLoginModal,
} = medSlice.actions;
export const medReducer = medSlice.reducer;

const toDoPersistConfig = {
    key: "root",
    storage: storage,
    blacklist: ["list", "showRedactModal", "selectId"],
};

export const medPersistReducer = persistReducer(toDoPersistConfig, medReducer);
