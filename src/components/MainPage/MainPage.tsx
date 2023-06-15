import React, { ReactElement, useEffect, useState } from 'react';
import './mainPage.css';
import { Tabs } from './components/Tabs/Tabs';
import {
  deleteEmployee,
  getEmployees,
  selectAllEmployees,
  upsertEmployee,
} from '../../../store/employeesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Employees } from '../Employees/Employees';
import { AddEmployeeForm } from '../AddEmployeeForm/AddEmployeeForm';
import { v4 as uuid } from 'uuid';
import { IEmployeeDTO } from '../../../dto/EmployeeDTO';
import { ITaskDTO } from '../../../dto/TaskDTO';
import {
  deleteTask,
  getTasks,
  selectAllTasks,
  upsertTask,
} from '../../../store/tasksSlice';
import { Tasks } from '../Tasks/Tasks';
import { AddTaskForm } from '../AddTaskForm/AddTaskForm';

export const MainPage = () => {
  const [activeTab, setActiveTab] = useState('employees');
  const [employee, setEmployee] = useState<IEmployeeDTO>({
    name: '',
    surname: '',
    email: '',
    position: '',
    id: uuid(),
  });
  const [task, setTask] = useState<ITaskDTO>({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    id: uuid(),
    employeeId: '',
  });
  const dispatch = useDispatch();
  const employees: IEmployeeDTO[] = useSelector(selectAllEmployees);
  const tasks: ITaskDTO[] = useSelector(selectAllTasks);

  useEffect(() => {
    dispatch(getEmployees());
  }, [employees]);

  useEffect(() => {
    dispatch(getTasks());
  }, [tasks]);

  const addEmployee = (e: any): void => {
    e.preventDefault();
    dispatch(upsertEmployee(employee));
    setEmployee({
      name: '',
      surname: '',
      email: '',
      position: '',
      id: uuid(),
    });
  };

  const removeEmployee = (id: string | number): void => {
    dispatch(deleteEmployee(id));
  };

  const addTask = (e: any): void => {
    e.preventDefault();
    dispatch(upsertTask(task));
    setTask({
      name: '',
      description: '',
      startDate: '',
      endDate: '',
      id: uuid(),
      employeeId: '',
    });
  };

  const removeTask = (id: string | number): void => {
    dispatch(deleteTask(id));
  };

  const renderEmployees = (): ReactElement => {
    return (
      <>
        <Employees employees={employees} removeEmployee={removeEmployee} />
        <AddEmployeeForm
          employee={employee}
          addEmployee={addEmployee}
          setEmployee={setEmployee}
        />
      </>
    );
  };

  const renderTasks = (): ReactElement => {
    return (
      <>
        <Tasks tasks={tasks} removeTask={removeTask} />
        <AddTaskForm task={task} addTask={addTask} setTask={setTask} />
      </>
    );
  };

  return (
    <div className={'mainPage__container'}>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'employees' ? renderEmployees() : renderTasks()}
    </div>
  );
};
