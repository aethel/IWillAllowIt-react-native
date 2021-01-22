// allowance from today until end of month:
// split month into before today and from today
// sum allowances from beginning of month until today 
// divide by days from today until end of month

import { DayAllowance } from "../components/Listing/Listing";
import { useState, useMemo } from "react";

const dayOfMonth = new Date().getDate();
const test = [
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 1,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 2,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 3,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 4,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 5,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 6,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 7,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 8,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 9,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 10,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 11,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 12,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 13,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 14,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 15,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 16,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 17,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 18,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 19,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 20,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 21,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 22,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 23,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 24,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 25,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 26,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 27,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 28,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 29,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 30,
    },
    {
        "additions": [],
        "allowance": 10,
        "deductions": [],
        "id": 31,
    },
]
export type useAllowancesType = {
    DeductFromAllowance: (arg1:number, arg2:number) => void;
}

const useAllowances = () => {


    const DeductFromAllowance = (array:any[], itemIndex:number, deduction:number) => {
        const oldAllowanceObj = array?.find(item => item.id === itemIndex);
        const allowance = oldAllowanceObj && oldAllowanceObj.allowance as number - deduction; 
        const deductions = oldAllowanceObj && [...oldAllowanceObj.deductions, deduction]
        const newAllowanceObj = oldAllowanceObj && {...oldAllowanceObj, allowance, deductions}
        const newAllowances = array!.map((item:any,index:number) => {
            if(itemIndex === index) {
                return newAllowanceObj;
            }
            return item;
        })
        console.debug(newAllowances);
        return newAllowances;
    }
   

    const RecalculateAllowances = (data: DayAllowance[]):DayAllowance[] => {
        // const dayInMonthPlusOne = new Date(new Date.getTime() + 86400000).getDate();
        // -1 to get dates before and excluding today
        // -1 to get dates before and excluding today
        const daysAfterToday = data.splice(dayOfMonth - 1);
        const daysBeforeToday = data.splice(0, dayOfMonth - 1);
        const sumOfPreviousAllowances = daysBeforeToday
            .map((item) => {
                return item.allowance || 0;
            })
            .reduce((acc, curr) => (acc as number) + (curr as number));
        const sumOfFutureAllowances = daysAfterToday
            .map((item) => {
                return item.allowance || 0;
            })
            .reduce((acc, curr) => (acc as number) + (curr as number));
        const updatedAllowancesFromToday = daysAfterToday.map((item) => {
            const allowance =
                ((sumOfPreviousAllowances as number)+ (sumOfFutureAllowances as number)) /
                daysAfterToday.length;
            return { ...item, allowance };
        });
        const newBreakdown = [...daysBeforeToday, ...updatedAllowancesFromToday];
        console.log('sumOfPreviousAllowances', sumOfPreviousAllowances);
        console.log('sumOfFutureAllowances', sumOfFutureAllowances)
        console.log('breakdown', newBreakdown)
        return newBreakdown;
    }

    return [RecalculateAllowances, DeductFromAllowance] as const;
}

export default useAllowances;