import React, { useState } from 'react';
import './mainPage.css';
import { Tab } from '../Tab/Tab';

export const MainPage = () => {
  return (
    <div className={'mainPage__container'}>
      <div className='tabs__container'>
        <Tab name={'Employees'} />
        <Tab name={'Tasks'} />
      </div>
    </div>
  );
};
