import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk(
    "students/getAll",
    async () => {
        let res = await axios.get("http://localhost:8081/students");
        return res.data;
    }
)

export const add = createAsyncThunk(
    "students/add",
    async (newStudent) => {
        let newStudentRes = await axios.post("http://localhost:8081/students", newStudent);
        return newStudentRes.data;
    }
)