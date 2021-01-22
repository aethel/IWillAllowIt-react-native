import React, { useState, createContext, ReactNode } from 'react';
import { TotalAmountContainer } from "./TotalAmountContainer"
import { DailyAllowancesContainer } from './DailyAllowancesContainer';

const Store: React.FC = (props) => {
    console.debug('This is global')

    return (
        <TotalAmountContainer.Provider>
            <DailyAllowancesContainer.Provider>
            {props.children}
            </DailyAllowancesContainer.Provider>
        </TotalAmountContainer.Provider>
    )
}

export default React.memo(Store)