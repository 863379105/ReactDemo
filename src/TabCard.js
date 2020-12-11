import { Component } from 'react'
import './TableCard.css'
import data from './data.js'
import TabItem from './TabItem.js'

class TableCard extends Component{
  state={
    showListFlag : false
  }
  showList = () => {
    this.setState({
      showListFlag : !this.state.showListFlag
    })
  }
  render(){
    return(
      <ul className='tab-card'>
        { 
          Object.keys(data).map((item,index) => {
            return <TabItem data={{item,index,subData:data[item]}} key = {index}/>
          }) 
        }
      </ul>
    )
  }
}

export default TableCard;
