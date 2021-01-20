

  const daysFromToday = manual ? arr.splice(dayInMonth) : arr.splice(dayInMonth);
    const daysUntilToday = arr.splice(0, dayInMonth);
    const sumOfPreviousAllowances = daysUntilToday
      .map((item) => {
        return item.allowance || 0;
      })
      .reduce((acc, curr) => acc + curr);
    const sumOfFutureAllowances = daysFromToday
      .map((item) => {
        return item.allowance || 0;
      })
      .reduce((acc, curr) => acc + curr);

    export const updateAllowancesFromTodays = (arr,dayInMonth, manual = false) => {
        const dayInMonthPlusOne = new Date(new Date.getTime() + 86400000).getDate()
        const daysFromToday = manual ? arr.splice(dayInMonthPlusOne) : arr.splice(dayInMonth);
        const daysUntilToday = arr.splice(0, dayInMonth);
        const sumOfPreviousAllowances = daysUntilToday
          .map((item) => {
            return item.allowance || 0;
          })
          .reduce((acc, curr) => acc + curr);
        const sumOfFutureAllowances = daysFromToday
          .map((item) => {
            return item.allowance || 0;
          })
          .reduce((acc, curr) => acc + curr);
        const updatedAllowancesFromToday = daysFromToday.map((item) => {
          const allowance =
            (sumOfPreviousAllowances + sumOfFutureAllowances) /
            daysFromToday.length;
          return { ...item, allowance };
        });
        const newBreakdown = [...daysUntilToday, ...updatedAllowancesFromToday];
        return newBreakdown;
      };
    
      export const getDaysInMonth = () => {
        const m = new Date().getMonth();
        const y = new Date().getFullYear();
        return new Date(y, m + 1, 0).getDate();
      };