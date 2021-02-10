import React from 'react';

import './DaftarSoal.css';

const Posts = (props) => {
    const listItems = props.posts.map((post)=> 
            <div className="nomor-soal">
            <div className="bulat">
                <p id="nomorsoal">
                    {post.nmr}
               </p>
            </div>
            <div className="kotak">
                <span id="jawaban-sementara">
                      {post.jwb}
                </span>
            </div>
        </div>
    )
    return(
        <div>
            {listItems}
        </div>

    )
};
const Postt = (props) => {
    const listItems2 = props.post2.map((post2)=>
            <div className="nomor-soal">
            <div className="bulat">
                <p id="nomorsoal">
                    {post2.nmr}
               </p>
            </div>
            <div className="kotak-blank">
                <span is="jawaban-sementara">
                    {post2.jwb}
                </span>
            
            </div>
        </div>
    ) 
    return(
        <div>
            {listItems2}
        </div>
    )
};
const Kolom3 = (props) => {
    const listItems3 = props.post3.map((post3)=>
            <div className="nomor-soal">
            <div className="bulat">
                <p id="nomorsoal">
                    {post3.nmr}
               </p>
            </div>
            <div className="kotak-blank">
                <span id="jawaban-sementara">
                    {post3.jwb}
                </span>
            </div>
        </div>
    ) 
    return(
        <div>
            {listItems3}
        </div>
    )
};
const Kolom4 = (props) => {
    const listItems4 = props.post4.map((post4)=>
            <div className="nomor-soal">
            <div className="bulat">
                <p id="nomorsoal">
                    {post4.nmr}
               </p>
            </div>
            <div className="kotak-blank">
                <span id="jawaban-sementara">
                    {post4.jwb}
                </span>
            </div>
        </div>
    ) 
    return(
        <div>
            {listItems4}
        </div>
    )
};
const Kolom5 = (props) => {
    const listItems5 = props.post5.map((post5)=>
            <div className="nomor-soal">
            <div className="bulat">
                <p id="nomorsoal">
                    {post5.nmr}
               </p>
            </div>
            <div className="kotak-blank">
                <span id="jawaban-sementara">
                    {post5.jwb}
                </span>
            </div>
        </div>
    ) 
    return(
        <div>
            {listItems5}
        </div>
    )
};



class DaftarSoal extends React.Component{


    render(){
        const posts = [
            {id:1, nmr:"1", jwb:"A"},
            {id:2, nmr:"2", jwb:"C"},
            {id:3, nmr:"3", jwb:"B"},
            {id:4, nmr:"4", jwb:"D"},
            {id:5, nmr:"5", jwb:"C"},
            {id:6, nmr:"6", jwb:"C"},
            {id:7, nmr:"7", jwb:"A"},
            {id:8, nmr:"8", jwb:"B"},
            {id:9, nmr:"9", jwb:"B"},
            {id:10, nmr:"10", jwb:"D"}
        ];
        const post2 =[
            {id:11, nmr:"11", jwb:""},
            {id:12, nmr:"12"},
            {id:13, nmr:"13"},
            {id:14, nmr:"14"},
            {id:15, nmr:"15"},
            {id:16, nmr:"16"},
            {id:17, nmr:"17"},
            {id:18, nmr:"18"},
            {id:19, nmr:"19"},
            {id:20, nmr:"20"},
        ];
        const post3 = [
            {id:21, nmr:"21"},
            {id:22, nmr:"22"},
            {id:23, nmr:"23"},
            {id:24, nmr:"24"},
            {id:25, nmr:"25"},
            {id:26, nmr:"26"},
            {id:27, nmr:"27"},
            {id:28, nmr:"28"},
            {id:29, nmr:"29"},
            {id:30, nmr:"30"}
        ];
        const post4 = [
            {id:31, nmr:"31"},
            {id:32, nmr:"32"},
            {id:33, nmr:"33"},
            {id:34, nmr:"34"},
            {id:35, nmr:"35"},
            {id:36, nmr:"36"},
            {id:37, nmr:"37"},
            {id:38, nmr:"38"},
            {id:39, nmr:"39"},
            {id:40, nmr:"40"}
        ];
        const post5 = [
            {id:31, nmr:"41"},
            {id:32, nmr:"42"},
            {id:33, nmr:"43"},
            {id:34, nmr:"44"},
            {id:35, nmr:"45"},
            {id:36, nmr:"46"},
            {id:37, nmr:"47"},
            {id:38, nmr:"48"},
            {id:39, nmr:"49"},
            {id:40, nmr:"50"}
        ];


        return(
            <div className="daftar-soal">
            <div className="tabel-soal">
                <table>
                        <td>
                            <tr>
                                <Posts posts={posts}/>
                            </tr>
                        </td> 
                        <td>
                            <tr>
                                <Postt post2={post2}/>
                            </tr>
                        </td> 
                        <td>
                            <tr>
                                <Kolom3 post3={post3}/>
                            </tr>
                        </td>
                        <td>
                            <tr>
                                <Kolom4 post4={post4}/>
                            </tr>
                        </td>  
                        <td>
                            <tr>
                                <Kolom5 post5={post5}/>
                            </tr>
                        </td> 
                </table>
            </div>
        </div>
        );
    }
    
}


export default DaftarSoal