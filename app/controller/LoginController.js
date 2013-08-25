Ext.define('JCertifBO.controller.LoginController', {
	extend : 'Ext.app.Controller',
	views : ['Login'],
	stores: ['AuthProviders'],
	model : 'GoogleToken',
  requires : [
      'Ext.util.Cookies'
  ],
	init : function() {
		this.control({
			'login button[action=login]' : {
				click : this.connect
			},
			'login button[action=reset]' : {
				click : this.reset
			},
			'login button[action=googleplus-login]' : {
				click : this.googleConnect
			},
			'login button[action=github-login]' : {
				click : this.githubConnect
			},
			'appheader button[action=logout]' : {
				click : this.logout
			}
		});
	},
	
	onLaunch : function(){
	    //check if usre is already authenticated
      var email = Ext.util.Cookies.get('user');
      if(email != undefined){
        Ext.create('JCertifBO.view.Home');
      }else{
        Ext.create('JCertifBO.view.Login');
      }
      
  },
  
	connect : function(btn) {
		var win = btn.up('window'), form = win.down('form').getForm(), emailData = win.down('form').down('#email').getValue();
    	
		if (form.isValid()) {
			Ext.Ajax.request({
				url : BACKEND_URL + '/admin',
				loadMask: true,
				jsonData : Ext.JSON.encode(form.getValues()),
				success : function(response) {				  
				  var accessToken = Ext.decode(response.responseText).access_token;		
          Ext.util.Cookies.set('user',emailData);
          Ext.util.Cookies.set('access_token',accessToken);
          Ext.util.Cookies.set('provider', 'userpass');
          win.close();
          Ext.create('JCertifBO.view.Home');
				},
				failure : function(response) {
					Ext.MessageBox.show({
						title : 'Login Failed',
						msg : response.responseText,
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.ERROR
					});
				}
			});
    }
	},
	
	googleConnect : function(btn) {
	   var loginWin = btn.up('window'), baseUrl = this.getAuthProvidersStore().findRecord('name', 'google').get('authorizationUrl'),
        clientId = this.getAuthProvidersStore().findRecord('name', 'google').get('clientId'),
        scope = this.getAuthProvidersStore().findRecord('name', 'google').get('scope');
		
		_url = baseUrl + '?client_id='+ clientId +'&response_type=token&scope='+scope+'&redirect_uri='+BACKOFFICE_URL;
		var socialWin = window.open(_url, "gplusLoginWindow", 'width=800, height=600'); 
    var acToken;
    var controller = this;
    var pollTimer = window.setInterval(function() { 
        try {
            if (socialWin.document.URL.indexOf(BACKOFFICE_URL) != -1) {
                window.clearInterval(pollTimer);
                var params = {}, queryString = socialWin.location.hash.substring(1),
                regex = /([^&=]+)=([^&]*)/g, m;
                while (m = regex.exec(queryString)) {
                  params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
                }
                error =  params['error'];
                acToken =  params['access_token'];                                 
                if(error != undefined){                
                  Ext.MessageBox.show({
          					title : 'Login Failed',
          					msg : error,
          					buttons : Ext.MessageBox.OK,
          					icon : Ext.MessageBox.ERROR
          				});
                }
                controller.validateGoogleToken(acToken, loginWin);                                
                socialWin.close(); 
            }
        } catch(e) {
          console.log(e)
        }
    }, 500); 
     
	},
	
	githubConnect : function(btn) {
	   var loginWin = btn.up('window'), baseUrl = this.getAuthProvidersStore().findRecord('name', 'github').get('authorizationUrl'),
        clientId = this.getAuthProvidersStore().findRecord('name', 'github').get('clientId'),
        clientSecret = this.getAuthProvidersStore().findRecord('name', 'github').get('clientSecret'),
        scope = this.getAuthProvidersStore().findRecord('name', 'github').get('scope');
		
		_url = baseUrl + '?client_id='+ clientId + '&redirect_uri='+BACKOFFICE_URL
		var socialWin = window.open(_url, "githubLoginWindow", 'scrollbars=1, width=800, height=600'); 
    var code;
    var controller = this;
    var pollTimer = window.setInterval(function() { 
        try {
            if (socialWin.document.URL.indexOf(BACKOFFICE_URL) != -1) {
                window.clearInterval(pollTimer);
                var params = {}, queryString = socialWin.document.URL.substring(socialWin.document.URL.indexOf('?')+1),
                regex = /([^&=]+)=([^&]*)/g, m;
                while (m = regex.exec(queryString)) {
                  params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
                }
                error =  params['error'];
                code =  params['code']; 
                if(error != undefined){                
                  Ext.MessageBox.show({
          					title : 'Login Failed',
          					msg : error,
          					buttons : Ext.MessageBox.OK,
          					icon : Ext.MessageBox.ERROR
          				});
                }
                controller.validateGithubToken(clientId, clientSecret, code, loginWin);                                  
                socialWin.close();               
            }
        } catch(e) {
          console.log(e)
        }
    }, 500); 
     
	},
  
  validateGoogleToken : function(accessToken, loginWindow){
    Ext.Ajax.useDefaultXhrHeader = false;
    Ext.Ajax.cors = true;
    Ext.Ajax.request({
			url : 'https://www.googleapis.com/oauth2/v1/userinfo?access_token='+accessToken,
			loadMask: false,
			success : function(response) {				  
			  var email = Ext.decode(response.responseText).email;
	      var name = Ext.decode(response.responseText).name;
	      var picture = Ext.decode(response.responseText).picture;
	      Ext.util.Cookies.set('user',email);
        Ext.util.Cookies.set('user_name',name);
        Ext.util.Cookies.set('picture',picture);
        Ext.util.Cookies.set('access_token',accessToken);
        Ext.util.Cookies.set('provider', 'google');
        Ext.create('JCertifBO.view.Home');
        loginWindow.close();
			},
			failure : function(response) {
				Ext.MessageBox.show({
					title : 'Login Failed',
					msg : response.responseText,
					buttons : Ext.MessageBox.OK,
					icon : Ext.MessageBox.ERROR
				});
			}
		});
  },  
  
  validateGithubToken : function(clientId, clientSecret, code, loginWindow){
    Ext.Ajax.useDefaultXhrHeader = false;
    Ext.Ajax.cors = true;
    Ext.Ajax.timeout = 60000;
    Ext.Ajax.request({
			url : 'https://github.com/login/oauth/access_token',
			params: {
			  client_id: clientId,
			  client_secret: clientSecret,
			  code: code
      },
      mothod: 'POST',
			loadMask: false,
			success : function(response) {				  
			  var accessToken = Ext.decode(response.responseText).access_token;
			  
			  Ext.Ajax.request({
    			url : 'https://api.github.com/user?access_token='+accessToken,
    			loadMask: false,
    			success : function(response) {				  
    			  var email = Ext.decode(response.responseText).email;
    	      var name = Ext.decode(response.responseText).name;
    	      var picture = Ext.decode(response.responseText).avatar_url;
    	      Ext.util.Cookies.set('user',email);
            Ext.util.Cookies.set('user_name',name);
            Ext.util.Cookies.set('picture',picture);
            Ext.util.Cookies.set('access_token',accessToken);
            Ext.util.Cookies.set('provider', 'google');
            Ext.create('JCertifBO.view.Home');
            loginWindow.close();
    			},
    			failure : function(response) {
    				Ext.MessageBox.show({
    					title : 'Login Failed',
    					msg : response.responseText,
    					buttons : Ext.MessageBox.OK,
    					icon : Ext.MessageBox.ERROR
    				});
    			}
    		});
			},
			failure : function(response) {
				Ext.MessageBox.show({
					title : 'Login Failed',
					msg : response.responseText,
					buttons : Ext.MessageBox.OK,
					icon : Ext.MessageBox.ERROR
				});
			}
		});
		
    
		
  },  
  
	reset : function(btn) {
		btn.up('window').down('form').getForm().reset();
	},
	
	logout : function(btn) {
	  var provider = Ext.util.Cookies.get('provider');
	  var logoutUrl = Ext.util.Cookies.get('logoutUrl');
		Ext.util.Cookies.clear('user');
    Ext.util.Cookies.clear('user_name');
    Ext.util.Cookies.clear('picture');
    Ext.util.Cookies.clear('provider');
    Ext.util.Cookies.clear('access_token');  
    Ext.state.Manager.clear();
    if(logoutUrl != undefined){
      Ext.Ajax.request({
  			url : logoutUrl,
  			loadMask: false,
  			success : function(response) {
          
          window.location.reload();				  
  			},
  			failure : function(response) {
  				Ext.MessageBox.show({
  					title : 'Logout from '+ provider +' failed',
  					msg : response.responseText,
  					buttons : Ext.MessageBox.OK,
  					icon : Ext.MessageBox.INFO
  				});
  			}
  		});
    }else{
      window.location.reload();
    }
    
	}
	
});