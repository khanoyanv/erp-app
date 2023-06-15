import React, { ReactElement } from 'react';
import './addForm.css';
import { IEmployeeDTO } from '../../../dto/EmployeeDTO';

interface IAddFromProps {
  setEmployee: any;
  addEmployee: any;
}

export const AddForm: React.FC<IAddFromProps> = ({
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
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder={'Type surname...'}
          name={'surname'}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder={'Type email'}
          name={'email'}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className='form-position__container'>
        <input
          type='text'
          placeholder={'Type position'}
          name={'position'}
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
