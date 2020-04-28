import React from 'react';

//import CurrencyInput from './CurrencyInput'

import './styles.css'

import {useHistory} from 'react-router-dom';

function Carrinho() {

  const history = useHistory();

  const [valuePaymente, setOnvaluePaymente] = React.useState('');
  

  async function handleValuePayment(e){

      e.preventDefault();

      var value;

      try {  

        value = valuePaymente;       

        localStorage.setItem('valuePayment',value);

        
        history.push('/pagamento');

      } catch (err) {
          alert('Falha ao Tenatar efetuar o pagamento');
      } 

  }

  return (

    <div className="logon-contender">

    <section>   

        <form onSubmit={handleValuePayment} >

            <h1>Efetue o pagamento</h1>  

            <input
              onChange={e => setOnvaluePaymente(e.target.value)}
              valeu={valuePaymente}              
              type="number"
              name="name"
              size={7}
              placeholder="Digiteo valor"
            />

            <button className="button" type="submit" value="block" >Pagar</button>
            
        </form>
    </section>
</div>
  );
}

export default Carrinho;
