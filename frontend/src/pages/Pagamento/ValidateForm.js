

export function ValidateNumberCard(numberCard){

    var vMessenger = 'Númbero do cartão válido';

    var vValid = false;

    if (numberCard.length === 19)
    {
        var sum = 0;

        var val = numberCard.trim().replace(" ","").replace(" ","").replace(" ","");

        for (var i = 0; i < val.length; i++) {

            var intVal = parseInt(val.substr(i, 1));

            if (i % 2 === 0) {
                intVal *= 2;
                if (intVal > 9) {
                    intVal = 1 + (intVal % 10);
                }
            }
            sum += intVal;
        }

        vValid = ((sum % 10) === 0);

        vMessenger = vValid === false ? 'Número de cartão inválido' : vMessenger;
    

    }else{

        vMessenger = 'Número de cartão inválido';
    }

    return {vMessenger,vValid}
}

export function ValidateDate(date) {

    var vMessenger = 'Data válida';

    var vValid= false;

    var val = date.replace("/","");

    var vYear = parseInt(val.substr(2,2));    

    var today = new Date();

    var vMonth = parseInt(val.substr(0,2));

    var vDateMonth = today.getMonth()+1;

    var vDateYearString = today.getFullYear().toString();//  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var vDateYearInt = parseInt(vDateYearString.substr(0,vDateYearString.length - 2));

    if (vYear >= vDateYearInt && vYear < 2050)
    {        
        vValid = true;
    }
    else
    {
        vMessenger = 'Data inválida';
    } 
    
    if(vValid && vMonth > 0 && vMonth < 13){

        if (vYear === vDateYearInt && vMonth <= vDateMonth){
            vValid = false;
            vMessenger = 'Data inválida';
        }else{

            vValid = true;
            vMessenger = 'Data válida';
        }
    }
    else
    {
        vValid = false;
        vMessenger = 'Data inválida';
    }

    return {vMessenger,vValid}
}

export function ValidateName(name) {

    var vMessenger = 'Nome válido';

    var vValid = !!name.match(/^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/);

    if (vValid === false){

        vMessenger = 'Insira seu nome completo';

    }

    return {vMessenger,vValid}
}
    


export function ValidateCVV(pCVV) {

    var vMessenger = 'Código inválido';

    var vValid = false;

    if (pCVV.length === 3){

        vMessenger = 'Código válido';
        
        vValid= true;
    }
    
    return {vMessenger,vValid}
}