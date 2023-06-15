import React, { useEffect } from 'react';
import './employees.css';
import { selectAllEmployees } from '../../../store/employeesSlice';
import { useSelector } from 'react-redux';
import { IEmployeeDTO } from '../../../dto/EmployeeDTO';

export const Employees = () => {
  const employees: IEmployeeDTO[] = useSelector(selectAllEmployees);

  useEffect(() => {
    console.log(employees);
  }, [employees]);

  return (
    <div className='employees__container'>
      {/* {employees.map((employee) => (
        <Employee />
      ))} */}
    </div>
  );
};
