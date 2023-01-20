//Store file where State lives



import{createStore,applyMiddleware} from 'redux';

import rootReducer from './Reducer/RootReducer';

import thunk from 'redux-thunk'

//firstClass Functiion of js..mean function can return another function

//predefind function from redux file

function ConfigureStore()

{



return createStore(

    rootReducer,

    applyMiddleware(thunk)

 

);



}

export default ConfigureStore;