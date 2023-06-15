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
import { AddForm } from '../AddForm/AddForm';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { IEmployeeDTO } from '../../../dto/EmployeeDTO';

export const MainPage = () => {
  const [activeTab, setActiveTab] = useState('employees');
  const [employee, setEmployee] = useState<IEmployeeDTO>({
    name: '',
    surname: '',
    email: '',
    position: '',
    id: uuid(),
  });
  const employees: IEmployeeDTO[] = useSelector(selectAllEmployees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [employees]);

  const createEmployee = (employee: IEmployeeDTO) => {
    dispatch(upsertEmployee(employee));
  };

  const addEmployee = (e: any) => {
    e.preventDefault();
    createEmployee(employee);
  };

  const removeEmployee = (id: string | number): void => {
    dispatch(deleteEmployee(id));
  };

  const renderEmployees = (): ReactElement => {
    return <Employees employees={employees} removeEmployee={removeEmployee} />;
  };

  const renderTasks = (): ReactElement => {
    return <></>;
    // return <Tasks />;
  };

  return (
    <div className={'mainPage__container'}>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'employees' ? renderEmployees() : renderTasks()}
      <AddForm setEmployee={setEmployee} addEmployee={addEmployee} />
    </div>
  );
};
