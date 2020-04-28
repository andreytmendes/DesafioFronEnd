//Importa Libs
import React,{useState} from 'react';
import MaskInput from 'react-maskinput';
import {Link,useHistory} from 'react-router-dom'

//Importa CSS
import './styles.css'
import './stylesResponsive.css'

//Importa API
import api from '../../services/api.js'

//Importa Incones e imagens do projeto
import {FiChevronLeft,FiChevronRight}from 'react-icons/fi';
import {MdInfo}from 'react-icons/md';
import {IoIosCheckmarkCircle}from 'react-icons/io';
import CardImg from '../../assets/FrontCardEmpty.svg';
import CardRearImg from '../../assets/RearCard.svg'; 
import CardRearImgEmpty from '../../assets/RearCardEmpty.svg';
import CardFilledImg from '../../assets/FronCard.svg'; 
import VisaImg from '../../assets/Visa.png';
import iconImg  from '../../assets/IconCard.svg';
import iconImgtwo  from '../../assets/2-circle.gif';
import iconImgthree  from '../../assets/3-circle.gif';

//Importa JS com funçõe para validar campos
import {ValidateNumberCard,ValidateDate,ValidateName,ValidateCVV} from  './ValidateForm'

//Cria tops da página separados, pois um e para Mob e outro para PC
function TopMobile() {
  return (
    <div className="content-top-mobile"> 

      <Link to="/">
        <FiChevronLeft size={16} color="#DE4B4B" />    
      </Link>  

      <span id="etapa">Etapa 2 </span>        
      <span id="etapaAfter">de 3</span>

    </div>
  );
}
function AddAcard() {
  return (
    <div className="content-text">

      <img src={iconImg} alt="Card"/>
      <span >Adicione um novo cartão de crédito</span>

    </div>
  );
}

