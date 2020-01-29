const initialState = {
    listaUsuarios:[],
}

function Datos(state = initialState, action) {
    switch (action.type) {
        case 'SET_LISTA_USUARIOS': {
            return {
                ...state,
                listaUsuarios: action.payload.item
            }
        }
        default:
            return state
    }
}

export default Datos;