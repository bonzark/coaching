const mongoose = require("mongoose");

const paymentDetailSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  //It will raw json that we will receive from stripe webhook. For Audit purpose 
  details: {
    type: String,
    required: true,
  }
});

const PaymentDetail = mongoose.model("PaymentDetails", paymentDetailSchema);

module.exports = PaymentDetail;