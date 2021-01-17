import React, { ReactNode, useState } from 'react';
import {createContainer} from 'unstated-next';

export const useTotalAmount = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  const handleTotalAmount = (value:number) => setTotalAmount(value);

  return {
    totalAmount,
    handleTotalAmount
  }
}

export const TotalAmountContainer = createContainer(useTotalAmount)