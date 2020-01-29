import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SetListaUsuarios } from '../../reducers/Actions/Datos';
import { SetMostrarSpinner } from '../../reducers/Actions/Utils';
import { Get as GetUsers } from '../../network/Users';
import ListaUsuarios from '../../components/Listas/ListaUsuarios';
import Input from '../../components/Inputs/Input';

class Listas extends Component {
    state = {
        buscar: '',
    }

    HandleClick = (id) => {
    }

    HandleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.id]: event.target.value }, () => {
            const { buscar } = this.state;
            const { listaUsuarios, setListaUsuarios } = this.props;
            let listaUsuariosArray = listaUsuarios;
            listaUsuariosArray = listaUsuariosArray.filter(item => {
                let nombreCompleto = `${item.first_name} ${item.last_name}`;
                if (nombreCompleto.toUpperCase().indexOf(buscar.toUpperCase()) > -1) {
                    return item;
                }
            })
            setListaUsuarios(listaUsuariosArray);
        })
    }

    componentWillMount() {
        const { setMostrarSpinner, setListaUsuarios } = this.props;
        GetUsers(2, setMostrarSpinner).then(
            response => {
                if (response.status === 200) {
                    setListaUsuarios(response.data);
                } else {
                    console.log("Error", response.data);
                }
            }
        );
    }

    render() {
        const { listaUsuarios } = this.props;
        const { buscar } = this.state;

        return (
            <div>
                <div><p>hola desde listas</p></div>
                <div>
                    <Input
                        value={buscar}
                        handleChange={this.HandleChange}
                        id="buscar"
                        label="Ingrese el nombre a buscar" />
                </div>
                {listaUsuarios.length > 0 &&
                    <div>
                        <ListaUsuarios
                            listaUsuarios={listaUsuarios}
                            handleClick={this.HandleClick} />
                    </div>
                }
                {listaUsuarios.length < 1 &&
                    <div><p>La lista de usuarios está vacía</p></div>
                }
            </div>
        );
    }
}


function mapStateToProps(state, props) {
    return {
        listaUsuarios: state.datos.listaUsuarios
    }
}

const mapDispatchToProps = (dispatch) => ({
    setListaUsuarios: (item) => dispatch(SetListaUsuarios(item)),
    setMostrarSpinner: (item) => dispatch(SetMostrarSpinner(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Listas);
