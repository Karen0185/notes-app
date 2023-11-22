import { useEffect, useState } from 'react';
import CalendarPage from './CalendarPage';
import RightBar from './RightBar';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';
import '../assets/styles/AppPage.css'

const AppPage = () => {

    const [thisDayEvents, setThisDayEvents] = useState([]);
    const [thisDay, setThisDay] = useState();
    const [currentEvent, setCurrentEvent] = useState();
    const [value, setValue] = useState('');
    const [searchResult, setSearchResult] = useState()

    const allEvents = useSelector((state) => {
        return state.events
    })

    const handleInput = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        const result = allEvents.filter((event) => event.date === value || event.header === value || event.text == value || event.time === value);
        setSearchResult(result)
        console.log(result);
    }, [value])


    return(
        <div className="AppPage">
            <div className="top_bar">
                <div className="top_bar-left">
                    <button className='add_note' onClick={() => {
                        document.querySelector('.AddEvent').classList.remove('close') 
                    }}>Добавить</button>
                    <button 
                    className="view_all"
                    onClick={() => {
                        document.querySelector('.ViewNotes').classList.remove('close')
                    }}
                    >Посмотреть все</button>
                </div>
                <div className="top_bar-right">
                    <input type="text" placeholder="Поиск" className="search-notes"  onInput={handleInput}/>
                    <button className='searchBtn'>Поиск</button>
                </div>
            </div>
            <div className="flex">
                <CalendarPage
                setThisDayEvents={setThisDayEvents}
                setThisDay={setThisDay}
                thisDay={thisDay}
                currentEvent={currentEvent}
                setCurrentEvent={setCurrentEvent}
                setSelectedDate={setThisDay}
                />
                <RightBar 
                thisDayEvents={thisDayEvents} 
                thisDay={thisDay}
                currentEvent={currentEvent}
                setCurrentEvent={setCurrentEvent}
                searchResult={searchResult}
                />
            </div>
        </div>
    );
}

export default AppPage;