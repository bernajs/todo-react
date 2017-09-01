var id = 0;

export function getTareas() {
    return { type: 'FETCH_POSTS' }
}

export function addTarea(tarea) {
    id++
    return { type: 'ADD_TAREA', payload: { id, titulo: tarea, terminada: false } }
}

export function remove(tarea) {
    return { type: 'REMOVE_TAREA', payload: tarea }
}

export function toggleState(tarea) {
    return { type: 'TOGGLE_STATUS', payload: tarea }
}

export function filter(status){
    return { type: 'FILTER', payload: status }
}