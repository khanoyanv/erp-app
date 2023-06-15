import React, { ReactElement, useState } from 'react';
import { ITaskDTO } from '../../../dto/TaskDTO';
import { Task } from './Task/Task';
import './tasks.css';
import { useSelector } from 'react-redux';
import { selectFilteredTasks } from '../../../store/tasksSlice';
import { SearchBar } from './SearchBar/SearchBar';

interface ITasksProps {
  removeTask: any;
  tasks: ITaskDTO[];
}

export const Tasks: React.FC<ITasksProps> = ({
  removeTask,
  tasks,
}): ReactElement => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredTasks: ITaskDTO[] = useSelector(
    selectFilteredTasks(searchTerm)
  );

  const handleSearchbarChange = (searchterm: string): void => {
    setSearchTerm(searchterm);
    console.log(filteredTasks);
  };

  return (
    <div className='tasks__list'>
      <SearchBar
        handleSearchbarChange={handleSearchbarChange}
        searchTerm={searchTerm}
      />
      {filteredTasks ? (
        filteredTasks?.map(
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
