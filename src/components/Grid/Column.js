import React from 'react';

export default function Column({ size, children }) {
  return (
    <div className={size.split(' ').map(el => `col-${el}`).join(' ')}>
      {children}
    </div>
  );
}
