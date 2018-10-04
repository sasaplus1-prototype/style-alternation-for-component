const React = require('react');
const ReactDOM = require('react-dom');
const classnames = require('classnames/bind');

const style = require('./index.css');
const cx = classnames.bind(style);

// NOTE: base class
class BaseArea extends React.Component {
  render() {
    const {
      children,
      className
    } = this.props;

    return (
      <div className={cx('area', className)}>
        <p className="p">some text</p>
        {children}
      </div>
    );
  }
}

// NOTE: style alternation
class RedArea extends React.Component {
  render() {
    return <BaseArea className={cx('red')} {...this.props} />
  }
}

// NOTE: style alternation
class BlueArea extends React.Component {
  render() {
    return <BaseArea className={cx('blue')} {...this.props} />
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <RedArea>RedArea, based on BaseArea</RedArea>
        <BlueArea>BlueArea, based on BaseArea</BlueArea>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
