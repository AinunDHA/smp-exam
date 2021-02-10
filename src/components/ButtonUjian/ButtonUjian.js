import React from 'react';
import './ButtonUjian.css';
import {Link } from 'gatsby'



const ButtonUjian = (props) => {

    
    return(
        <div className="grid-button">

            <Link to="/"><button className="button1-styles"> SOAL SEBELUMNYA </button></Link> 
            <Link to="/"><button className="button2-styles"> RAGU-RAGU </button></Link>
            <Link to="/"><button className="button3-styles"> SOAL SELANJUTNYA </button></Link>
            <Link to="/ujian/lamanhasil/lamanhasil/"><button className="button-selesai"> SELESAI </button></Link>            


        </div>
    )
};


export default ButtonUjian