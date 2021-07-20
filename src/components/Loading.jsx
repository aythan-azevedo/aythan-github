import React, { useContext } from 'react';
import FetchContext from '../context/FetchContext';
import './Loading.css';

function Loading() {
  const { data } = useContext(FetchContext);
  console.log(data);
  return (
    <div className="loading-body">
      <p>l</p>
      <p>o</p>
      <p>a</p>
      <p>d</p>
      <p>i</p>
      <p>n</p>
      <p>g</p>
    </div>
  );
}

export default Loading;
