import { useContext, useEffect, useReducer } from "react";
const SECURITY_CODE = "palabra";

const UseReducer = ({ name }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state);
    useEffect(() => {
        if (state.loadding) {


            setTimeout(() => {
                console.log("Haciendo la validacio");
                if (state.value === SECURITY_CODE) {
                    console.log("1");
                    dispatch({
                        type: "CONFIRM"
                    })
                } else {
                    console.log("2");
                    dispatch({
                        type: "ERROR"
                    })
                }

                console.log("Se termino la validacion");
            }, 3000);
        }


    }, [state.loadding]);


    if (!state.delete && !state.confirmed) {
        return <>
            <h2>Eliminar {name}</h2>
            <p>Por favor escribe el codigo de seguridad      </p>
            <input value={state.value} onChange={(event) => {
                    console.log("3");
                dispatch({
                    type: actionTypes.write,
                    payload: event.target.value
                })
            }
            }
                placeholde="codigo de seguridad" />
            <button onClick={()=>{
                dispatch({
                    type: actionTypes.check
                })
            }
                }>Comprobar</button>


            {(state.error && !state.loadding) && <p>El codigo es incorrecto</p>}
            {state.loadding && <p>Cargando </p>}

        </>

    } else if (!state.delete && state.confirmed) {
        return <>
            <p>¿Seguro que quieres elimina?</p>
            <button onClick={()=>{
                dispatch({
                    type: actionTypes.delete
                })
            }}>Aceptar</button>
            <button onClick={()=>{
                dispatch({
                    type: actionTypes.reset
                })
            }}>Cancelar </button>
        </>
    } else {
        return <>
            <p>Eliminado con exito!!</p>
            <button onClick={()=>{
                dispatch({
                    type: actionTypes.reset
                })
            }}>Reiniciar </button>
        </>
    }

}



const initialState = {
    error: false,
    loadding: false,
    value: "",
    delete: false,
    confirmed: false,
}
const actionTypes={
    confirm:"CONFIRM",
    error:"ERROR",
    check:"CHECK",
    write:"WRITE",
    delete:"DELETE",
    reset:"RESET"
}

const reducerObject = (state, payload) => ({
    "ERROR": {
        ...state,
        error: true,
        loadding: false,
    },
    "CHECK": {
        ...state,
        loadding: true
    },
    "CONFIRM": {
        ...state,
        loadding: false,
        error: false,
        confirmed: true,
    },
    "WRITE": {

        ...state,
        value: payload
    },
    "DELETE":
    {
        ...state,
        delete: true,
    },
    "RESET": {
        ...state,
        confirmed: false,
        delete: false,
        value: "",
    }

});

const reducer = (state, action) => {
    if (reducerObject(state, action.payload)[action.type]) {
        return reducerObject(state, action.payload)[action.type];

    } else {
        return state;
    }
}
export default UseReducer;