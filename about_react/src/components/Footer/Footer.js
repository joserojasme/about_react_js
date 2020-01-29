import React, {Component} from 'react';

const style = {
    footer: {
        bottom: 0,
        width: '100%',
        backgroundColor: '#111',
        color: 'white',
        textAlign: 'center',
    }
}

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            year:null
        }
    }

    componentWillMount(){
        let year = new Date().getFullYear();
        this.setState({year: year})
    }

    render(){
        const { year } = this.state;
        return (
            <div style={style.footer}>
            <p>© {year} by TECNOFACTOR Todos los derechos reservados</p>
            </div>
        )
    }
}

export default Footer;