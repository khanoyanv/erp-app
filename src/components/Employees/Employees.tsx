import React, { ReactElement, useState } from 'react';
import './employees.css';
import { IEmployeeDTO } from '../../../dto/EmployeeDTO';
import { Employee } from './components/Employee/Employee';
import { EmployeeModal } from './components/EmployeeModal/EmployeeModal';

interface IEmployeesProps {
  removeEmployee: any;
  employees: IEmployeeDTO[];
}

export const Employees: React.FC<IEmployeesProps> = ({
  removeEmployee,
  employees,
}): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<
    IEmployeeDTO | undefined
  >();

  const handleEmployeeClick = (employee: IEmployeeDTO) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={'employees__list'}>
      {employees ? (
        employees?.map(
          (employee) =>
            employee.name &&
            employee.surname &&
            employee.position &&
            employee.email && (
              <Employee
                key={employee.id}
                employee={employee}
                removeEmployee={removeEmployee}
                openEmployee={handleEmployeeClick}
              />
            )
        )
      ) : (
        <div>loading...</div>
      )}
      {isModalOpen && (
        <EmployeeModal employee={selectedEmployee} closeModal={closeModal} />
      )}
    </div>
  );
};
