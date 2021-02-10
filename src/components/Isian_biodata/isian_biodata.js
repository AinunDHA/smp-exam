// import React from 'react'
// import "./isian_biodata.css"
// import { Link } from "gatsby"
// import BioButton from "../buttonbio/buttonbio"

// class IsianBio extends React.Component{
//     constructor(props){
//         super();
//         this.state={
//             nama:"",
//             nis:"",
//             sekolah:""
//         }
//     }
//     submit(){

//         let url="http://localhost:3000/siswa";
//         let data=this.state;
//         fetch(url,{
//             method:'POST',
//             headers:{
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body:JSON.stringify(data)
//         }).then((result)=>{
//             result.json().then((resp)=>{
//                 console.warn("resp",resp)
//                 alert("Data berhasil dimasukkan")
//             })
//         })
        
//     }

//     render(){
//         return (
//             <div className="wrapper3">
//                 <div className="form-wrapper">
//                    <h1>Masukkan Data Diri Anda</h1>
//                        <form onSubmit="#" noValidate>
//                             <div className="token">
//                                 <label htmlFor="token">Nama</label>
//                                     <input
//                                       placeholder="Nama"
//                                       type="email"
//                                       name="nama"
//                                       value={this.state.nama}
//                                       onChange={(data )=>{this.setState({nama:data.target.value})}}
//                                     //   noValidate
//                                     />
//                                         {/* {formErrors.email.length > 0 && (
//                                             <span className="errorMessage">{formErrors.email}</span>
//                                         )} */}
//                             </div>
//                             <div className="token">
//                                 <label htmlFor="token">NIS</label>
//                                     <input
//                                       placeholder="NISN"
//                                       type="email"
//                                       name="nis"
//                                       value={this.state.nis}
//                                       onChange={(data )=>{this.setState({nis:data.target.value})}}
//                                     //   noValidate
//                                     />
//                                         {/* {formErrors.email.length > 0 && (
//                                             <span className="errorMessage">{formErrors.email}</span>
//                                         )} */}
//                             </div>
//                             <div className="token">
//                                 <label htmlFor="token">Sekolah</label>
//                                     <input
//                                           // className={formErrors.email.length > 0 ? "error" : null}
//                                       placeholder="Sekolah"
//                                       type="email"
//                                       name="sekolah"
//                                       value={this.state.sekolah}
//                                       onChange={(data )=>{this.setState({sekolah:data.target.value})}}
//                                     //   noValidate
//                                     />
//                                         {/* {formErrors.email.length > 0 && (
//                                             <span className="errorMessage">{formErrors.email}</span>
//                                         )} */}
//                             </div>
//                           </form>
//                              <span onClick={()=>{this.submit()}}>                    
//                              <Link to="/login/rules/"><BioButton /></Link>
//                              </span>
//                     </div>
//               </div>
            
//         );
//         }
    
// }
// export default IsianBio

// ================================== PERCOBAAN================================
import React, { useEffect, useState } from 'react'
import "./isian_biodata.css"
import { Link } from "gatsby"
import BioButton from "../buttonbio/buttonbio"
import AiDb from '../../services/AiDb'

