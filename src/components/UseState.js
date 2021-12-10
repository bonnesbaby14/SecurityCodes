import { useContext, useEffect, useState } from "react";

const SECURITY_CODE = "palabra";

const UseState = ({ name }) => {
    const [state, setState] = useState({
        error: false,
        loadding: false,
        value: "",
        delete:false,
        confirmed: false,
    });



    useEffect(() => {
        if (state.loadding) {


            setTimeout(() => {
                console.log("Haciendo la validacio");
                if (state.value === SECURITY_CODE) {
                    setState({
                        ...state,
                        loadding: false,
                        error: false,
                        confirmed:true,

                    })
                } else {
                    setState({
                        ...state,
                        loadding: false,
                        error: true
                    })
                }

                console.log("Se termino la validacion");
            }, 3000);
        }


    }, [state.loadding]);

    if(!state.delete && !state.confirmed){
        return <>
        <h2>Eliminar {name}</h2>
        <p>Por favor escribe el codigo de seguridad      </p>
        <input value={state.value} onChange={
            (event) => {
                setState({
                    ...state,
                    value: event.target.value
                });
            }
        } placeholde="codigo de seguridad" />
        <button onClick={() => {

            setState({
                ...state,
                loadding: true,

            })
        }}>Comprobar</button>


        {(state.error && !state.loadding) && <p>El codigo es incorrecto</p>}
        {state.loadding && <p>Cargando </p>}

    </>

    }else if(!state.delete && state.confirmed){
        return <>
        <p>¿Seguro que quieres elimina?</p>
        <button onClick={()=>{
            setState({
                ...state,
                delete:true,
            })
        }}>Aceptar</button>
            <button onClick={()=>{
            setState({
                ...state,
                confirmed:false,
                value:"",
            })
        }}>Cancelar </button>
        </>
    }else{
        return <>
        <p>Eliminado con exito!!</p>
        <button onClick={()=>{
            setState({
                ...state,
                confirmed:false,
                delete:false,
                value:"",
            })
        }}>Reiniciar </button>
        </>
    }

}


export default UseState;