import React from 'react';
import clsx from 'clsx';

function ButtonPagination({ children, className, ...props }) {
  return (
    <button 
      className={clsx(
        'flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-blue-800 hover:bg-gray-900',
        className
      )} 
      { ...props }
    >
      {children}
  </button>
  )
}

export default ButtonPagination