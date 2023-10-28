//'use strict';
var elem = document.getElementById('submit');
clientsecret = elem.getAttribute('data-secret');

// Set up Stripe.js and Elements to use in checkout form
var style = {
base: {
  color: "#000",
  lineHeight: '2.4',
  fontSize: '16px'
}
};

var form = document.getElementById('payment-form');

form.addEventListener('submit', function(ev) {
ev.preventDefault();

var custName = document.getElementById("custName").value;
var custAdd = document.getElementById("custAdd").value;
var custAdd2 = document.getElementById("custAdd2").value;

var status = 'succeeded'

  $.ajax({
    type: "POST",
    url: 'http://128.140.106.0:8000/orders/add/',
    /* url: 'http://127.0.0.1:8000/orders/add/', */
    data: {
      order_key: clientsecret,
      csrfmiddlewaretoken: CSRF_TOKEN,
      action: "post",
    },
    success: function (json) {
        console.log('success')
      console.log(clientsecret)
      
        if (status === 'succeeded') {
            console.log('payment processed')
            // There's a risk of the customer closing the window before callback
            // execution. Set up a webhook or plugin to listen for the
            // payment_intent.succeeded event that handles any business critical
            // post-payment actions.
            window.location.replace("http://128.140.106.0:8000/payment/orderplaced/");
            /* window.location.replace("http://127.0.0.1:8000/payment/orderplaced/"); */
        }
    },
    error: function (xhr, errmsg, err) {
        console.log('error')
        console.log(clientsecret)
    },
  });



});