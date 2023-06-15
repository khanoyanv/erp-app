import React, { ReactElement } from 'react';
import './searchBar.css';

interface ISearchBarProps {
  handleSearchbarChange: (searchterm: string) => void;
  searchTerm: string;
}

export const SearchBar: React.FC<ISearchBarProps> = ({
  handleSearchbarChange,
  searchTerm,
}): ReactElement => {
  return (
    <div className={'searchBar__container'}>
      <input
        type='text'
        placeholder={'Search for tasks...'}
        className={'searchBar'}
        value={searchTerm}
        onChange={(e) => handleSearchbarChange(e.target.value)}
      />
    </div>
  );
};
