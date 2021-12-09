
import React from "react";

class ClassState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            error: false,
            loading:false,
        };
    }


    componentDidMount(){
        console.log("holi");
    }
    UNSAFE_componentWillMount(){
        console.log("error");
    }

    render() {





        return <>
            <h2>Eliminar {this.props.name}</h2>
            <p>Por favor escribe el codigo de seguridad      </p>
            <input placeholde="codigo de seguridad" />
            <button
                onClick={() => {
                    this.setState({ loading: !this.state.loading });
                }}>Comprobar</button>
            {this.state.error && <p>El codigo es incorrecto</p>}
        {this.state.loading && <p>Cargando </p>}

        </>

    }


}

export default ClassState;