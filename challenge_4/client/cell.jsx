class Cell extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      state: null
    }
  }

  cellClickHandler  = (props) => {
    // console.log(JSON.stringify(props.appState))
    // console.log(JSON.stringify(props.rowState))
    // console.log(JSON.stringify(this.state))

    if (props.appState.turn === 'black') {
      this.setState({
        state: 'black'
      })

      props.appSetState({
        turn: 'red'
      })
    } else {
      this.setState({
        state: 'red'
      })

      props.appSetState({
        turn: 'black'
      })
    }
  }

  render = (props) => {
    return (
      this.state.state === null ?
        <td className='cell' id={this.props.id} onClick={this.cellClickHandler.bind(null, this.props)}></td>:
        this.state.state === 'black' ?
          <td className='black-cell' onClick={this.cellClickHandler.bind(null, this.props)}></td>:
          <td className='red-cell' onClick={this.cellClickHandler.bind(null, this.props)}></td>
    )
  }
}

export default Cell