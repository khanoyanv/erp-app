import React from 'react';
import './tabs.css';

interface ITabsProps {
  activeTab: string;
  setActiveTab: any;
}

export const Tabs: React.FC<ITabsProps> = ({ activeTab, setActiveTab }) => {
  const changeTab = (e: any): void => {
    e.target.id === 'employees'
      ? setActiveTab('employees')
      : setActiveTab('tasks');
  };

  return (
    <div className='tabs__container'>
      <div
        className={activeTab === 'employees' ? 'tab highlighted' : 'tab'}
        onClick={(e) => changeTab(e)}
        id={'employees'}
      >
        Employees
      </div>
      <div
        className={activeTab === 'tasks' ? 'tab highlighted' : 'tab'}
        onClick={(e) => changeTab(e)}
        id={'tasks'}
      >
        Tasks
      </div>
    </div>
  );
};
