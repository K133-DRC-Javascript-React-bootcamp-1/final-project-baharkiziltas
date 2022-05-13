import React from 'react'

export default function Options() {

  const optionsStyle = {
    color: 'black',
    backgroundColor: '#e8610a',
  };


  return (
   <div style={optionsStyle}>
      <ul class="nav nav-pills nav-fill">
    <li class="nav-item">
      <a style={{color:'white'}} class="nav-link " href="#">Active</a>
    </li>
    <li class="nav-item">
      <a style={{color:'white'}} class="nav-link" href="#">Much longer nav link</a>
    </li>
    <li class="nav-item">
      <a style={{color:'white'}} class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a style={{color:'white'}} class="nav-link disabled">Disabled</a>
    </li>
    <li class="nav-item">
      <a style={{color:'white'}} class="nav-link disabled">Disabled</a>
    </li>
    <li class="nav-item">
      <a style={{color:'white'}} class="nav-link disabled">Disabled</a>
    </li>
    <li class="nav-item">
      <a style={{color:'white'}} class="nav-link disabled">Disabled</a>
    </li>
    <li class="nav-item">
      <a style={{color:'white'}} class="nav-link disabled">Disabled</a>
    </li>
  </ul>
   </div>
  )
}
