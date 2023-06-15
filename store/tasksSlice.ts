import { ITaskDTO } from './../dto/TaskDTO';
import { createSlice } from '@reduxjs/toolkit';

interface ITasksState {
  name: string;
  tasks: ITaskDTO[];
}

const initialState: ITasksState = {
  name: 'tasks',
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'taks',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const tasksReducer = tasksSlice.reducer;
