import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://api.novaposhta.ua/v2.0/json/";
const API_KEY = 'eeb0edb062078c037a78afae7595c061';

export const fetchShipping = createAsyncThunk(
    "shipping/fetchByNumber",
    async (trackingNumber, thunkAPI) => {
        const params = {
            apiKey: API_KEY,
            modelName: "TrackingDocument",
	        calledMethod: "getStatusDocuments",
            methodProperties: {
                Documents : [
                    { DocumentNumber: trackingNumber }
                ]      
            }
        }

        try {
            const response = await axios.post("", params);
            console.log(response.data);

            if (response.data.errors.length > 0) {
                throw new Error(response.data.errors[0])
            }

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchOffices = createAsyncThunk(
    "offices/fetchBycity",
    async (city, thunkAPI) => {
        const params = {
            apiKey: API_KEY,
            modelName: "Address",
            calledMethod: "getWarehouses",
            methodProperties: {
                CityName : city,
                Language : "UA",
            }
        }

        try {
            const response = await axios.post("", params);
            console.log(response.data);
            
            if (response.data.errors.length > 0) {
                throw new Error(response.data.errors[0])
            }

            if (response.data.data.length === 0) {
                throw new Error("За запитом результатів не знайдено. Перевірте, чи коректно вказана назва населеного пункту.")
            }

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
