import { combineReducers } from 'redux';
import Tareas from './tarea_reducer'

const rootReducer = combineReducers({
  tareas: Tareas
});

export default rootReducer;
