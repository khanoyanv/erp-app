import { IEmployeeDTO } from './../dto/EmployeeDTO';
import { RootState } from './store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface IEmployeesState {
  name: string;
  employees: IEmployeeDTO[];
  status: string;
}

const initialState: IEmployeesState = {
  name: 'employees',
  employees: [],
  status: 'pending',
};

export const getEmployees = createAsyncThunk(
  'employeesSlice/getEmployees',
  async () => {
    const results = await axios.get(
      'https://rocky-temple-83495.herokuapp.com/employees'
    );
    const employees = results.data;
    return employees;
  }
);

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployees.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.employees = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getEmployees.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export const selectAllEmployees = (state: RootState): IEmployeeDTO[] =>
  state.employees.employees;

export const employeesReducer = employeesSlice.reducer;