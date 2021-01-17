import React, { useState, createContext, ReactNode } from 'react';
import { TotalAmountContainer } from "./TotalAmountContainer"

const Store: React.FC = (props) => {
    console.debug('This is global')

    return (
        <TotalAmountContainer.Provider>
            {props.children}
        </TotalAmountContainer.Provider>
    )
}

export default React.memo(Store)