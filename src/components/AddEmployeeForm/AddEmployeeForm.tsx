import React, { ReactElement } from 'react';
import './addEmployeeForm.css';
import { IEmployeeDTO } from '../../../dto/EmployeeDTO';

interface IAddEmployeeFormProps {
  employee: IEmployeeDTO;
  setEmployee: any;
  addEmployee: any;
}

export const AddEmployeeForm: React.FC<IAddEmployeeFormProps> = ({
  employee,
  addEmployee,
  setEmployee,
}): ReactElement => {
  const handleChange = (e: any): void => {
    switch (e.target.name) {
      case 'name':
        setEmployee((prevState: IEmployeeDTO) => {
          return {
            ...prevState,
            name: e.target.value,
          };
        });
        break;
      case 'surname':
        setEmployee((prevState: IEmployeeDTO) => {
          return {
            ...prevState,
            surname: e.target.value,
          };
        });
        break;
      case 'email':
        setEmployee((prevState: IEmployeeDTO) => {
          return {
            ...prevState,
            email: e.target.value,
          };
        });
        break;
      case 'position':
        setEmployee((prevState: IEmployeeDTO) => {
          return {
            ...prevState,
            position: e.target.value,
          };
        });
        break;
    }
  };

  return (
    <form className={'form__container'} onSubmit={(e) => addEmployee(e)}>
      <div>
        <input
          type='text'
          placeholder={'Type name...'}
          name={'name'}
          value={employee.name}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder={'Type surname...'}
          name={'surname'}
          value={employee.surname}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder={'Type email'}
          name={'email'}
          value={employee.email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className='form-position__container'>
        <input
          type='text'
          placeholder={'Type position'}
          name={'position'}
          value={employee.position}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <input
        type={'submit'}
        className={'form-submit__button'}
        onClick={(e) => addEmployee(e)}
      />
    </form>
  );
};
