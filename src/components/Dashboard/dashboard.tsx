import React, { ReactNode } from 'react';

import Cardbank from '../CardBank/index.tsx';
import Graphic from '../graphicTransact/graphic';
import GridCard from '../gridCard/gridCard';

export default function dashboard() {
  return (
      <>
        <Cardbank/>
        <GridCard/>
      </>
  )
}
