import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://sas-db.onrender.com/medApi/";

// axios.defaults.baseURL = "http://localhost:3001/medApi/";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
export const signin = createAsyncThunk(
    "medApi/auth/signin",
    async (obj, ThunkAPI) => {
        // console.log(obj);
        const { email, password } = obj;
        try {
            // console.log("try");
            const res = await axios.post("/auth/signin", {
                params: {
                    email,
                    password,
                },
            });
            return res.data;
        } catch (error) {
            // console.log(error);
            return ThunkAPI.rejectWithValue("error");
        }
    }
);

export const updateStudent = createAsyncThunk(
    "medApi/data/update",
    async (obj, ThunkAPI) => {
        // console.log(obj);
        const { token, selectId, params } = obj;
        // console.log(`Barer ${token}`);

        try {
            const res = await axios.post(`/data/update/${selectId}`, params, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            // console.log(res.data);

            return res.data;
        } catch (error) {
            // console.log(error);

            return ThunkAPI.rejectWithValue("error");
        }
    }
);

export const getData = createAsyncThunk(
    "medApi/data/getData",
    async (obj, ThunkAPI) => {
        const { token, schoolId } = obj;
        try {
            // console.log("try API GET");
            // console.log(token);
            // console.log(schoolId);
            
            const res = await axios.get(`/data/get/${schoolId}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            // console.log(res.data);
            return res.data;
        } catch (error) {
            // console.log(error);
            return ThunkAPI.rejectWithValue("error");
        }
    }
);

export const downloadExcel = createAsyncThunk(
    "medApi/data/downloadExcel",
    async (obj, ThunkAPI) => {
        const {
            token,
            filterKey = "All",
            filterValue = "All",
            specificClass = "All",
        } = obj;
        try {
            // console.log("Starting Excel download...");
            const response = await axios.get(
                `/data/generate-excel/${filterKey}/${filterValue}/${specificClass}`,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                    responseType: "blob",
                }
            );

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "filtered_data.xlsx");
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);

            return "File downloaded successfully";
        } catch (error) {
            console.error("Error downloading Excel file:", error);
            return ThunkAPI.rejectWithValue("Error downloading file");
        }
    }
);

export const getDataById = createAsyncThunk(
    "medApi/data/getDataById",
    async (obj, ThunkAPI) => {
        const { token, selectId } = obj;
        try {
            // console.log("try");
            // console.log(token, selectId);

            const res = await axios.get(`/data/getById/${selectId}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            return res.data;
        } catch (error) {
            // console.log(error);
            return ThunkAPI.rejectWithValue("error");
        }
    }
);
