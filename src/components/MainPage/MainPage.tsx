import React, { ReactElement, useEffect, useState } from 'react';
import './mainPage.css';
import { Tabs } from './components/Tabs/Tabs';
import { getEmployees } from '../../../store/employeesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Employees } from '../Employees/Employees';

export const MainPage = () => {
  const [activeTab, setActiveTab] = useState('employees');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  const renderEmployees = (): ReactElement => {
    return <Employees />;
  };

  const renderTasks = (): ReactElement => {
    return <></>;
    // return <Tasks />;
  };

  return (
    <div className={'mainPage__container'}>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'employees' ? renderEmployees() : renderTasks()}
    </div>
  );
};
