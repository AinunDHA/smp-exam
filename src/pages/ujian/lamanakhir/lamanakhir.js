import React from 'react';
import './lamanakhir.css';
import { Link } from "gatsby"
import SEO from "../../../components/seo"


const LamanKetiga = () =>(

    <div>
          <SEO title="Page Ujian || Laman Akhir" />
                {/* <div className="header-halaman3">

                </div> */}
            <div class="wrapper">
            <h2 id="selamat">SELAMAT ANDA TELAH MENYELESAIKAN UJIAN</h2>
            <h5 id="nilai">nilai anda</h5>
            <h1 id="nilai_angka">90</h1> 
               
            <div className="tombol_lihathasil">
                <a href="" id="nikel">Lihat Nilai Keseluruhan</a>
            </div>
            <div class="content">
                <table class="tabel-halaman3">
                    <tr>
                        <th>Urutan</th>
                        <th>Nama</th>
                        <th>Jumlah Benar</th>
                        <th>Jumlah Salah</th>
                        <th>Tidak Terjawab</th>
                        <th>Nilai akhir</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Darul</td>
                        <td>9</td>
                        <td>1</td>
                        <td>-</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Fauzul</td>
                        <td>9</td>
                        <td>-</td>
                        <td>1</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Alwi</td>
                        <td>8</td>
                        <td>-</td>
                        <td>2</td>
                        <td>80</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Arian</td>
                        <td>8</td>
                        <td>1</td>
                        <td>1</td>
                        <td>80</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>FIkri</td>
                        <td>8</td>
                        <td>2</td>
                        <td>-</td>
                        <td>80</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Wahyu</td>
                        <td>7</td>
                        <td>2</td>
                        <td>1</td>
                        <td>70</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Alisa</td>
                        <td>7</td>
                        <td>1</td>
                        <td>2</td>
                        <td>70</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Hikma</td>
                        <td>7</td>
                        <td>3</td>
                        <td>-</td>
                        <td>70</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Kamtina</td>
                        <td>7</td>
                        <td>-</td>
                        <td>3</td>
                        <td>70</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Bella</td>
                        <td>6</td>
                        <td>4</td>
                        <td>-</td>
                        <td>60</td>
                    </tr>
                </table>
            </div>
        <div>
            <h6 id="balik">punya token dan ingin ujian lagi ?</h6>
        </div>
        <div class="tombol2">
            <Link to="/">
                 <a href="" id="token">Masukkan Token Lagi</a>
            </Link>
           
        </div>
    </div>
        </div>
)

export default LamanKetiga