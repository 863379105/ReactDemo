import {Component} from 'react'

class TabItem extends Component{
    state={
        showSubListFlag : false,
    }
    showSubList = () => {
        this.setState({
            showSubListFlag : !this.state.showSubListFlag,
        })
    }
    render(){
        console.log(this.props);
        return(
            <li className='tab-item'>
                <span className='tab-name' onClick={this.showSubList}>{this.props.data.item}</span>
                <ul className={this.state.showSubListFlag ? 'sub-list show-sub-list' : 'sub-list'}>
                   { this.props.data.subData.map((item,index)=>{
                       return <li key = {index}>{item}</li>
                   }) }
                </ul>
            </li>
        )
    }
}
export default TabItem