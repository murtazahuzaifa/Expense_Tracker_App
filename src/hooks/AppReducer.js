// import React from 'react';

const AppReducer = (state, action) => {
    switch (action.type){
        case "AddTransaction":
            return  [...state, action.payload]
            
        case "DeleteTransaction":
            return state.filter((transaction,index)=>(index !== action.payload))

        default:
            return state;
    }
}

export default AppReducer;