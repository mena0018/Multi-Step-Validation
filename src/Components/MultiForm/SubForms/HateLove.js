import { useState } from "react";
import "./SubForm.css";


export default function HateLove({ modifyIndex }) {
  const preventFunc = (e) => e.preventDefault();

  const [formData, setFormData] = useState({
    prefs: {
        love: "",
        hate: ""
    }
  });

  const handleTxtArea = (e, pref) => {
      if (pref === 'love') {
          setFormData({
              prefs: {
                  ...formData.prefs,
                  love: e.target.value
              }
          })
      }
      else if (pref === 'hate') {
          setFormData({
              prefs: {
                  ...formData.prefs,
                  hate: e.target.value
              }
          })
      }
  }
 

  return (
    <form className='preferences-form' onSubmit={preventFunc}>

        <p>Parle-nous des aliments que tu préfères et que tu déteste !</p>

        <label htmlFor='prefered'>Tes aliments préférés, séparés par une virgule : </label>
        <textarea id="prefered" 
                  placeholder='Un ou plusieurs, si tu en as'
                  onChange={e => handleTxtArea(e, 'love')} >   
        </textarea>

        <label htmlFor='hated'>Les aliments que tu ne supporte pas, séparés par une virgule : </label>
        <textarea id="hated"
                   placeholder='Un ou plusieurs, si tu en as'
                   onChange={e => handleTxtArea(e, 'hate')} >   
        </textarea>

        <div className="container-nav-btns">
        <button type="button" className="prev" onClick={() => modifyIndex(2)}>
            Précédent
        </button>
        
        <button onClick={() => modifyIndex(6, formData)}>Valider</button>
        </div>

    </form>
  );
}
