import React from 'react';
import Header from './component/Header.js'
import Footer from './component/Footer.js'
import {HashRouter,Route} from 'react-router-dom'
import Home from './component/Home.js'
import Blog from './component/Blog.js'
import Work from './component/Work.js'
import About from './component/About.js'
import Post from './component/Post.js'
import LeftNav from './component/LeftNav.js'
class App extends React.Component{

  constructor(){
    super()
    this.state={
      mobile:true,

    }
  }
  setNav(){
    let winw=document.body.clientWidth;
    if(winw>=700){
      this.setState({mobile:false})
    }else{
      this.setState({mobile:true})
    }
  }
  componentWillMount(){
    this.setNav()
  }

  componentDidMount(){
        window.onresize=()=>this.setNav()
  }
  render(){
    return (
      <HashRouter>
        <div className='my-wrap'>
          {this.state.mobile ?<Header/>:<LeftNav/>}
            <div className='main'>
              <Route exact path='/' component={Home}/>
              <Route path='/blog' component={Blog}/>
              <Route path='/work' component={Work}/>
              <Route path='/about' component={About}/>
              <Route path='/post/:url' component={Post}/>
            </div>
          {this.state.mobile ?<Footer/>:null}

        </div>
      </HashRouter>
    )
  }
}
export default App
