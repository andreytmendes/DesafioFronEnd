import React from 'react';

import{BrowserRouter,Route,Switch} from 'react-router-dom';

import Carrinho from './pages/Carrinho'; 
import Confirmacao from './pages/Confirmacao';
import Pagamento from './pages/Pagamento';

export default function Routes(){

  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Carrinho} />
        <Route path="/confirmacao" component={Confirmacao} />
        <Route path="/pagamento" component={Pagamento} />
      </Switch>
    </BrowserRouter>
  );
}