import React from 'react'
import './HeaderUjian.css'
// import logo from '../logoaidu.png'
import Drawer from "../Sidebar/Sidebar"


class HeaderUjian extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      konten:[],
      isLoaded: false,
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/siswa')
    .then(res => res.json())
    .then(json =>{
      this.setState({
        isLoaded:true,
        konten:json,
      })
    })
  }
  render(){
    var {isLoaded,konten} = this.state;
    if(!isLoaded){
      return<div>Loading..........</div>
    }
    else{
    return (
    <nav className="navigation">

      <div className="grid-nav cont">

        <div className="logo">
          {/* <img src={logo} alt="AIDU" className="gambar-logo"/> */}
          <span className="text-logo">TRYOUT</span>
        </div>
          <div className="drawer">
            <Drawer />
          </div> 
        <div className="text">
         {konten.map(item => (
            <p className="nama-text">{item.nama}</p>
          ))}
          {konten.map(item => (
            <p className="sekolah-text">{item.sekolah}</p>
          ))}
        </div>
        <div className="timer">
          <p className="text-timer">Sisa Waktu</p>
          <p className="clock-timer">0 : 12 : 34</p>
        </div>
      </div>      

    </nav>


    );
    }
  }
};

export default HeaderUjian
