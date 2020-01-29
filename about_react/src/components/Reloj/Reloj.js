import React, { Component } from 'react';

const style = {
    footer: {
        width: '100%',
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
    }
}

class Reloj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hora: '',
            minutos: '',
            segundo: ''
        }
    }

    componentDidMount() {
        setInterval(()=>this.NuevaHora(), 1000);
    }

    NuevaHora = () => {
        let horaActual = new Date()
        let hora = horaActual.getHours()
        let minuto = horaActual.getMinutes()
        let segundo = horaActual.getSeconds()
        this.setState({
            hora: hora,
            minutos: minuto,
            segundo: segundo
        })
    }

    render() {
        const { hora, minutos, segundo } = this.state;
        return (
            <div style={style.footer}>
                <p>
                    {`Hora actual: ${hora}:${minutos}:${segundo}`}
                </p>
            </div>
        );
    }
}

export default Reloj;