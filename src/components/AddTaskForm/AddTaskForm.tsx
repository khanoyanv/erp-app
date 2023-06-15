import React, { ReactElement } from 'react';
import './addTaskForm.css';
import { ITaskDTO } from '../../../dto/TaskDTO';

interface IAddTaskFormProps {
  task: ITaskDTO;
  setTask: any;
  addTask: any;
}

export const AddTaskForm: React.FC<IAddTaskFormProps> = ({
  task,
  addTask,
  setTask,
}): ReactElement => {
  const handleChange = (e: any): void => {
    switch (e.target.name) {
      case 'name':
        setTask((prevState: ITaskDTO) => {
          return {
            ...prevState,
            name: e.target.value,
          };
        });
        break;
      case 'description':
        setTask((prevState: ITaskDTO) => {
          return {
            ...prevState,
            description: e.target.value,
          };
        });
        break;
      case 'employeeId':
        setTask((prevState: ITaskDTO) => {
          return {
            ...prevState,
            employeeId: e.target.value,
          };
        });
      case 'startDate':
        setTask((prevState: ITaskDTO) => {
          return {
            ...prevState,
            startDate: e.target.value,
          };
        });
        break;
      case 'endDate':
        setTask((prevState: ITaskDTO) => {
          return {
            ...prevState,
            endDate: e.target.value,
          };
        });
        break;
    }
  };

  return (
    <form className={'form__container'} onSubmit={(e) => addTask(e)}>
      <input
        type='text'
        placeholder={'Type name...'}
        name={'name'}
        value={task.name}
        onChange={(e) => handleChange(e)}
      />
      <input
        type='text'
        placeholder={'Type description...'}
        name={'description'}
        value={task.description}
        onChange={(e) => handleChange(e)}
      />
      <input
        type={'text'}
        placeholder={'Type employee id...'}
        name={'employeeId'}
        value={task.employeeId}
        onChange={(e) => handleChange(e)}
      />
      <input
        type={'date'}
        name={'startDate'}
        value={task.startDate}
        onChange={(e) => handleChange(e)}
      />
      <div className='form-position__container'>
        <input
          type={'date'}
          name={'endDate'}
          value={task.endDate}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <input
        type={'submit'}
        className={'form-submit__button'}
        onClick={(e) => addTask(e)}
      />
    </form>
  );
};
