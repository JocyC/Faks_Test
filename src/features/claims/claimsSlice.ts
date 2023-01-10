import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { Action } from "@remix-run/router";

export interface Claim {
  id: String;
}

interface ClaimsState {
  isLoading: boolean;
  isError: boolean;
  allClaims: Claim[];
}

const initialState: ClaimsState = {
  isLoading: false,
  isError: false,
  allClaims: [],
};

const claimsSlice = createSlice({
  name: "claims",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase()
  },
});

export const {} = claimsSlice.actions;

export default claimsSlice.reducer;
