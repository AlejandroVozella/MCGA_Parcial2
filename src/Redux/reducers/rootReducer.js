import { combineReducers } from 'redux';                   
import reducersCabanas from './reducersCabanas';           // Reducers de Cabañas

const rootReducer = combineReducers ({                  // combina todos los reducers de la aplicacion

    cabanas: reducersCabanas
});

export default rootReducer;