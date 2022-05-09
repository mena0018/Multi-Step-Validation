import { useRef } from "react";
import "./SubForm.css";


export default function FoodStyle({ modifyIndex }) {
  const allCheckboxes = useRef([]);

  const preventFunc = (e) => {
    e.preventDefault();

    const newData = {
      foodStyle: [],
    };

    allCheckboxes.current.forEach((checkboxRef) => {
      if (checkboxRef.checked) {
        newData["foodStyle"].push(checkboxRef.value);
      }
    });

    modifyIndex(4, newData);
  };

  const addRef = (element) => {
    if (element && !allCheckboxes.current.includes(element)) {
      allCheckboxes.current.push(element);
    }
  };


  return (
    <div>
      <form className="checkbox-form" onSubmit={preventFunc}>
        <p>Quelles sont tes cuisisnes préférées ? </p>

        <span>Choix multiples.</span>

        <label htmlFor="italian"> Italienne </label>
        <input type="checkbox" ref={addRef} id="italian" value="italian" />

        <label htmlFor="japanese"> Japonaise </label>
        <input type="checkbox" id="japanese" ref={addRef} value="japanese" />

        <label htmlFor="indian"> Indienne </label>
        <input type="checkbox" id="indian" ref={addRef} value="indian" />

        <label htmlFor="thai"> Thaïlandaise </label>
        <input type="checkbox" id="thai" ref={addRef} value="thai" />

        <label htmlFor="french"> Française </label>
        <input type="checkbox" id="french" ref={addRef} value="french" />

        <label htmlFor="chinese"> Chinoise </label>
        <input type="checkbox" id="chinese" ref={addRef} value="chinese" />

        <div className="container-nav-btns">
          <button type="button" className="prev" onClick={() => modifyIndex(2)}>
            Précédent
          </button>
          
          <button>Valider</button>
        </div>
      </form>
    </div>
  );
}
