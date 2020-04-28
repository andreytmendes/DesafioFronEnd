import React from 'react';

import './styles.css'

function Confirmacao() {

  // const [items, setItems] = React.useState([]);

  const [itemss, setItemss] = React.useState([]);

  const addItem = () => {
    setItemss([
      ...itemss,
      {
        id: itemss.length,
        value: 'f'
      }
    ]);
  };

  const [loading, setLoading] = React.useState(true);


  const [items, setItems] = React.useState([
    { label: "Loading ...", value: "" }
  ]);

  const [value, setValue] = React.useState(
    "R2-D2"
  );

  React.useEffect(() => {

    let unmounted = false;

    async function getCharacters() {

      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const body = await response.json();
      if (!unmounted) {
        setItems(body.results.map(({ name }) => ({ label: name, value: name })));
  
        setLoading(false);
      }

    }
    getCharacters();
    return () => {
      unmounted = true;
    };
  }, []);


  // const [items] = React.useState([
  //   {
  //     label: "Luke Skywalker",
  //     value: "Luke Skywalker"
  //   },
  //   { label: "C-3PO", value: "C-3PO" },
  //   { label: "R2-D2", value: "R2-D2" }
  // ]);

  
  
  return (    
      
      <div className="content">
        <hi className="pag">Confirmacao </hi>
          <div className="con">
              <select  disabled={loading} value={value}
              onChange={e => setValue(e.currentTarget.value)} >
              {items.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
              </select>

              

          </div>

          <button onClick={addItem}>Add a number</button>




          <ul>
            {itemss.map(itemss => (
              <li key={itemss.id}>{itemss.value}</li>
            ))}
          </ul>       
   

      </div>   
     

  );
}

export default Confirmacao;