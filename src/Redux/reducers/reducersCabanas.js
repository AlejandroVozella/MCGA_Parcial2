import { 
    GET_CABANA, 
    GET_CABANA_EXITO, 
    GET_CABANA_FALLO,
    EDIT_CABANA,
    EDIT_CABANA_EXITO,
    EDIT_CABANA_FALLO,
    ADD_CABANA,
    ADD_CABANA_EXITO,
    ADD_CABANA_FALLO,
    DELETE_CABANA,
    DELETE_CABANA_EXITO,
    DELETE_CABANA_FALLO } from '../constants/cabanasConstants';


const initialState = {
    isLoading: false,
    list: [],
    error: false
}

const reducersCabanas = (state = initialState, action) => {
    switch (action.type) {
        case GET_CABANA: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_CABANA_EXITO: {
            return {
                ...state,
                isLoading: false,
                list: action.payload
            };
        }
        case GET_CABANA_FALLO: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }

        case ADD_CABANA: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case ADD_CABANA_EXITO: {
            return {
                ...state,
                isLoading: false,
                list: [
                    ...state.list, 
                    action.payload
                ]
            };
        }
        case ADD_CABANA_FALLO: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }

        case DELETE_CABANA: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case DELETE_CABANA_EXITO: {
            return {
                ...state,
                isLoading: false,
                list: [
                    ...state.list.filter(cabana => cabana._id !== action.payload._id) 
                ]
            };
        }
        case DELETE_CABANA_FALLO: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }

        case EDIT_CABANA: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case EDIT_CABANA_EXITO: {
            return {
                ...state,
                isLoading: false,
                list: [
                    ...state.list.map(cabana => {
                        if (cabana._id === action.payload._id) {
                            cabana = action.payload;
                        } return cabana;
                    })
                ]
            };
        }
        case EDIT_CABANA_FALLO: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

export default reducersCabanas;