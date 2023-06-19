// Import
import React, {useReducer, createContext, useEffect} from 'react';
import axios from 'axios';
// Initial state
const initialState = {
    user: null
}

// Create context
const LoginContext = createContext(initialState);

// Root reducer
const reducer = (state, action) => {
    switch(action.type){
        case "login" :   
            return {
                ...state,
                user: action.payload,
            };
        case "logout" : 
            return {...state, user: undefined};
        default:
            return state;
    }
}

// Providor
const LoginProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user?.token){
            dispatch({
                type: 'login',
                payload: user,
            });
        }
    }, []);


    return (
        <LoginContext.Provider value={{state, dispatch}}>
            {children}
        </LoginContext.Provider>
    )
}

// Export the context and the provider
export {LoginContext, LoginProvider};