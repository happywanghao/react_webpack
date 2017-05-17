import React from 'react'
import ReactDOM from 'react-dom'
import img from './imgg.jpg'
import './main.css'
import './main.less'
import $ from 'jquery'
var aa=require("./hello.js")
let dd=<div>
  <img src={img}/>
  <div className='box'><p>dfsdfsd</p></div>
</div>
let ccc=666
aa()
ReactDOM.render(dd,document.querySelector('#root'))
