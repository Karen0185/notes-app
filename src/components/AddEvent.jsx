import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import DatetimeInput from './DatetimeInput'
import moment from 'moment';
import '../assets/styles/AddEvent.css'

const AddEvent = () => {

    const [newHeader, setNewHeader] = useState('');
    const [newText, setNewText] = useState('');
    const [date, setDate] = useState(moment().format('DD.MM.YYYY'));
    const [time, setTime] = useState(moment().add(1, 'minute').format('HH:mm'));

    const dispatch = useDispatch()
    const events = useSelector((store) => {
        return store.events
    })

    const colors = ['#FF784E', '#4E7FFF', '#FF4EED', '#FF4E4E', '#FF4EB8' ]

    const [now, setNow] = useState(moment().add(1, 'minute'));


    return(
        <div className="AddEvent close">
            <div className="add_event-bg"></div>
            <div className="container">
                <div className="add_event-top">
                    <button className="back" onClick={() => {
                        document.querySelectorAll('.calendar-item').forEach((item) => {
                            item.classList.remove("calendar_item-popup")
                          })
                          document.querySelector('.AddEvent').classList.remove('close')
                          document.querySelector('.popup').classList.remove('show')
                          document.querySelector('.blur').style.opacity = 0;
                          document.querySelector('.blur').style.transform = 'scale(.9)';
                          document.querySelector('.RightBar').style.zIndex = 4;
                        document.querySelector('.AddEvent').classList.add('close') 
                    }}><IoIosArrowBack/> Назад</button>
                    <button className="add" onClick={() => {
                        dispatch({
                            type: 'ADD-NEW-EVENT',
                            payload: {
                                header: newHeader,
                                text: newText,
                                date: date,
                                time: time,
                                bgColor: colors[Math.floor(Math.random() * colors.length) + 1]
                            }
                        })
                        console.log(events)
                        document.querySelector('.AddEvent').classList.add('close') 
                    }}>Добавить</button>
                    <div className="date">
                        <DatetimeInput setDate={setDate} setTime={setTime} value={now}  onChange={setNow} />
                    </div>
                </div>
                    <div className="header"><input type="text" value={newHeader} placeholder='Заголовок' 
                        onInput={(e) => {
                            setNewHeader(e.target.value)
                        }}
                    /></div>
                    <div className="text"><textarea name="" id="" cols="30" rows="10" value={newText} placeholder='О чем напомнить ?'
                        onInput={(e) => {
                            setNewText(e.target.value)
                        }}
                    ></textarea></div>
            </div>
        </div>
    );
}

export default AddEvent;