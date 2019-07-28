
import React from 'react'
import * as Action from '../../store/action'
import { connect } from "react-redux";
class DashBoard extends React.Component {
  componentDidMount() {
  }
  // onIncrement = () => {
  //     store.dispatch(Action.increment());
  // };
  // onDecrement = () => {
  //     store.dispatch(Action.decrement());
  // };
  // onIncrement = () => {
  //     store.dispatch({
  //         type: "increment"
  //     });
  // };

  // onDecrement = () => {
  //     store.dispatch({s
  //         type: "decrement"
  //     });
  // };
  onIncrement = () => {
    this.props.dispatch(Action.increment());
  };

  onDecrement = () => {
    this.props.dispatch(Action.decrement());
  };
  render() {
    // store.subscribe(() => console.log("Store is changed: " + store.getState()));
    return <div>
      <div className="container">
        <h1 className="text-center mt-5">{this.props.count}</h1>
        <p className="text-center">
          <button className="btn btn-primary mr-2" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="btn btn-danger my-2" onClick={this.onDecrement}>
            Decrease
          </button>
        </p>
      </div>
    </div>
  }
}
// export default DashBoard
const mapStateToProps = state => ({
  count: state
})
export default connect(mapStateToProps)(DashBoard);