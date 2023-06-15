import React, { ReactElement } from 'react';
import { ITaskDTO } from '../../../dto/TaskDTO';
import { Task } from './Task/Task';
import './tasks.css';

interface ITasksProps {
  removeTask: any;
  tasks: ITaskDTO[];
}

export const Tasks: React.FC<ITasksProps> = ({
  removeTask,
  tasks,
}): ReactElement => {
  return (
    <div className='tasks__list'>
      {tasks ? (
        tasks?.map(
          (task: ITaskDTO) =>
            task.name &&
            task.employeeId && (
              <Task key={task.id} task={task} removeTask={removeTask} />
            )
        )
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
