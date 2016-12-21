import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import marked  from 'marked'

import styles from './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  onChange(value) {
    this.setState({value})
  }

  render() {
    const html = marked(this.state.value, {
      breaks: true,
    })
    return <div>
      <p styleName='hoge'>This is React Component</p>
      <textarea styleName='textarea' value={this.state.value} onChange={(e) => this.onChange(e.target.value)}/>
      <div dangerouslySetInnerHTML={{__html: html}}/>
      <div>{html}</div>
    </div>
  }
}

export default CSSModules(App, styles)
