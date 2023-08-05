import { useState } from 'react';
import '../assets/styles/AppPage.css'
import CalendarPage from './CalendarPage';
import RightBar from './RightBar';
import moment from 'moment/moment';

const AppPage = () => {

    const [thisDayEvents, setThisDayEvents] = useState([]);
    const [thisDay, setThisDay] = useState()

    return(
        <div className="AppPage">
            <div className="top_bar">
                <div className="top_bar-left">
                    <div className="user_name">Karen0198</div>
                    <button className='add_note' onClick={() => {
                        document.querySelector('.AddEvent').classList.remove('close') 
                        
                    }}>Добавить</button>
                    <button className="view_all">Посмотреть все</button>
                </div>
                <div className="top_bar-right">
                    <input type="text" placeholder="Поиск" className="search-notes" />
                    <button>Выйти</button>
                </div>
            </div>
            <div className="flex">
                <CalendarPage
                setThisDayEvents={setThisDayEvents}
                setThisDay={setThisDay}
                thisDay={thisDay}
                />
                <RightBar thisDayEvents={thisDayEvents} thisDay={thisDay} />
            </div>
        </div>
    );
}

export default AppPage;