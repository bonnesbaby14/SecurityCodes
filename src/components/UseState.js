import { useContext, useEffect, useState } from "react";

const SECURITY_CODE = "palabra";

const UseState = ({ name }) => {
    const [state, setState] = useState({
        error: false,
        loadding: false,
        value: "",
        delete: false,
        confirmed: false,
    });

    const onConfirm = () => {
        setState({
            ...state,
            loadding: false,
            error: false,
            confirmed: true,

        })
    }
    const onError = () => {
        setState({
            ...state,
            loadding: false,
            error: true
        })
    }
    const onWrite = (event) => {
        setState({
            ...state,
            value: event.target.value
        });
    }
    const onCheck=() => {

        setState({
            ...state,
            loadding: true,

        })
    }
const onDelete =() => {
    setState({
        ...state,
        delete: true,
    })
}
const onReset= () => {
    setState({
        ...state,
        confirmed: false,
        delete: false,
        value: "",
    })
}
    useEffect(() => {
        if (state.loadding) {


            setTimeout(() => {
                console.log("Haciendo la validacio");
                if (state.value === SECURITY_CODE) {
                    onConfirm();
                } else {
                    onError();
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
                onWrite(event)
            }
            } placeholde="codigo de seguridad" />
            <button onClick={onCheck}>Comprobar</button>


            {(state.error && !state.loadding) && <p>El codigo es incorrecto</p>}
            {state.loadding && <p>Cargando </p>}

        </>

    } else if (!state.delete && state.confirmed) {
        return <>
            <p>¿Seguro que quieres elimina?</p>
            <button onClick={onDelete}>Aceptar</button>
            <button onClick={onReset}>Cancelar </button>
        </>
    } else {
        return <>
            <p>Eliminado con exito!!</p>
            <button onClick={onReset}>Reiniciar </button>
        </>
    }

}


export default UseState;