export default function (state = [], action) {
    switch (action.type) {
        case 'FETCH_TAREAS':
            return [...state]
            break;
        case 'ADD_TAREA':
            return [...state, action.payload]
            break;
        case 'REMOVE_TAREA':
            return state.filter((tarea) => tarea.id != action.payload)
            break;
        case 'TOGGLE_STATUS':
            return state.map((tarea) => (tarea.id == action.payload.id) ? { ...tarea, terminada: !tarea.terminada } : tarea)
            break;
        case 'FILTER':
            return state.filter((tarea) => tarea.terminada == payload.status)
            break;
    }
    return state
}