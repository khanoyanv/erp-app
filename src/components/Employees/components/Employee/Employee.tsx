import React, { ReactElement } from 'react';
import { IEmployeeDTO } from '../../../../../dto/EmployeeDTO';
import './employee.css';

interface IEmployeeProps {
  employee: IEmployeeDTO;
  removeEmployee: any;
  openEmployee: any;
}

export const Employee: React.FC<IEmployeeProps> = ({
  employee,
  removeEmployee,
  openEmployee,
}): ReactElement => {
  return (
    <div
      className='list-item'
      id={employee.id.toString()}
      onClick={() => openEmployee(employee)}
    >
      <label
        className={'list-item__name'}
      >{`${employee.name} ${employee.surname}`}</label>
      <label className='list-item__email'>{employee.email}</label>
      <label className='list-item__position'>{employee.position}</label>
      <div
        className='list-item__delete-icon'
        title={'remove employee'}
        id={employee.id.toString()}
        onClick={(e: any) => removeEmployee(e.target.id)}
      >
        x
      </div>
    </div>
  );
};
