import React from "react"
import "./rulesbox.css"
import { Link } from "gatsby"
import RulesButton from "../RulesButton/rulesbutton"


const RulesBox = () => {
 return(
    <div className="wrapper4">
        <div className="form-wrapper">
          <h1>Rules/Peraturan</h1>
          <form onSubmit="#" noValidate>
            <div className="aturan">
                    <p>
                         Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.The passage is attributed to an unknown typesetter in the 15 th century who is thought to have scrambled parts of Cicero 's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
                            The purpose of lorem ipsum is to create a natural looking block of text(sentence, paragraph, page, etc.) that doesn 't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
                    </p>
            </div>

          </form>
          <Link to="/ujian/lamanujian/">
               <RulesButton></RulesButton>
          </Link>         
        </div>
      </div>
 );   
};

export default RulesBox

