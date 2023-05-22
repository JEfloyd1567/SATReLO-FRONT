import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPatient, IUser } from "../../interfaces";

interface satreloState {
  isLoadingPatients: boolean;
  patients: IPatient[];
  myPatients: IPatient[];
  errorMessage: string | undefined;
}

const initialState: satreloState = {
  isLoadingPatients: true,
  patients: [],
  myPatients: [],
  errorMessage: undefined
}

export const satreloSlice = createSlice({
  name: 'satrelo',
  initialState,
  reducers: {
    onLoadPatients: (state, action: PayloadAction<IPatient[]>) => {
      state.isLoadingPatients = false;
      action.payload.forEach(patient => {
        const exists = state.patients.some(dbPatient => dbPatient.name === patient.name)

        if (!exists) {
          state.patients.push(patient)
        }
      })
      // state.patients = action.payload;
      state.errorMessage = undefined
    },
    onLoadMyPatients: (state, action: PayloadAction<IPatient[]>) => {
      state.isLoadingPatients = false;
      action.payload.forEach(patient => {
        const exists = state.myPatients.some(dbPatient => dbPatient.name === patient.name)

        if (!exists) {
          state.myPatients.push(patient)
        }
      })
      // state.patients = action.payload;
      state.errorMessage = undefined
    },
    loadingEvents: (state) => {
      state.isLoadingPatients = true
    }
  }
});

export const {onLoadPatients, onLoadMyPatients, loadingEvents} = satreloSlice.actions;
export default satreloSlice.reducer;