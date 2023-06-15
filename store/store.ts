import { tasksReducer } from './tasksSlice';
import { employeesReducer } from './employeesSlice';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    tasks: tasksReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
