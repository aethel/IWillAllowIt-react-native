import React, { ReactNode, useState } from "react";
import { createContainer } from "unstated-next";
import { DayAllowance } from "../components/Listing/Listing";

export const useDailyAllowances = (init:any) => {
  const [dailyAllowances, setDailyAllowances] = useState<DayAllowance[]>();

  const SaveAllowances = (data: DayAllowance[]) => {
    setDailyAllowances(data);
  };
  return {
    dailyAllowances,
    SaveAllowances,
  };
};

export const DailyAllowancesContainer = createContainer(useDailyAllowances);
