import { useEffect, useState } from "react";



const UseState = ({ name }) => {

    const [error, setError] = useState(false);
    const [loadding, setLoading] = useState(false);

    useEffect(() => {
      if(loadding){
        console.log("Empezando el Effect");
        setTimeout(() => {
            console.log("Haciendo la validacio");
            setLoading(false);
            console.log("Se termino la validacion");
        }, 3000);
      }

       
    }, [loadding]);

    return <>
        <h2>Eliminar {name}</h2>
        <p>Por favor escribe el codigo de seguridad      </p>
        <input placeholde="codigo de seguridad" />
        <button onClick={()=>{

            setLoading(true);
        }}>Comprobar</button>
        {error && <p>El codigo es incorrecto</p>}
        {loadding && <p>Cargando </p>}

    </>


}


export default UseState;