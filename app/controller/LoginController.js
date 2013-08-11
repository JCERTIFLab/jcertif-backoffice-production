Ext.define('JCertifBO.controller.LoginController', {
	extend : 'Ext.app.Controller',
	views : ['Login'],
	model : 'User',
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
			'appheader button[action=logout]' : {
				click : this.logout
			}
		});
	},
	
	onLaunch: function(){
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
	
	reset : function(btn) {
		btn.up('window').down('form').getForm().reset();
	},
	
	logout : function(btn) {
		Ext.util.Cookies.clear('user');
    Ext.util.Cookies.clear('provider');
    Ext.util.Cookies.clear('access_token');
    Ext.state.Manager.clear();
    window.location.reload();
	}
	
});