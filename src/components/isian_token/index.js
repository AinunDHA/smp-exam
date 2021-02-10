import React, { useState, useEffect } from "react"
import "./isian_token.css"
import { Link } from "gatsby"
import TokenButton from "../buttontoken/buttontoken"
import AiDb from "../../db/AiDb"


const IsiToken = () => {
  const [nomortoken1, setNomorToken1] = useState("");
  const [nomortoken2, setNOmorToken2] = useState("Tdk ada token");

useEffect(() => {
  AiDb.get("token", "id").then(nomortoken2 => setNOmorToken2(nomortoken2 || []));
}, []);


function simpantoken(isi){
  nomortoken2.push(isi);
  const newToken = [...nomortoken2]
  setNOmorToken2(newToken);
  if(typeof window !== "undefined"){
    AiDb.set("token", newToken);
  }
  return console.log("token diterima", nomortoken2);
}

  function updateInput(value) {
    setNomorToken1(value);
  }


 return(
    <div className="wrapper2">
        <div className="form-wrapper1">
          <h1>Masukkan Token Anda</h1>
          <form onSubmit="#" noValidate>
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
              onClick={() => simpantoken(nomortoken1)}>
                  <TokenButton></TokenButton>
              </Link>
            </div>

          </form>
        </div>
      </div>
 );   
};

export default IsiToken
