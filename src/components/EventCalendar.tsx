import { Calendar } from 'antd';
import React, { FC } from 'react';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';
import { formatDate } from '../utils/date';
import { Dayjs } from 'dayjs';

interface EventCalendarProps {
  event: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {

  const cellRender = (value: Dayjs) => {
    const formatedDate = formatDate(value.toDate()); 
    const currentDayEvents = props.event.filter(event => event.date === formatedDate);

    return (
      <div>
        {currentDayEvents.map((event, index) => 
          <div key={index}>{event.description}</div>
          )}
      </div>
    );
  };

  return (
    <Calendar 
      cellRender={cellRender}
    />
  )
};

export default EventCalendar;