/* eslint-disable react/jsx-key */
import React from 'react';
import './Soal.css';

class SoalUjian extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded: false,
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/soal')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded:true,
                items: json,
            })
        })
    }

    render(){
        var {isLoaded, items}= this.state;
        if(!isLoaded){
            return <div>Loading..........</div>
        }
        else{
            return (
                <div className="soal-halaman">
                    <div className="Soal-app">
                        {items.map(item => (
                            <h2>SOAL NO {item.id}</h2> 
                        ))}
                        <br></br>
                       
                        <div className="HalamanSoal">
                            {/* alternatif lain sinkron nomor soal dengan soal */}
                            {/* <ul>
                            {items.map(item => (
                                <li key={item.id}>
                                    {item.qst}
                                </li>
                            ))};

                            </ul> */}
                            {items.map(item => (
                                <div>
                                    <div className="Question">
                                    {item.qst}
                                    </div>
                                    <div className="Choice">
                                        {item.opt.map(
                                            opt => (
                                            <div className="buttonkotak">
                                                <div className="bulatan">
                                                    <input type="radio" name="choice" />
                                                    <span className="pilihan">
                                                        {opt}
                                                    </span>
                                                </div>
                                            </div>
                                            ) 
                                        )}
                                    </div>
                                </div>
                            ))}

                            <br></br>
                        </div> <br></br>
                    </div>
                </div>
            )
        }

    }
};


export default SoalUjian