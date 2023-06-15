import React, { ReactElement } from 'react';
import { IEmployeeDTO } from '../../../../../dto/EmployeeDTO';
import './employee.css';

interface IEmployeeProps {
  employee: IEmployeeDTO;
}

export const Employee: React.FC<IEmployeeProps> = ({
  employee,
}): ReactElement => {
  return (
    <div className='list-item' id={employee.id.toString()}>
      <label
        className={'list-item__name'}
      >{`${employee.name} ${employee.surname}`}</label>
      <label className='list-item__email'>{employee.email}</label>
      <label className='list-item__position'>{employee.position}</label>
      <div className='list-item__delete-icon' title={'remove element'}>
        x
      </div>
    </div>
  );
};
