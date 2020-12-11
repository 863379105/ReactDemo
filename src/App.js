import { Component } from 'react'
import './App.css'

class App extends Component{

  state={
    showListFlag : false
  }
  showList = () => {
    this.setState({
      showListFlag : !this.state.showListFlag
    })
    console.log(this.state.showListFlag);
  }
  renderList(){
    if(this.state.showListFlag){
      return 'tab-list show-list'
    }
    return 'tab-list'
  }
  render(){
    return(
      <div>
        <div className='tab-card'>
          <div className='tab-name' onClick={this.showList}>Router</div>
          <ul className={this.renderList()}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
