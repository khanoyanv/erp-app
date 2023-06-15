import React, { useEffect } from 'react';
import './employees.css';
import { selectAllEmployees } from '../../../store/employeesSlice';
import { useSelector } from 'react-redux';
import { IEmployeeDTO } from '../../../dto/EmployeeDTO';
import { Employee } from './components/Employee/Employee';

export const Employees = () => {
  const employees: IEmployeeDTO[] = useSelector(selectAllEmployees);

  useEffect(() => {
    console.log(employees);
  }, [employees]);

  return (
    <div className={'employees__list'}>
      {employees.map((employee) => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </div>
  );
};
