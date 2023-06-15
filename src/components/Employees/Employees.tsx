import React, { ReactElement, useEffect } from 'react';
import './employees.css';
import { IEmployeeDTO } from '../../../dto/EmployeeDTO';
import { Employee } from './components/Employee/Employee';

interface IEmployeesProps {
  employees: IEmployeeDTO[];
  removeEmployee: any;
}

export const Employees: React.FC<IEmployeesProps> = ({
  employees,
  removeEmployee,
}): ReactElement => {
  return (
    <div className={'employees__list'}>
      {employees.map(
        (employee) =>
          employee.name &&
          employee.surname &&
          employee.position &&
          employee.email && (
            <Employee
              key={employee.id}
              employee={employee}
              removeEmployee={removeEmployee}
            />
          )
      )}
    </div>
  );
};
