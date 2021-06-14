import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';


import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// all the students from the DB
const studentList = (state = [], action) => {
    if(action.type === 'SET_STUDENT_LIST') {
        return action.payload;
    }

    return state;
}

// hold only the single student object being edited
const editStudent = (state  = {id : null, github_name : ''}, action) => {
    switch (action.type){
        case 'SET_EDIT_STUDENT':
            //action.payload her is the DB row/object being edited
            return action.payload
            case 'EDIT_ONCHANGE':
                //update the field, or whatever payload sent 
                //keep whats not being changed the same 
                //change the property to the value
                return {
                    ...state,
                    //compute the value of action.payload.property
                    //make that the key
                    [action.payload.property] : action.payload.value 
                }
                case 'EDIT_CLEAR':
                    return{}
    }
    return state;
}

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        studentList,
        editStudent
    }),
    applyMiddleware(logger),
);


// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

