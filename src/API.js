import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://sas-db.onrender.com/medApi/";

export const signin = createAsyncThunk(
    "medApi/auth/signin",
    async (obj, ThunkAPI) => {
        console.log(obj);
        const { email, password } = obj;
        try {
            console.log("try");
            const res = await axios.post("/auth/signin", {
                params: {
                    email,
                    password,
                },
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return ThunkAPI.rejectWithValue("error");
        }
    }
);

export const updateStudent = createAsyncThunk(
    "medApi/data/update",
    async (obj, ThunkAPI) => {
        console.log(obj);
        const { token, selectId, params } = obj;
        console.log(`Barer ${token}`);
        
        try {
            const res = await axios.post(
                `/data/update/${selectId}`,
                params, 
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(res.data);
            
            return res.data;
        } catch (error) {
            console.log(error);
            
            return ThunkAPI.rejectWithValue("error");
        }
    }
);

export const getData = createAsyncThunk(
    "medApi/data/getData",
    async (obj, ThunkAPI) => {
        const { token } = obj;
        try {
            console.log("try");
            console.log(token);
            
            const res = await axios.get("/data/get", {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return ThunkAPI.rejectWithValue("error");
        }
    }
);

export const getDataById = createAsyncThunk(
    "medApi/data/getDataById",
    async (obj, ThunkAPI) => {
        const { token, selectId } = obj;
        try {
            console.log("try");
            console.log(token, selectId);

            const res = await axios.get(`/data/getById/${selectId}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            return res.data;
        } catch (error) {
            console.log(error);
            return ThunkAPI.rejectWithValue("error");
        }
    }
);
