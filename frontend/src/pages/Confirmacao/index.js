import React from 'react';


import './styles.css'

import {useHistory} from 'react-router-dom';

function Confirmacao() {

  const crypto = require('crypto');

  const id = crypto.randomBytes(8).toString('HEX');

  const history = useHistory();

  async function handleNewPayment(e){

    e.preventDefault();

    try {  
      
      history.push('/');

    } catch (err) 
    {
        alert('Falha ao Tentar efetuar novo pagamento');
    } 

}
  
  return (    
      
      <div className="content-confirm">
        <h1 >Confirmação</h1>

          <h2> NÚMERO DA SOLICITAÇÂO : {id}</h2>
          
          <p>Seu pagamento foi solicitado com sucesso</p>
          <p>Assim que for autorizado entraremos em contato</p>
          <p>Obrigado</p>

          <button 
          className="buttonNew" 
          type="submit" 
          value="block" 
          onClick={handleNewPayment}
          >Novo Pagamento</button>
            

      </div>       

  );
}

export default Confirmacao;