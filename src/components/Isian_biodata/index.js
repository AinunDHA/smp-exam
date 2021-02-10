import React from 'react'
import "./isian_biodata.css"
import { Link } from "gatsby"
import BioButton from "../buttonbio/buttonbio"

class IsianBio extends React.Component{
    constructor(props){
        super();
        this.state={
            nama:"",
            nis:"",
            sekolah:""
        }
    }
    submit(){

        let url="http://localhost:3000/siswa";
        let data=this.state;
        fetch(url,{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn("resp",resp)
                alert("Data berhasil dimasukkan")
            })
        })
        
    }

    render(){
        return (
            <div className="wrapper3">
                <div className="form-wrapper">
                   <h1>Masukkan Data Diri Anda</h1>
                       <form onSubmit="#" noValidate>
                            <div className="token">
                                <label htmlFor="token">Nama</label>
                                    <input
                                      placeholder="Nama"
                                      type="email"
                                      name="nama"
                                      value={this.state.nama}
                                      onChange={(data )=>{this.setState({nama:data.target.value})}}
                                    //   noValidate
                                    />
                                        {/* {formErrors.email.length > 0 && (
                                            <span className="errorMessage">{formErrors.email}</span>
                                        )} */}
                            </div>
                            <div className="token">
                                <label htmlFor="token">NIS</label>
                                    <input
                                      placeholder="NISN"
                                      type="email"
                                      name="nis"
                                      value={this.state.nis}
                                      onChange={(data )=>{this.setState({nis:data.target.value})}}
                                    //   noValidate
                                    />
                                        {/* {formErrors.email.length > 0 && (
                                            <span className="errorMessage">{formErrors.email}</span>
                                        )} */}
                            </div>
                            <div className="token">
                                <label htmlFor="token">Sekolah</label>
                                    <input
                                          // className={formErrors.email.length > 0 ? "error" : null}
                                      placeholder="Sekolah"
                                      type="email"
                                      name="sekolah"
                                      value={this.state.sekolah}
                                      onChange={(data )=>{this.setState({sekolah:data.target.value})}}
                                    //   noValidate
                                    />
                                        {/* {formErrors.email.length > 0 && (
                                            <span className="errorMessage">{formErrors.email}</span>
                                        )} */}
                            </div>
                          </form>
                             <span onClick={()=>{this.submit()}}>                    
                             <Link to="/login/rules/"><BioButton /></Link>
                             </span>
                    </div>
              </div>
            
        );
        }
    
}
export default IsianBio
