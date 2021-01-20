
const useDays = () => {
    const date = new Date();
    const dayOfMonth = date.getDate();
    const dayOfMonthPlusOne = new Date(date.getTime() + 86400000).getDate();
    const NumberOfDaysInMonth = ():number => {
        const m = date.getMonth();
        const y = date.getFullYear();
        return new Date(y, m + 1, 0).getDate();
      };

      const DaysFromToday = (array:any[]) => array.splice(dayOfMonth);
      const DaysUntilToday = (array:any[]) => array.splice(0, dayOfMonth);

  return [dayOfMonth, dayOfMonthPlusOne,  NumberOfDaysInMonth, DaysUntilToday, DaysFromToday] as const;}

export default useDays;