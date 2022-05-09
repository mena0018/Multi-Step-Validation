import { useRef } from "react";
import "./SubForm.css";


export default function Allergies({ modifyIndex }) {
  const allCheckboxes = useRef([]);

  const preventFunc = (e) => {
    e.preventDefault();

    const newData = {
      allergies: [],
    };

    allCheckboxes.current.forEach((checkboxRef) => {
      if (checkboxRef.checked) {
        newData["allergies"].push(checkboxRef.value);
      }
    });

    modifyIndex(5, newData);
  };

  const addRef = (element) => {
    if (element && !allCheckboxes.current.includes(element)) {
      allCheckboxes.current.push(element);
    }
  };


  return (
    <div>
      <form className="checkbox-form" onSubmit={preventFunc}>
        <p>Quelles sont tes allergies ? </p>

        <span>Choix multiples.</span>

        <label htmlFor="milk"> Lait </label>
        <input type="checkbox" ref={addRef} id="milk" value="milk" />

        <label htmlFor="pollen"> Pollen </label>
        <input type="checkbox" id="pollen" ref={addRef} value="pollen" />

        <label htmlFor="nuts"> Noix </label>
        <input type="checkbox" id="nuts" ref={addRef} value="nuts" />

        <label htmlFor="eggs"> Oeufs </label>
        <input type="checkbox" id="eggs" ref={addRef} value="eggs" />

        <label htmlFor="shellfish"> Fruits de mer </label>
        <input type="checkbox" id="shellfish" ref={addRef} value="shellfish" />


        <div className="container-nav-btns">
          <button type="button" className="prev" onClick={() => modifyIndex(3)}>
            Précédent
          </button>
          
          <button>Valider</button>
        </div>
      </form>
    </div>
  );
}
