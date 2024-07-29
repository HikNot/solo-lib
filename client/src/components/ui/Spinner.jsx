import React from 'react';
import { TailSpin } from 'react-loader-spinner';

export default function Spinner() {
  return (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="#A8A8A8"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />,
  );
}
