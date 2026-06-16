import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.scss';

import 'react-datepicker/dist/react-datepicker.css';
import { StartCalendarContext } from '../../../../shared/context/StartCalendarData';

function Calendar() {
  const { from, setFrom } = useContext(StartCalendarContext);
  const [to, setTo] = useState<Date | null>(null);

  return (
    <div className="date-filter">
      <span className="date-filter__title">Date</span>

      <div className="date-filter__container">
        <div className="date-filter__picker">
          <DatePicker
            selected={from}
            onChange={setFrom}
            selectsStart
            startDate={from}
            endDate={to}
            placeholderText="from"
            dateFormat="dd_MM_yyyy"
            showIcon
          />
          <button className="date-filter__clear" onClick={() => setFrom(null)}>
            ×
          </button>
        </div>

        <div className="date-filter__picker">
          <DatePicker
            selected={to}
            onChange={setTo}
            selectsEnd
            startDate={from}
            endDate={to}
            minDate={from}
            placeholderText="to"
            dateFormat="dd_MM_yyyy"
            showIcon
          />
          <button className="date-filter__clear" onClick={() => setTo(null)}>
            ×
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
