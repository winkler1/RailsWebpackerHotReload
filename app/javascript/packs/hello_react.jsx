// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import {hot} from 'react-hot-loader'

class Hello extends React.Component {
  constructor() {
    super();
    this.state = { timeCreated: new Date().getTime() };
  }
  
  render() {
    var {name} = this.props;
    var {timeCreated} = this.state;
    return (
      <div>React.Component was created at {timeCreated}.</div>
    );
  }
}

var HotHello = hot(module)(Hello);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HotHello name="Bob" />,
    document.body.appendChild(document.createElement('div')),
  )
})
