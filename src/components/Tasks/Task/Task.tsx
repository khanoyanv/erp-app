import React, { ReactElement } from 'react';
import { ITaskDTO } from '../../../../dto/TaskDTO';
import './task.css';

interface ITaskProps {
  task: ITaskDTO;
  removeTask: any;
}

export const Task: React.FC<ITaskProps> = ({
  task,
  removeTask,
}): ReactElement => {
  return (
    <div className='list-item'>
      <label>{task.name}</label>
      <label>{task.description}</label>
      <input
        type={'date'}
        className={'list-item__startDate'}
        disabled={true}
        value={task.startDate}
      />
      <input
        type={'date'}
        className={'list-item__endDate'}
        disabled={true}
        value={task.endDate}
      />
      <div
        className='list-item__delete-icon'
        title={'remove task'}
        id={task.id.toString()}
        onClick={(e: any) => removeTask(e.target.id)}
      >
        x
      </div>
    </div>
  );
};