//Pagina principal de pagamento
function Pagamento()  {
 
  const valuePayment = localStorage.getItem('valuePayment');

  const history = useHistory();

  //Cria Variaveis e funcões para visualizar campos na imagem do cartão
  const [onNumberCard, setOnNumberCard] = React.useState('');
  const [onDate, setOnDate] = React.useState('');
  const [onName, setOnName] = React.useState('');
  const [onCVV, setOnCVV] = React.useState('');
  const [onRearCard, setRearCard] = React.useState(false);

  //Cria Variaveis e funcões para visualizar erros no Form
  const [messageErrorNumberCard, setErrorNumberCard] = React.useState('');
  const [messageErrorName, setErrorName] = React.useState('');
  const [messageErrorDate, setErrorDate] = React.useState('');
  const [messageErrorCVV, setErrorCVV] = React.useState('');
  const [messageErrorinstallment, setErrorInstallment] = React.useState('');


  //Function Valida Campos Form
  async function handleSubmitPayment(e){

      e.preventDefault();
      
      const data ={
        onNumberCard,
        onDate,
        onName,
        onCVV,
        valueinstallment,
      };      

      try { 

        if (data.onNumberCard !== "" && data.onDate !== "" && data.onName !== "" && data.onCVV !== ""){

          var vError = false;

          var vValidNumberCard = ValidateNumberCard(data.onNumberCard);
          var vValidDate = ValidateDate(data.onDate);
          var vValidName = ValidateName(data.onName);
          var vValidCVV = ValidateCVV(data.onCVV);
          var vValidinstallment = data.valueinstallment !== 'Número de parcelas' && data.valueinstallment !== '' ? true : false;

          if (vValidNumberCard.vValid === false){
            setErrorNumberCard(vValidNumberCard.vMessenger);
            vError = true;
          }else{
            setErrorNumberCard('');            
          }

          if (vValidDate.vValid === false){
            setErrorDate(vValidDate.vMessenger);
            vError = true;
          }else{
            setErrorDate('');
            
          }

          if (vValidName.vValid === false){
            setErrorName(vValidName.vMessenger);
            vError = true;
          }else{
            setErrorName('');
            
          }

          if (vValidCVV.vValid === false){
            setErrorCVV(vValidCVV.vMessenger);
            vError = true;
          }
          else{
            var result = '';
            setErrorCVV(result);            
          }

          if (vValidinstallment === false){
            setErrorInstallment('Insira o número de parcelas');
            vError = true;
          }else{
            setErrorInstallment('');            
          }


          if (vError){

            return false;   
          }
          else{

            
            const pos = valueinstallment.indexOf('s')-6;

            const dataApi ={
              paymentamount : valuePayment,
              cardnumber : onNumberCard,
              namecard: onName,
              validdate : onDate,
              cvvcode: onCVV,
              numberinstallments :  valueinstallment.substr(0,2),
              amountinstallments : valueinstallment.substr(6,pos),
              approvalstatus : "Aguardando"

            }

            const response = await api.post('pagar',dataApi);

            if (response.statusText === "OK")
            {
              history.push('/confirmacao');
            }else{
              alert('Erro ao inserir dados no banco de Dados.');
            }

            

          }             

        }
        else{
          alert('Preencha todos os campos');
        }

      } catch (err) {
          alert('Falha ao Tentar Validar Campos : '+err);
      }

  }

  
//Function para tratar cores do texto dentro do DropDown
  const [oncolor, setColor] = useState(false);

  
    async function handleChangeSelect(e){

    e.preventDefault();      

    try { 

      setValue(e.currentTarget.value);
      setColor(true);


    } catch (err) {
        alert('Falha ao Tentar tratar DropDown');
    }

}

// Carrega Parcelas Calculadas a partir do valor digitado e guardar em objeto para inserir no DropDown

  const [loading, setLoading] = useState(true);  

  const [items, setItems] =  useState([
    { label: " ", valueinstallment: "" }
  ]);

  const [valueinstallment, setValue] = useState("Número de parcelas");  

  React.useEffect(() => {

    let unmounted = false;

    async function getCharacters() {      
      
      if (!unmounted) {

        for(let i=1; i<13; i++){

          var installments = (i< 10 ? "0"+(i.toString()) : i.toString())+'x '+'R$'+(parseFloat(valuePayment/i).toFixed(2)).toString()+' sem juros';

          const newItemObj = {label:installments.replace('.',','),valueinstallment:installments.replace('.',',')}

          items.push(newItemObj);
        }

        setItems(items);       
  
        setLoading(false);
      }

    }
    getCharacters();
    return () => {
      unmounted = true;
    };
  }, []);

  return (
    
    <div className="pagamento-container">
      <div className="nav">

      </div>
      
      <div className="content">
        <section>

          <Link className="back-linkPagamento" to="/">
            <FiChevronLeft  size={16} color="#FFFFF" />
                        Alterar Forma de Pagamento
          </Link>

          <TopMobile />

          <AddAcard />   

          <div className="cardEmpty" style={{display: onName !== "" || onNumberCard !== "" || onDate !== "" || onRearCard === true ? 'none':'block'}}>
            <p id="numberCardEmpty">**** **** **** ****</p>
            <p id="titular">NOME DO TITULAR</p>
            <p id="dateVal">00/00</p>
            <img id="cardFront" src={CardImg} alt="IMAGEM CARTÃO VAZIO"/>
          </div>
          
          <div className="cardFilled" style={{display: (onName === "" && onNumberCard === "" && onDate === "") || onRearCard === true ? 'none':'block'}}>
            <img id="imgVisa" src={VisaImg} alt="CARTÃO VISA"/>
            <p id="numberCard">{onNumberCard}</p>
            <p id="titular">{onName}</p>
            <p id="dateVal">{onDate}</p>
            <img id="cardFront" src={CardFilledImg} alt="IMAGEM CARTÃO PREENCHIDO"/>
          </div> 

          <div className="cardEmptyRear" style={{display: onRearCard === false ? 'none':'block'}}>
            <p id={onCVV !== "" ? "numberCVVFilled" : "numberCVV"}>{onCVV !== "" ? onCVV : "***"}</p>            
            <img id="cardFront" src={onCVV !== "" ? CardRearImg : CardRearImgEmpty} alt="IMAGEM de trás do CARTÃO VAZIO"/>
          </div>               

        </section>

        <div className="content-form">

          <div className="content-top">

            <IoIosCheckmarkCircle size={16} color="#DE4B4B" />          
            <span id="spanCarrinho" >Carrinho</span>

            <FiChevronRight size={16} color="#DE4B4B" />
            <img id="iconImgtwo" src={iconImgtwo} alt="step pagamento"/>
            <span >Pagamento</span>

            <FiChevronRight size={16} color="#DE4B4B" />
            <img src={iconImgthree} alt="step confirmação"/>
            <span >Confirmação</span>

          </div>

          <form onSubmit={handleSubmitPayment}>         

            <div className="input-container">
              <MaskInput
                  onChange={e => setOnNumberCard(e.target.value)}                  
                  mask={'0000 0000 0000 0000'}
                  value={onNumberCard}
                  size={20}
                  
                  id="name"
                  // className="input" 
                  className={messageErrorNumberCard === "" ? "input" : "InputNumberCardred"}
                  type="text"
                  pattern=".+"
                  required
              />
              
              <label className="label" htmlFor="name">Número do Cartão</label>
              <label className="labelError" htmlFor="name"style={{display: messageErrorNumberCard === '' ? 'none':'block'}}>{messageErrorNumberCard}</label>
            </div>

            <div className="input-container containerMobile">
              <input 
              id="name"
              maxLength='23'  
              // className="input" 
              className={messageErrorName === "" ? "input" : "InputNamered"}
              type="text" 
              onChange={e => setOnName(e.target.value)}
              value={onName}
              pattern=".+" 
              required />
              <label className="label" htmlFor="name">Nome (igual ao cartão)</label>
              <label className="labelError" htmlFor="name"style={{display: messageErrorName === '' ? 'none':'block'}}>{messageErrorName}</label>
            </div>

            <div className="input-group">             
              <div className="input-container">
              <MaskInput
                  onChange={e => setOnDate(e.target.value)}                                  
                  mask={'00/00'}
                  value={onDate}
                  size={5}
                
                  id="name"
                  // className="input valInput"
                  className={messageErrorDate === "" ? "valInput" : "InputDatered valInput"}
                  type="text"
                  pattern=".+"
                  required
              />                
                <label className="label" htmlFor="name">Validade</label>
                <label className="labelError" htmlFor="name"style={{display: messageErrorDate === '' ? 'none':'block'}}>{messageErrorDate}</label>

              </div>
              <div className="input-container">
                  <MaskInput
                      onChange={e => setOnCVV(e.target.value)}  
                      onFocus={() => setRearCard(true)}   
                      onBlur={() => setRearCard(false)}                          
                      mask={'000'}
                      value={onCVV}
                      size={22}  
                      // style={{ border-bottom-color:"Red"}} 
                      border-bottom-color="Red"             
                      id="name"
                      className={messageErrorCVV === "" ? "Input" : "InputCVVred"}
                      type="text"
                      pattern=".+"
                      required
                  />                          
                  <label className="label" htmlFor="name">CVV&nbsp; <MdInfo size={16} title="Código de Segurança do Cartão , está no verso."alt="Informação"/></label>
                  <label className="labelError" htmlFor="name"style={{display: messageErrorCVV === '' ? 'none':'block'}}>{messageErrorCVV}</label>
                  
              </div>
            </div>

            <div className="input-container last-container">
              
              <select  
                disabled={loading} 
                value={valueinstallment} 
                style={{ color: oncolor ? 'Black' : "#C9C9C9"}} 
                onChange={handleChangeSelect} 
                className={messageErrorinstallment === "" ? "select" : "selectRed"}
              >
              
              <option defaultValue hidden >Número de parcelas</option>
              {items.map(({ label, valueinstallment }) => (
                    <option key={valueinstallment} value={valueinstallment}>
                      {label}
                    </option>
                  ))}
              </select> 

              <label className="labelError" htmlFor="name"style={{display: messageErrorinstallment === '' ? 'none':'block'}}>{messageErrorinstallment}</label>            
            </div>           

            <button className="buttonPagamento" type="submit" value="block" > CONTINUAR</button>

          </form>
        </div>        
      </div>
  </div>
  );
}

export default Pagamento;