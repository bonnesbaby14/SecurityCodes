
import React from "react";
class Loadding extends React.Component{

    componentWillUnmount(){
        console.log("el loadding ha sido desmotando")
    }

    render(){
        return (<p>Cargando...</p>);
    }


}
export default Loadding;