const IsianBio = () => {
    // constructor(props){
    //     super();
    //     this.state={
    //         nama:"",
    //         nis:"",
    //         sekolah:""
    //     }
    // }
    const [nama, setNama] = useState("");
    const [nis, setNis] = useState("");
    const [sekolah, setSekolah] = useState("");

    // const data = useState("");

    // useEffect(() => {
    // AiDb.setBio(nama, nis, sekolah)
    // }, []);
    useEffect(() => {
  AiDb.setBio(nama).then(nama => setNama(nama || []));
  AiDb.setBio(nis).then(nis => setNis(nis || []));
  AiDb.setBio(sekolah).then(sekolah => setSekolah(sekolah || []));
}, [AiDb]);

    const submit = () => { 

        // let url="http://localhost:3000/siswa";
        // let data = useState("");

          // if(typeof window !== "undefined"){
          //   AiDb.setBio({nama, nis, sekolah});
          //   }
          const details = {
            'nama' : nama,
            'nis' : nis, 
            'sekolah' : sekolah
          }
        console.log(details);

        AiDb.setBio(details);
    }


  //   const updateInputNama = (e) => {
  //   setNama(e);
  // }
  //   const updateInputNis = (e) => {
  //   setNis(e);
  // }
  //   const updateInputSekolah = (e) => {
  //   setSekolah(e);
  // }


  
//     function updateInput(value) {
//     {
//     setNama(value),
//     setNis(value),
//     setSekolah(value)
//     }
//   }



        return (
            <div className="wrapper3">
                <div className="form-wrapper">
                   <h1>Masukkan Data Diri Anda</h1>
                       <form onSubmit="#" noValidate>
                            <div className="token">
                                <label htmlFor="token">Nama</label>
                                    <input
                                      placeholder="Nama"
                                      type="text"
                                      name="nama"
                                      value={nama}
                                    // onChange={(e)=>updateInputNama(e.target.value)}
                                      onChange={e => setNama(e.target.value)}
                                    //   onChange={updateInputNama}
                                    //   onChange={nama => updateInputNama(nama.target.value)}
                                      
                                    //   onChange={(data )=>{setNama({nama:data.target.value})}}
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
                                      type="text"
                                      name="nis"
                                      value={nis}
                                        // onChange={(e)=>updateInputNis(e.target.value)}
                                      onChange={e => setNis(e.target.value)}
                                    //   onChange={updateInputNis}
                                        // onChange={nis => updateInputNis(nis.target.value)}
                                    //   onChange={(data )=>{setNis({nis:data.target.value})}}
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
                                      type="text"
                                      name="sekolah"
                                      value={sekolah}
                                        // onChange={(e)=>updateInputSekolah(e.target.value)}
                                      onChange={e => setSekolah(e.target.value)}
                                    //   onChange={updateInputSekolah}
                                    //    onChange={sekolah => updateInputSekolah(sekolah.target.value)}
                                    //   onChange={(data )=>{setSekolah({sekolah:data.target.value})}}
                                    //   noValidate
                                    />
                                        {/* {formErrors.email.length > 0 && (
                                            <span className="errorMessage">{formErrors.email}</span>
                                        )} */}
                            </div>
                          </form>
                          
                            {/* <span onClick={AiDb.setBio(nama, nis)}>  */}
                             <span onClick={()=>submit()}>                    
                             <Link to="/login/rules/"><BioButton /></Link>
                             </span>
                    </div>
              </div>
            
        );
        
    
}
export default IsianBio
//-------------------------------------------------------------------------------------------------------------


// import React from 'react'
// import "./isian_biodata.css"
// import { Link } from "gatsby"
// import BioButton from "../buttonbio/buttonbio"
// import AiDb from "../../services/AiDb"

// class IsianBio extends React.Component{
//     constructor(props){
//         super();
//         this.state={
//             nama: {
//                 nama:"",
//                 nis:"",
//                 sekolah:""
//             },
//             baru: [],
//             data: ''
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.submit = this.submit.bind(this);
//     }
//     // submit(e){
//     //     AiDb.setBio("nama", "nissss");
//     // }
//     handleChange(data){
//         this.setState({value: data.target.value});
//     }

//     onBaru(baru){
//         AiDb.setBio(baru);
//         const data = [...this.state.data, {nama: baru}];
//         this.setState({
//             ...this.state,
//             data
//         });
//     }
//   onItemClick (nama) {
//     this.setState({
//       ...this.state,
//       nama
//     })
//   }

//     render(){
//         return (
//             <div className="wrapper3">
//                 <div className="form-wrapper">
//                    <h1>Masukkan Data Diri Anda</h1>
//                        <form onSubmit="#" noValidate>
//                             <div className="token">
//                                 <label htmlFor="token">Nama</label>
//                                     <input
//                                       placeholder="Nama"
//                                       type="email"
//                                       name="nama"
//                                       value={this.state.nama}
//                                       onChange={(data )=>{this.setState({nama:data.target.value})}}
//                                     //   noValidate
//                                     />
//                                         {/* {formErrors.email.length > 0 && (
//                                             <span className="errorMessage">{formErrors.email}</span>
//                                         )} */}
//                             </div>
//                             <div className="token">
//                                 <label htmlFor="token">NIS</label>
//                                     <input
//                                       placeholder="NISN"
//                                       type="email"
//                                       name="nis"
//                                       value={this.state.nis}
//                                       onChange={(data )=>{this.setState({nis:data.target.value})}}
//                                     //   noValidate
//                                     />
//                                         {/* {formErrors.email.length > 0 && (
//                                             <span className="errorMessage">{formErrors.email}</span>
//                                         )} */}
//                             </div>
//                             <div className="token">
//                                 <label htmlFor="token">Sekolah</label>
//                                     <input
//                                           // className={formErrors.email.length > 0 ? "error" : null}
//                                       placeholder="Sekolah"
//                                       type="email"
//                                       name="sekolah"
//                                       value={this.state.sekolah}
//                                       onChange={(data )=>{this.setState({sekolah:data.target.value})}}
//                                     //   noValidate
//                                     />
//                                         {/* {formErrors.email.length > 0 && (
//                                             <span className="errorMessage">{formErrors.email}</span>
//                                         )} */}
//                             </div>
//                           </form>
//                              <span onClick={()=>{AiDb.setBio(this.onItemClick)}>                    
//                              <Link to="/login/rules/"><BioButton /></Link>
//                              </span>
//                     </div>
//               </div>
            
//         );
//         }
    
// }
// export default IsianBio
