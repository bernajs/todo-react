import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTarea, getTareas, filter, remove, toggleState } from '../actions'

class Tareas extends Component {
    constructor(props) {
        super(props)
        this.handleTarea = this.handleTarea.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
    }

    componentDidMount() { this.props.getTareas(); }

    handleTarea(e) { this.props.addTarea(this.refs.titulo.value) }

    handleState(tarea) { this.props.toggleState(tarea) }

    handleEliminar(id) { this.props.remove(id) }

    handleFilter(status) { this.props.filter(status) }

    listTareas(status) {
        if (this.props.tareas.length > 0) {
            return this.props.tareas.map(tarea => {
                if (tarea.terminada != status) return;
                return (
                    <li onClick={this.handleState.bind(this, tarea)}
                        key={tarea.id}
                        className="list-group-item" >{tarea.titulo}
                        <span onClick={this.handleEliminar.bind(this, tarea.id)}
                            className="float-right">X</span></li>
                )
            })
        } else {
            return (<li className="list-group-item"> Aún no tienes alguna tarea :( </li>)
        }
    }

    render() {
        console.log(this.props.tareas);
        let titulo = '';
        console.log(this.props.tareas);
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-12">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-12">
                                <div className="form-group">
                                    <input ref="titulo" type="text" className="form-control" placeholder="Inserta el nombre de la tarea"></input>
                                </div>
                                <div className="form-group">
                                    <button onClick={this.handleTarea} className="btn btn-primary fw">Agregar tarea</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-12">
                        <h5 className="text-center">Lista de tareas</h5>
                        <div className="row">
                            <div className="col-md-12 col-12">
                                <h6>Tareas terminadas</h6>
                                <ul className="list-group">
                                    {this.listTareas(true)}
                                </ul>
                            </div>
                            <div className="col-md-12 col-12 mt-2">
                                <h6>Tareas no terminadas</h6>
                                <ul className="list-group">
                                    {this.listTareas(false)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ tareas }) => { return { tareas } }

export default connect(mapStateToProps, { addTarea, getTareas, filter, remove, toggleState })(Tareas);