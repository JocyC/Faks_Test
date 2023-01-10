import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { Action } from "@remix-run/router";

interface ClaimState {
  isLoading: boolean;
  id: String;
}

const initialState: ClaimState = {
  isLoading: false,
  id: "",
};

const claimSlice = createSlice({
  name: "claim",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase()
  },
});

export const {} = claimSlice.actions;

export default claimSlice.reducer;
