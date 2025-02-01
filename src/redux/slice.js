import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { downloadExcel, getData, getDataById, signin, updateStudent } from "../API";

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
        isLoading: false,
        error: null,
    },
    extraReducers: builder =>
        builder
            .addCase(signin.pending, (state) => {
                console.log("pending");
                state.isLoading = true
            })
            .addCase(signin.fulfilled, (state, action) => {
                console.log("fulfilled token");
                state.isLoading = false
                if (state.token !== action.payload.token) {
                    state.token = action.payload.token;
                    
                }
            })
            .addCase(signin.rejected, (_, action) => {
                console.log(action);
                console.log("rejected");
            })

            .addCase(getData.pending, (state) => {
                console.log("pending");
                state.isLoading = true
            })
            .addCase(getData.fulfilled, (state, action) => {
                console.log("got");
                // console.log(action.payload);
                if (
                    JSON.stringify(state.list) !==
                    JSON.stringify(action.payload)
                ) {
                    state.list = action.payload;
                }
                state.isLoading = false
            })
            .addCase(getData.rejected, (state, action) => {
                console.log(action.payload);
                state.token = "";
                state.showLoginModal = true;
                console.log("rejected");
            })

            .addCase(getDataById.pending, () => {
                console.log("pending");
            })
            .addCase(getDataById.fulfilled, (state, action) => {
                console.log("fulfilled");
                console.log(action.payload);
                state.reductStudent = action.payload;
                state.isLoading = false
            })
            .addCase(getDataById.rejected, (state, action) => {
                console.log(action.payload);
                state.token = "";
                state.showLoginModal = true;
                console.log("rejected");
            })

            .addCase(updateStudent.pending, (state) => {
                console.log("pending");
                state.isLoading = true
            })
            .addCase(updateStudent.fulfilled, (state, action) => {
                console.log("fulfilled");
                console.log(action.payload);
                const index = state.list.findIndex(
                    student => student._id === action.payload._id
                );
                if (index !== -1) {
                    state.list[index] = action.payload;
                }
                state.showRedactModal = false;
                state.isLoading = false
            })
            .addCase(updateStudent.rejected, (state, action) => {
                console.log(action.payload);
                state.token = "";
                state.showLoginModal = true;
                console.log("rejected");
            })
            .addCase(downloadExcel.pending, () => {
                console.log("pending");
            })
            .addCase(downloadExcel.fulfilled, (state, action) => {
                console.log("fulfilled");
                console.log(action.payload);
                state.isLoading = false
            })
            .addCase(downloadExcel.rejected, (state, action) => {
                console.log(action.payload);
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
        showSelectGroup: state => {
            state.showSelectGroup = true;
            state.showSelectVac = false;
        },
        showSelectVac: state => {
            state.showSelectVac = true;
            state.showSelectGroup = false;
        },
        tornBurgerModal: state => {
            state.showBurgerModal = !state.showBurgerModal;
        },

        tornRedactModal: (state, action) => {
            console.log(action.payload);
            state.selectId = action.payload;
            state.reductStudent = "";
            state.showRedactModal = !state.showRedactModal;
        },
        tornLoginModal: state => {
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
    isLoading,
} = medSlice.actions;
export const medReducer = medSlice.reducer;

const toDoPersistConfig = {
    key: "root",
    storage: storage,
    blacklist: ["list", "showRedactModal", "selectId", "isLoading"],
};

export const medPersistReducer = persistReducer(toDoPersistConfig, medReducer);
