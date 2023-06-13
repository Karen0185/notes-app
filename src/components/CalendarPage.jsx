import { useState } from 'react';
import '../assets/styles/CalendarPage.css'
import moment from 'moment/moment';

const CalendarPage = () => {

    const [today, setToday] = useState(moment())

    const startDay = moment().startOf('month').startOf('week')
    const endDay = moment().endOf('month').endOf('week')

    const calendar = [];
    const day = startDay.clone();

    const isWeekend = true;
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

    while(!day.isAfter(endDay)) {
        calendar.push(day.clone())
        day.add(1,'day')
    }

    // console.log(moment().format("DD-MM-YYYY"));
    return(
        <div className="CalendarPage">
            <div className="wrapper">
                <h1 className="today">{months[moment().month()]} <span>{moment().format("YYYY")}</span></h1>
                    <div className="days">
                        <p>Пн</p>
                        <p>Вт</p>
                        <p>Ср</p>
                        <p>Чт</p>
                        <p>Пт</p>
                        <p>Пт</p>
                        <p>Вс</p>
                    </div>
                <div className="calendar">
                    {
                        calendar && calendar.map((item, idx) =>
                        <div key={idx}  className={`calendar-item ${item.format("DD-MM-YYYY") == moment().format("DD-MM-YYYY") ? 'today' : ''} ${item.day() === 6 ||item.day() === 5  ? 'isWeekend' : ''} ${item.month() !== moment().month() ? 'selected-month' : ''}`}>{item.format("D")}</div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default CalendarPage;