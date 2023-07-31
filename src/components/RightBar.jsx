import { useSelector } from 'react-redux';
import '../assets/styles/RightBar.css'
import { useState } from 'react';
import moment from 'moment';

const RightBar = ({thisDayEvents, thisDay}) => {

    const [isUpcomingEvents, setIsUpcomingEvents] = useState(false);

    const allEvents = useSelector((state) => {
        return state.events
    })

    const upcomingEvents = [...Array(7)].map((_, index) => ({
        event: allEvents.filter((item) => item.date === moment().add(index, 'day').clone().format('DD.MM.YYYY'))
      }));

    const todayEvents = allEvents.filter((item) => item.date === moment().format('DD.MM.YYYY'));

    console.log(thisDayEvents)
    console.log(thisDay)
    
    return(
        <div className="RightBar">
            {
                thisDayEvents.length > 0  ? 
                <>
                <div className="buttons">
                        <button className={isUpcomingEvents ? 'todayEvents' : 'todayEvents active'} onClick={() => {setIsUpcomingEvents(!isUpcomingEvents)}}>Сегодняшние </button>
                        <button className={isUpcomingEvents ? 'upcomingEvents active' : 'upcomingEvents'} onClick={() => {setIsUpcomingEvents(!isUpcomingEvents)}}>Ближайшие</button>
                    </div>
                    <h1>События  {thisDay}</h1>
                    <div className='events'>
                        {
                            thisDayEvents ? 
                            thisDayEvents.map((item) =>
                                <div className='event' style={{ backgroundColor: item.bgColor }} key={item.id}>
                                    <div className="event-top">
                                    <h2 className="event-header">{item.header}</h2>
                                    <div className="date">{item.date}</div>
                                    </div>
                                    <p className="event-header">{item.text}</p>
                                </div>
                            )
                                
                            :''
                        }
                    </div>
                </>
                :
                <>
                    <div className="buttons">
                        <button className={isUpcomingEvents ? 'todayEvents' : 'todayEvents active'} onClick={() => {setIsUpcomingEvents(!isUpcomingEvents)}}>Сегодняшние </button>
                        <button className={isUpcomingEvents ? 'upcomingEvents active' : 'upcomingEvents'} onClick={() => {setIsUpcomingEvents(!isUpcomingEvents)}}>Ближайшие</button>
                    </div>
                    <h1>{isUpcomingEvents ? 'Ближайшие события' : 'Сегодняшние события'}</h1>
                    <div className='events'>
                        {
                            isUpcomingEvents ? 
                            upcomingEvents.map((item) =>
                            item.event.length > 1 ? (
                                item.event.map((item) => (
                                <div className='event' style={{ backgroundColor: item.bgColor }} key={item.id}>
                                    <div className="event-top">
                                    <h2 className="event-header">{item.header}</h2>
                                    <div className="date">{item.date}</div>
                                    </div>
                                    <p className="event-header">{item.text}</p>
                                </div>
                                ))
                            ) : (
                                ''
                            )
                                
                            ) : todayEvents.map((item) => 
                                <div className='event' style={{backgroundColor: item.bgColor}} key={item.id}>
                                    <div className="event-top">
                                        <h2 className="event-header">{item.header}</h2>
                                        <div className="date">{item.time}</div>
                                    </div>
                                    <p className="event-header">{item.text}</p>
                                </div>
                            ) 
                        }
                    </div>
                </>
            }
        </div>
    );
}

export default RightBar;