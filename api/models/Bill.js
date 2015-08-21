/**
 * Bill.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    // identifiers
    number: {
      type: 'integer'
    },
    // state of the bill
    status: {
      type: 'string',
      enum: ['draft', 'sent', 'paid', 'complete']
    },
    currency: {
      type: 'string',
      enum: ['PKR', 'USD']
    },
    // should the invoice page show the btc/fiat conversion rate
    showRate: {
      type: 'boolean'
    },
    // is the bill archived in the dashboard view
    archived: {
      type: 'boolean'
    },

    /*
     * Buyer information
     */
    // Buyer Name
    buyerName: {
      type: 'string'
    },
    // Buyer address line 1
    buyerAddress1: {
      type: 'string'
    },
    // Buyer address line 2
    buyerAddress2: {
      type: 'string'
    },
    // city of the buyer
    buyerCity: {
      type: 'string'
    },
    // state of provice of buyer
    buyerState: {
      type: 'string'
    },
    // zip or postal code of buyer
    Buyerzip: {
      type: 'string'
    },
    // address of buyer
    buyerCountry: {
      type: 'string'
    },
    buyerEmail: {
      type: 'string'
    },
    buyerPhone: {
      type: 'string'
    },

    /*
     * Invoice information
     */
     dueDate : {
       type: 'date'
     },
     
  }
};
