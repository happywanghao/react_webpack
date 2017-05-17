import React from 'react';
import Button from 'antd/lib/button'
class Home extends React.Component{
  render(){
    return (
      <div className='home-wrap'>
        <div>
          <h1>HI,I'AM WANGHAO</h1>
          <p>WEB DEVELOPER</p>
          <Button type='primary'><a href='http://baidu.com'>HIRE ME</a></Button>
        </div>
      </div>
    )
  }
}
export default Home
