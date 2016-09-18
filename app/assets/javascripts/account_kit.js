$(function(){
    AccountKit_OnInteractive = function(){
    AccountKit.init(
      {
        appId: "<YOUR_FACEBOOK_APP_ID>", 
        state:"<ANY_NON_GUESSABLE_STRING",
        version:"v1.0"
      }
    );
  };

  // login callback
  function loginCallback(response) {
    console.log(response);
    if (response.status === "PARTIALLY_AUTHENTICATED") {
      $("#code").value = response.code;
      $("#csrf_nonce").value = response.state;
      $("#my_form").submit();
    }
    else if (response.status === "NOT_AUTHENTICATED") {
      // handle authentication failure
    }
    else if (response.status === "BAD_PARAMS") {
      // handle bad parameters
    }
  }

$("#phone_btn").click(function () {
    var country_code = $("#country_code").value;
    var ph_num = $("#phone_num").value;
    AccountKit.login('PHONE', 
      {countryCode: country_code, phoneNumber: ph_num},
      loginCallback);
  });

  $("#email_btn").click( function () {
    var email_address = $("#email").value;
    AccountKit.login('EMAIL', {emailAddress: email_address}, loginCallback);
  });
});
  