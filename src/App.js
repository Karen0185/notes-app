import moment from 'moment';


moment.updateLocale('en',{week:{dow:1}});
const startDay = moment().startOf('month').startOf('week');
const endDay = moment().endOf('month').endOf('week');

const calendar = [];
const day = startDay.clone();

while (!day.isAfter(endDay)) {
  calendar.push(day.clone());
  day.add(1, 'd');
}
console.log(calendar);

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;