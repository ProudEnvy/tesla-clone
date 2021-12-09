import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["ModelS", "ModelX", "ModelY", "Model3"],
};

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer