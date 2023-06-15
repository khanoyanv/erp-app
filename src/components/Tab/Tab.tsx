import React, { ReactElement } from 'react'
import './tab.css'

interface ITabProps {
  name: string;
}

export const Tab: React.FC<ITabProps> = ({name}):ReactElement =>  {
  return (
    <div className="tab">
      {name}
    </div>
  )
}

