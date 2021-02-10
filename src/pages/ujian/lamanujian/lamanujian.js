import React from "react"
import { Link } from "gatsby"
import './lamanujian.css'
import HeaderUjian from "../../../components/HeaderUjian/HeaderUjian"
import SoalUjian from "../../../components/Soal/Soal"
import DaftarSoal from "../../../components/DaftarSoal/DaftarSoal"
import ButtonUjian from "../../../components/ButtonUjian/ButtonUjian"


// import Image from "../components/image"
import SEO from "../../../components/seo"

const LamanUtama = () => (
    <div className="App">

    <SEO title="Page Ujian || Laman Ujian" />
    <HeaderUjian></HeaderUjian>
            <div className="soalll">
                <SoalUjian></SoalUjian>
            </div>

            <div className="daftar-soal-app">
                <DaftarSoal></DaftarSoal>
            </div>
            <div className="tombol-halaman1">
                <ButtonUjian></ButtonUjian>
            </div>

            <br></br>
             {/* <Link to="/">GO TO HOME</Link>
             <Link to="/">Go back to the homepage</Link> */}


    </div>
  
)

export default LamanUtama