import React from 'react';
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux';

const Chart = () => {
    const {rateArray, currency_id } = useSelector(state => state);

    const curArray = {
        145: 'USD', 
        292: 'EUR',
        298: 'RUR'
    }

    return (
        <Line
            data={{
                labels: rateArray.map(item => item.Date.substring(0, 10)),
                datasets: [{
                    label: curArray[currency_id],
                    data: rateArray.map(item => item.Cur_OfficialRate),
                    borderColor: [
                        'rgba(245, 99, 182, 1)'
                    ],
                    borderWidth: 1
                }]
            }}
            options={{
                responsive:true
            }}  
        />
    )
}

export default Chart;
