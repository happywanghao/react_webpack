import React from 'react';
import Button from 'antd/lib/button'
import {withRouter} from 'react-router-dom'
class Header extends React.Component{
  render(){
    let pathname=this.props.location.pathname
    return (
      <header>
        <Button onClick={()=>this.props.history.goBack()} icon="left">返回</Button>
        <h3>wanghao@{pathname.slice(1).toUpperCase()}</h3>
        <Button icon="right">返回</Button>
      </header>
    )
  }
}
export default withRouter(Header)
