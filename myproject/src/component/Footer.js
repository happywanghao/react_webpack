import React from 'react';
import Icon from 'antd/lib/icon'
import {NavLink} from 'react-router-dom'
class Footer extends React.Component{
  render(){
    return (
      <footer>
        <NavLink activeClassName='active' exact to='/'><Icon type="home" /><br/>Home</NavLink>
        <NavLink activeClassName='active' to='/blog'><Icon type="home" /><br/>Blog</NavLink>
        <NavLink activeClassName='active' to='/work'><Icon type="home" /><br/>Work</NavLink>
        <NavLink activeClassName='active' to='/about'><Icon type="home" /><br/>About</NavLink>
      </footer>
    )
  }
}
export default Footer
