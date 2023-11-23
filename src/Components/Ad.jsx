import React from 'react';
import imageSrc from '../imgs/Untitled.svg';

export default function Ad() {
  return (
    <div className='untitled-container'>
      <img src={imageSrc} alt='Untitled.svg' />
      <button>광고 제거</button>
    </div>
  );
}