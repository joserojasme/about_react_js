const initialState = {
    mostrarSpinner:false,
}

function Utils(state = initialState, action) {
    switch (action.type) {
        case 'SET_MOSTRAR_SPINNER': {
            return {
                ...state,
                mostrarSpinner: action.payload.item
            }
        }
        default:
            return state
    }
}

export default Utils;