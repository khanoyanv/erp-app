import axios from 'axios';
import { ITaskDTO } from './../dto/TaskDTO';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';

interface ITasksState {
  name: string;
  tasks: ITaskDTO[];
  status: string;
}

const initialState: ITasksState = {
  name: 'tasks',
  tasks: [],
  status: 'pending',
};

export const getTasks = createAsyncThunk('tasksSlice/getTasks', async () => {
  const results = await axios.get(
    'https://rocky-temple-83495.herokuapp.com/tasks'
  );
  const tasks = results.data;

  return tasks;
});

export const upsertTask = createAsyncThunk(
  'tasksSlice/upsertEmployee',
  async (task: ITaskDTO) => {
    const result = await axios
      .post('https://rocky-temple-83495.herokuapp.com/tasks', {
        name: task.name,
        description: task.description,
        employeeId: task.employeeId,
        startDate: task.startDate,
        endDate: task.endDate,
      })
      .then((res) => res);

    return result;
  }
);

export const deleteTask = createAsyncThunk(
  'employeesSlice/deleteEmployee',
  async (id) => {
    axios.delete(`https://rocky-temple-83495.herokuapp.com/tasks/${id}`);

    return id;
  }
);

const tasksSlice = createSlice({
  name: 'taks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getTasks.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export const selectAllTasks = (state: RootState) => state.tasks.tasks;

export const selectFilteredTasks =
  (searchTerm: string) => (state: RootState) => {
    const tasks: ITaskDTO[] = state.tasks.tasks;
    const filteredTasks: ITaskDTO[] = tasks.filter(
      (task) =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.startDate
          .toLowerCase()
          .includes(searchTerm.toString().toLowerCase()) ||
        task.endDate.toLowerCase().includes(searchTerm.toString().toLowerCase())
    );

    return filteredTasks;
  };

export const tasksReducer = tasksSlice.reducer;
