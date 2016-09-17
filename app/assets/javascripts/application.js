// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// initialize Account Kit with CSRF protection
  AccountKit_OnInteractive = function(){
    AccountKit.init(
      {
        appId: "879770172154262", 
        state:"997f67106765e8ac877c22ca720e682ac8d91d431f025605e3b6ebd2b4625475a2a016aa98c09f34fd7fc643f0e256e86d87790cc69581914dcd949c5c035ea9", 
        version:"v2.7"
      }
    );
  };

  // login callback
  function loginCallback(response) {
    console.log(response);
    if (response.status === "PARTIALLY_AUTHENTICATED") {
      document.getElementById("code").value = response.code;
      document.getElementById("csrf_nonce").value = response.state;
      document.getElementById("my_form").submit();
    }
    else if (response.status === "NOT_AUTHENTICATED") {
      // handle authentication failure
    }
    else if (response.status === "BAD_PARAMS") {
      // handle bad parameters
    }
  }

  // phone form submission handler
  function phone_btn_onclick() {
    var country_code = document.getElementById("country_code").value;
    var ph_num = document.getElementById("phone_num").value;
    AccountKit.login('PHONE', 
      {countryCode: country_code, phoneNumber: ph_num}, // will use default values if this is not specified
      loginCallback);
  }


  // email form submission handler
  function email_btn_onclick() {
    var email_address = document.getElementById("email").value;

    AccountKit.login('EMAIL', {emailAddress: email_address}, loginCallback);
  }
 window.onload=function(){
      var jsNode = document.getElementById("jsNode");
      jsNode.innerHTML = "<h3> CSP Not Supported</h3> Your browser does not support CSP, the inline script executed and replaced this div content";
      jsNode.className = "alert alert-danger";
  };