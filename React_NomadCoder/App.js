import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  // ! App은 React.Component를 extends해야만 함
  state = {
    count: 0,
  };
  // * App 클래스에 속한 state 오브젝트, 변하는 데이터를 담는다
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
    // * setState(updater[, callback]), virtual DOM을 활용하여 비동기로 state가 바뀐 후 다시 render 호출
    // * current = App.state
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  // ! Component Life Cycle
  componentDidMount() {
    console.log('Component rendered');
  }
  // * Component가 처음 render될 때(mount) 호출
  componentDidUpdate() {
    console.log('I just updated');
  }
  componentWillUnmount() {
    console.log('Goodbye, cruel world');
  }
  // * Component가 더 이상 사용되지 않을 때, 페이지를 떠날 때(unmount) 호출
  render() {
    // ! react는 자동적으로 class component의 render method를 실행한다
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
