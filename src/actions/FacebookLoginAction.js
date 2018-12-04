

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGIN_REQUEST_FAIL = "LOGIN_REQUEST_FAIL";


export const loginRequest = () => {
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);

    if (response.status === 'connected') {
      testAPI();
    } else {
      document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
    }
  }

  window.fbAsyncInit = function() {
    window.FB.init({
      appId            : '1900529580063948',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.2'
    });

    window.FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    window.FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
    });
  }
};

loginRequest();
