import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Calendar from './components/Calendar';
import Chart from './components/Chart';
import { fetchData } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const {startDate, endDate } = useSelector(state => state);
  const [currency_id, setCurrencyId] = useState(145);

  useEffect(() => {
    dispatch(fetchData(currency_id, startDate, endDate))
  }, [startDate, endDate, dispatch, currency_id]);

  return (
    <div className="App">
       <select value={currency_id} onChange={e => setCurrencyId(e.target.value)}>
        <option value="145">USD</option>
        <option value="292">EUR</option>
        <option value="298">RUR</option>
      </select>
      <Chart/>
      <Calendar/>
    </div>
  );
}

export default App;
