import axios from 'axios';

export function fetchData(cur_id, startDate, endDate) {
    return function (dispatch) {
        return axios.get(`https://cors-anywhere.herokuapp.com/http://www.nbrb.by/API/ExRates/Rates/Dynamics/${cur_id}?startDate=${startDate}&endDate=${endDate} `, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
                "Access-Control-Allow-Credentials" : true
            }
        })
            .then(({data}) => {
                dispatch({type: 'SET_DATA', payload: {data, cur_id}});
            });
    }
}