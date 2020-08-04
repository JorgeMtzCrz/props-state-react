import React, { Component } from 'react'
import ListElement from './ListElement'

const alumnos = [{ nombre: 'Joss' }, { nombre: 'Diego' }, { nombre: 'Mariana' }]

class List extends Component {
  state = {
    count: 0,
    text: ''
  }

  contador = () => {
    this.setState(prevState => {
      return {
        count: prevState.count === 0 ? 0 : (prevState.count -= 1)
      }
    })
  }
  contador2 = () => {
    this.setState(prevState => {
      return {
        count: (prevState.count += 1)
      }
    })
  }
  inputChange = event => {
    this.setState({
      text: event.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Estudiantes Jun</h1>
        <ul>
          {alumnos.map(alumno => (
            <ListElement text={alumno.nombre} />
          ))}
        </ul>
        <p>{this.state.count}</p>
        <button onClick={this.contador}>Resta</button>
        <button onClick={this.contador2}>Suma</button>

        <input type="text" onChange={this.inputChange} value={this.state.text} />
        <small>{this.state.text}</small>
      </div>
    )
  }
}

export default List
