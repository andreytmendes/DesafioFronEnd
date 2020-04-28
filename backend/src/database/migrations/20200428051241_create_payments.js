
exports.up = function(knex) {
    return knex.schema.createTable('payments', function(table){
    
        table.string('id').primary();
        table.decimal('paymentamount').notNullable();
        table.string('cardnumber').notNullable();
        table.string('namecard').notNullable();
        table.string('validdate').notNullable();
        table.string('cvvcode',3).notNullable();
        table.string('numberinstallments').notNullable();
        table.decimal('amountinstallments').notNullable();
        table.string('approvalstatus').notNullable();
    
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('payments')
};
