// var React = require('react');
// var ReactDOM = require('react-dom');
// import $ from "jquery";


class App extends React.Component  {
  constructor(props) {
    super(props)

    this.state = {
      page: 'homepage',
      record: {}
    }
  }

  getRecordsSuccessCB = (records) => {
    console.log(records[records.length - 1])

    let record = records[records.length - 1];

    this.setState ({
      page: 'F1',
      record
    })

    console.log('STATE: ' + JSON.stringify(this.state))
  }

  render() {
    return (
      <div>
        <h1>Checkout</h1>
        {this.state.page === 'homepage' ? <Homepage setState={this.setState.bind(this)} getRecordsSuccessCB={this.getRecordsSuccessCB.bind(this)}/>: <></>}

        {this.state.page === 'F1' ? <F1 setState={this.setState.bind(this)} state={this.state}/>: <></>}

        {this.state.page === 'F2' ? <F2 setState={this.setState.bind(this)} state={this.state}/>: <></>}

        {this.state.page === 'F3' ? <F3 setState={this.setState.bind(this)} state={this.state}/>: <></>}

        {this.state.page === 'confirmation' ? <ConfirmationPage setState={this.setState.bind(this)}/>: <></>}
      </div>
      )
  }
}


const Homepage = (props) => {

  const clickCheckout = props => {

    //POST request to get new id
    $.ajax({
      type: "POST",
      url: 'http://localhost:8080/records',
      success: () => {
        console.log('Post successful!')
      }
    });

    $.ajax({
      type: "GET",
      url: 'http://localhost:8080/records',
      success: (records) => {
        props.getRecordsSuccessCB(records);
      }
    });
  }

  return (
    <div id='homepage'>
      <button id='checkoutButton' onClick={clickCheckout.bind(null, props)}>Checkout</button>
    </div>
  )
}

const F1 = (props) => {

  const clickNextHandler1 = props => {

    //get all input from forms
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // console.log(name, email, password)

    if(name && email && password) {
      let url = `http://localhost:8080/records/form1/${props.state.record.id}/${name}/${email}/${password}`

      console.log('URL: ' + url)

      $.ajax({
        type: "PATCH",
        url: url,
        success: () => {
          console.log('Record successfully updated!')
        }
      });

      props.setState({
        page: 'F2'
      })
    } else {
      alert('Please complete all fields!')
    }
  }

  return (
    <div id='f1'>
      <div id='nameForm'>
        <span>Name: </span>
        <input id='name' type='text'></input>
      </div>
      <div id='emailForm'>
      <span>Email: </span>
        <input id='email' type='text'></input>
      </div>
      <div id='passwordForm'>
        <span>Password: </span>
        <input id='password' type='text'></input>
      </div>
      <button id='submitF1' onClick={clickNextHandler1.bind(null, props)}>Next</button>
    </div>
  )
}

const F2 = (props) => {

  const clickNextHandler2 = props => {

    //get all input from forms
    let address = document.getElementById('addressForm1').value + document.getElementById('addressForm2').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let zip = document.getElementById('zip').value;
    let phoneNumber = document.getElementById('phoneNumberForm').value;

    console.log(address, city, state, zip, phoneNumber)

    if(address && city && state && zip && phoneNumber) {
      let url = `http://localhost:8080/records/form2/${props.state.record.id}/${address}/${city}/${state}/${zip}/${phoneNumber}`

      console.log('URL: ' + url)

      $.ajax({
        type: "PATCH",
        url: url,
        success: () => {
          console.log('Record successfully updated!')
        }
      });

      props.setState({
        page: 'F3'
      })
    } else {
      alert('Please complete all fields!')
    }
  }

  return (
    <div id='f2'>
      <div id='addressForm1'>
        <span>Address Line 1: </span>
        <input type='text'></input>
      </div>
      <div id='addressForm2'>
      <span>Address Line 2: </span>
        <input type='text'></input>
      </div>
      <div id='city'>
      <span>City: </span>
        <input type='text'></input>
      </div>
      <div id='state'>
      <span>State: </span>
        <input type='text'></input>
      </div>
      <div id='zip'>
      <span>Zip: </span>
        <input type='text'></input>
      </div>
      <div id='phoneNumberForm'>
        <span>Phone Number: </span>
        <input type='text'></input>
      </div>
      <button id='submitF1' onClick={clickNextHandler2.bind(null, props)}>Next</button>
    </div>
  )
}

const F3 = (props) => {

  const clickNextHandler3 = props => {

    props.setState({
      page: 'confirmation',
    })
  }

  return (
    <div id='f3'>
      <div id='cardNumberForm'>
        <span>Card Number: </span>
        <input type='text'></input>
      </div>
      <div id='expiryDateForm'>
      <span>Expiration Date: </span>
        <input type='text'></input>
      </div>
      <div id='cVVForm'>
        <span>CVV: </span>
        <input type='text'></input>
      </div>
      <div id='billingZipForm'>
        <span>Billing Zip: </span>
        <input type='text'></input>
      </div>
      <button id='submitF1' onClick={clickNextHandler3.bind(null, props)}>Next</button>
    </div>
  )
}


const ConfirmationPage = (props) => {

  const purchaseHandler = props => {

    props.setState({
      page: 'homepage',
    })
  }

  return (
    <div id='conformationPage'>
      <button id='purchase' onClick={purchaseHandler.bind(null, props)}>Purchase</button>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);