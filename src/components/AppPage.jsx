import '../assets/styles/AppPage.css'
import CalendarPage from './CalendarPage';

const AppPage = () => {
    return(
        <div className="AppPage">
            <div className="top_bar">
                <div className="top_bar-left">
                    <div className="user_name">Karen0198</div>
                    <button className='add_note'>Добавить</button>
                    <button className="view_all">Посмотреть все</button>
                </div>
                <div className="top_bar-right">
                    <input type="text" placeholder="Поиск" className="search-notes" />
                    <button>Выйти</button>
                </div>
            </div>
            <CalendarPage />
        </div>
    );
}

export default AppPage;