import Row from './row.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]],
      turn: 'black'
    };
  }

  populateBoard = () => {
    let result = [];
    for (let i = 0; i < 7; i ++) {
      result.push(<Row id={'row' + i} state={this.state} setState={this.setState.bind(this)}/>)
    }
    return result
  }

  render() {
    return (
      <div id='board'>
        <table id='table'>
          {this.populateBoard()}
        </table>
      </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

