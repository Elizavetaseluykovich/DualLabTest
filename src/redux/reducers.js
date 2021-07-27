const initialState = {
    currency_id: '',
    rateArray: [],
    startDate: '',
    endDate: '',
}

const CurrensyReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_DATA': 
            return {
                ...state, 
                rateArray: [...action.payload.data],
                currency_id: action.payload.cur_id
            }
        case 'SET_DATE': 
            return {
                ...state, 
                startDate: action.payload.startDate,
                endDate: action.payload.endDate
            }
        default: 
            return {
                ...state
            }
    }
}

export default CurrensyReducer;