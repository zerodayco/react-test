import clsx from 'clsx';
import s from './CalendarItem.module.css';

const CalendarItem = ({ day, month, year, activeDate, handleActiveDay }) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const isCurrentDay =
    currentDate.getMonth() === month &&
    currentDate.getFullYear() === year &&
    currentDay === day;

  const isActiveDayInCurrentMonth = () => {
    return (
      activeDate?.getDate() === day &&
      activeDate?.getMonth() === month &&
      activeDate?.getFullYear() === year
    );
  };

  return (
    <>
      <button
        onClick={() => handleActiveDay(day)}
        className={clsx(
          s.calendarDay,
          isActiveDayInCurrentMonth(day) && s.isActive,
          isCurrentDay && day === currentDay && s.isToday //чи поточний день належить поточному місяцю
        )}
      >
        {day}
      </button>
      <p className={s.informQuantity}>100%</p>
    </>
  );
};

export default CalendarItem;
