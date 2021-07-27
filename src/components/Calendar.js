import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import { useDispatch } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
    const dateBefore = new Date(Date.now()-168*3600000);

    function makeDateString(date) {
        let newDate = new Date(date);
        return `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`
    }

    const [startDate, setStartDate] = useState(dateBefore);
    const [endDate, setEndDate] = useState(Date.now());
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    
    useEffect(() => {
        if (startDate > endDate || endDate > Date.now()) setError(true);
        else {
            setError(false);
            dispatch({type: "SET_DATE", payload: {
                startDate: makeDateString(startDate), 
                endDate: makeDateString(endDate)
            }})
        }
    }, [startDate, endDate, dispatch])

    return (
        <>
            <article>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
            </article>
            {error ? <p className="error">Choose correct date</p> : ""}
        </>
        
    )
}

export default Calendar;
