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
      <label className='list-item__name'>{task.name}</label>
      <label className='list-item__name'>{task.description}</label>
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
