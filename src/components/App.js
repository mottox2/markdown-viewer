import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import styles from './App.css'

class App extends Component {
  render() {
    return <div>
      <p styleName='hoge'>This is React Component</p>
    </div>
  }
}

export default CSSModules(App, styles)
