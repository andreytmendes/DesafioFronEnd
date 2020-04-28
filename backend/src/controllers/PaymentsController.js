const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index (request, response) {

        const payments = await connection('payments').select('*');   

        return response.json(payments);
    },
    async create(request, response){        
        
        const {paymentamount,cardnumber,namecard,validdate,cvvcode,numberinstallments,amountinstallments,approvalstatus} = request.body;        

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('payments').insert({

            id,
            paymentamount,
            cardnumber,
            namecard,
            validdate,
            cvvcode,
            numberinstallments,
            amountinstallments,
            approvalstatus
        });    

        return response.json({ id });//id é o retorno 
    },
    async indexfilter(request , response){

        const { cardnumber } = request.params;

        const payments = await connection('payments')
            .where('cardnumber', cardnumber)
            .select('*');

        return response.json(payments);
    },

    async delete(request, response){

        const { id } = request.params;

        //const cardnumber = request.headers.cardNumberFilter;

        const payments = await connection('payments')
            .where('id', id)
            .select('id')
            .first();

        if (!payments){

            return response.status(401).json({ error: 'Operation not permitted.'})
        }

        await connection('payments').where('id', id).delete();

        return response.status(204).send();

    }
};