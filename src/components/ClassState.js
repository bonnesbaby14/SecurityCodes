
import React from "react";
import Loadding from "./Loadding";


const SECURITY_CODE = "palabra";

class ClassState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            error: false,
            loading: false,
            value: ""
        };
    }


    componentDidUpdate() {
        if (this.state.loading) {
            console.log("Empezando el Effect");
            setTimeout(() => {
                console.log("Haciendo la validacio");

                if (this.state.value === SECURITY_CODE) {
                    this.setState({ loading: false, error: false });
                    console.log("el codigo es correcto")

                } else {
                    this.setState({ loading: false, error: true });

                }
                console.log("Se termino la validacion");
            }, 1000);
        }
    }
    render() {





        return <>
            <h2>Eliminar {this.props.name}</h2>
            <p>Por favor escribe el codigo de seguridad      </p>
            <input value={this.state.value} onChange={
                (event) => {
                    this.setState({ value: event.target.value })
                }} placeholde="codigo de seguridad" />
            <button
                onClick={() => {
                    this.setState({ loading: true });
                }}>Comprobar</button>
            {(this.state.error && !this.state.loading) && <p>El codigo es incorrecto</p>}
            {this.state.loading && <Loadding />}

        </>

    }


}

export default ClassState;