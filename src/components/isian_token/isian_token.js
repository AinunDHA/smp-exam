// import React, { useState, useEffect } from "react"
// import "./isian_token.css"
// import { Link } from "gatsby"
// import TokenButton from "../buttontoken/buttontoken"
// import aiDb from "../../services/AiDb"


// const IsiToken = () => {
//   const [nomortoken1, setNomorToken1] = useState("");
//   // const [nomortoken2, setNOmorToken2] = useState("Tdk ada token");

// useEffect(() => {
//   aiDb.get("tokennn", "id").then(nomortoken1 => setNomorToken1(nomortoken1 || []));
// }, []);


// function simpantoken(){
//   // nomortoken1.push(isi);
//   const newToken = nomortoken1;
//   setNomorToken1(newToken);
//   // if(typeof window !== "undefined"){
//     aiDb.set("tokennn", newToken);
//   // }
//   return console.log("token diterima", newToken);
// }


//   function updateInput(value) {
//     setNomorToken1(value);
//   }


//  return(
//     <div className="wrapper2">
//         <div className="form-wrapper1">
//           <h1>Masukkan Token Anda</h1>
//           <form onSubmit={simpantoken()} noValidate>
//             <div className="token">
//               <label htmlFor="token">Token</label>
//               <input
//                 // className={formErrors.email.length > 0 ? "error" : null}
//                 placeholder="Token"
//                 type="email"
//                 name="email"
//                 value={nomortoken1}
//                 noValidate
//                 onChange={e => updateInput(e.target.value)}
//                 // onChange={this.handleChange}
//               />
//               <Link to="/login/bio/">
//                   <TokenButton></TokenButton>
//               </Link>
//             </div>

//           </form>
//         </div>
//       </div>
//  );   
// };

// export default IsiToken

//----------------------- sdh bisa kirim token ke IDB/14/01/21 ------------------------ 

// import React, { useState, useEffect } from "react"
// import "./isian_token.css"
// import { Link } from "gatsby"
// import TokenButton from "../buttontoken/buttontoken"
// import aiDb from "../../services/AiDb"


// const IsiToken = () => {
//   const [nomortoken1, setNomorToken1] = useState("");
//   // const [nomortoken2, setNOmorToken2] = useState(false);
//   const [nomortoken2, rrr] = useState(true);

// useEffect(() => {
//   aiDb.set(nomortoken1, nomortoken2).then(nomortoken1 => setNomorToken1(nomortoken1 || []));
// }, []);

//   // var messages = JSON.parse(data);
// function simpantoken(){
//   // nomortoken2.push(isi);
//   const newToken = JSON.parse(nomortoken1);
//   setNomorToken1(newToken);
//   if(typeof window !== "undefined"){
//     aiDb.set(nomortoken1, newToken);
//   }
//   return console.log("token diterima", nomortoken1);
// }

//   function updateInput(value) {
//     setNomorToken1(value);
//   }


//  return(
//     <div className="wrapper2">
//         <div className="form-wrapper1">
//           <h1>Masukkan Token Anda</h1>
//           <form onSubmit={aiDb.set(nomortoken1, nomortoken2)} noValidate>
//             <div className="token">
//               <label htmlFor="token">Token</label>
//               <input
//                 // className={formErrors.email.length > 0 ? "error" : null}
//                 placeholder="Token"
//                 type="email"
//                 name="email"
//                 value={nomortoken1}
//                 noValidate
//                 onChange={e => updateInput(e.target.value)}
//                 // onChange={this.handleChange}
//               />
//               <Link to="/login/bio/"
//               /* onClick={() => simpantoken(nomortoken1)} */>
//                   <TokenButton></TokenButton>
//               </Link>
//             </div>

//           </form>
//         </div>
//       </div>
//  );   
// };

// export default IsiToken

//===========================================================================

import React, { useState, useEffect } from "react"
import "./isian_token.css"
import { Link } from "gatsby"
import TokenButton from "../buttontoken/buttontoken"
import aiDb from "../../services/AiDb"


const IsiToken = () => {
  const [nomortoken1, setNomorToken1] = useState("");
  // const [nomortoken2, setNOmorToken2] = useState(false);
  const [nomortoken2, rrr] = useState(true);

useEffect(() => {
  aiDb.set(nomortoken1, nomortoken2).then(nomortoken1 => setNomorToken1(nomortoken1 || []));
}, []);

  // var messages = JSON.parse(data);
function simpantoken(){
  // nomortoken2.push(isi);
  const newToken = JSON.parse(nomortoken1);
  setNomorToken1(newToken);
  if(typeof window !== "undefined"){
    aiDb.set(nomortoken1, newToken);
  }
  return console.log("token diterima", nomortoken1);
}

  function updateInput(value) {
    setNomorToken1(value);
  }


 return(
    <div className="wrapper2">
        <div className="form-wrapper1">
          <h1>Masukkan Token Anda</h1>
          <form onSubmit={aiDb.set(nomortoken1, nomortoken2)} noValidate>
            <div className="token">
              <label htmlFor="token">Token</label>
              <input
                // className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Token"
                type="email"
                name="email"
                value={nomortoken1}
                noValidate
                onChange={e => updateInput(e.target.value)}
                // onChange={this.handleChange}
              />
              <Link to="/login/bio/"
              /* onClick={() => simpantoken(nomortoken1)} */>
                  <TokenButton></TokenButton>
              </Link>
            </div>

          </form>
        </div>
      </div>
 );   
};

export default IsiToken