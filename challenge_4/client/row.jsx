import Cell from './cell.jsx'

class Row extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rowState: [0,0,0,0,0,0]
    }
  }

  populateRow = () => {
    // this.state.rowState.map( (item, i) => {
    //   <Cell appState={this.props.state} appSetState={this.props.setState} rowState={this.state} rowSetState={this.setState.bind(this)} i={i}/>
    // })
    let result = [];

    for (let i = 0; i < this.state.rowState.length; i ++) {
      result.push(<Cell id={'cell' + i} appState={this.props.state} appSetState={this.props.setState} rowState={this.state} rowSetState={this.setState.bind(this)}/>)
    }
    return result
  }

  rowClickHandler () {
    //find first cell within row to be a 0
    let emptyIndex;

    for (let i = 0; i < this.state.rowState.length; i ++) {
      if (this.state.rowState[i] === 0) {
        emptyIndex = i;
        break;
      }
    }

    console.log('Empty Index: ' + emptyIndex)

    if (emptyIndex === 0) {
      let emptyCell = document.getElementById(`cell${emptyIndex}`);

      console.log('CHECK!!!! ' + emptyCell)
    } else {
      alert('Please pick another column!');
    }
  }

  render (props) {
    // console.log('PROPS!!!: ' + JSON.stringify(this.props))
    // console.log('PROPS!!!: ' + JSON.stringify(this.state))
    console.log(this.state.rowState)

    return (
      <tr className='row' id={this.props.id} onClick={this.rowClickHandler.bind(this)}>
        {this.populateRow()}
      </tr>
    )
  }
}

export default Row