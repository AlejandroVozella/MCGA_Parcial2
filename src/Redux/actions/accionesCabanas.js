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

const URL = "https://app-parcialmcga.herokuapp.com/cabanas";



// Seccion GET
const getCabanas = () => ({
    type: GET_CABANA, 
});

const getCabanas_exito = (list) => ({
    type: GET_CABANA_EXITO,                     // tipo de accion
    payload: list, 
});

const getCabanas_fallo = (error) => ({
    type: GET_CABANA_FALLO,
    payload: error, 
});

export const getCabanasAsync = () => (dispatch) =>{
    dispatch(getCabanas());
    return fetch(`${URL}`, { method: 'GET' })
    .then((data) => data.json())
    .then((json) => {
        dispatch(getCabanas_exito(json));
    })
    .catch((error) => {
        dispatch(getCabanas_fallo(error));
    })
};



// Seccion PUT
const editCabanas = () => ({
    type: EDIT_CABANA, 
});

const editCabanas_exito = (content) => ({
    type: EDIT_CABANA_EXITO,                     
    payload: list, 
});

const editCabanas_fallo = (error) => ({
    type: EDIT_CABANA_FALLO,
    payload: error, 
});

export const editCabanasAsync = (content) => (dispatch) =>{
    dispatch(editCabanas());
    return fetch(`${URL}/${content._id}`, { 
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(content),
     })
    .then((data) => data.json())
    .then((json) => {
        if (!json.code) {
            dispatch(editCabanas_exito(content));
        } else {
            dispatch(editCabanas_fallo(json));
        }        
    })
    .catch((error) => {
        dispatch(editCabanas_fallo(error));
    })
};


// Seccion DELETE
const deleteCabanas = () => ({
    type: DELETE_CABANA, 
});

const deleteCabanas_exito = (payload) => ({
    type: DELETE_CABANA_EXITO,                     
    payload, 
});

const deleteCabanas_fallo = (error) => ({
    type: DELETE_CABANA_FALLO,
    //payload: error, 
});

export const deleteCabanasAsync = (id) => (dispatch) =>{
    dispatch(deleteCabanas());
    return fetch(`${URL}/${id}`, { method: 'DELETE' })
        .then(function (data) {
            console.log(data);
            return data.json;
     })
    .then(() => {
        dispatch(deleteCabanas_exito(id));
    })
    .catch(() => {
        dispatch(deleteCabanas_fallo());
    });
};


// Seccion POST

const addCabanas = () => ({
    type: ADD_CABANA, 
});

const addCabanas_exito = (content) => ({
    type: ADD_CABANA_EXITO,                     
    payload: list, 
});

const addCabanas_fallo = (error) => ({
    type: ADD_CABANA_FALLO,
    payload: error, 
});

export const addCabanasAsync = (content) => (dispatch) =>{
    dispatch(addCabanas());
    const body = JSON.stringify(content);
    return fetch(`${URL}/`, { 
        method: 'POST',
        body: body,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(content),
     })
    .then((data) => data.json())
    .then((json) => {
        if (!json.code) {
            dispatch(addCabanas_exito(json));
        } else {
            dispatch(addCabanas_fallo(json));
        }        
    })
    .catch((error) => {
        dispatch(addCabanas_fallo(error));
    })
};
