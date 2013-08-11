Ext.define('JCertifBO.controller.SessionController', {
    extend: 'Ext.app.Controller',
    
    stores: ['AdminOptions', 'SessionStatuses', 'Categories', 'Speakers', 'Rooms'],
    models: ['AdminOption', 'Session'],
    
    views: [
        'session.Grid',
        'session.Add'
    ],


    refs: [
        {ref: 'viewer', selector: 'viewer'},
        {ref: 'sessionGrid', selector: 'sessiongrid'}
    ],
    
    init: function() {
        this.control({
            'sessiongrid': {
                edit: this.updateSession
            },
            'sessiongrid button[action=add]': {
                click: this.showAddSessionView
            },
            'sessiongrid button[action=refresh]': {
                click: this.refreshSessionGrid
            },
            'sessionadd button[action=add]' : {
      				  click : this.addSession
      			},
      			'sessionadd button[action=cancel]' : {
      				  click : this.cancel
      			},
      			'sessiongrid button[action=remove]' : {
      				  click : this.removeSession
      			}
        });
    },
    
    showAddSessionView: function(btn){
      Ext.create('JCertifBO.view.session.Add');
    },
    
    refreshSessionGrid: function(btn){
      this.getSessionGrid().getStore().load();
    },
    
    addSession: function(btn){
      var win = btn.up('window'), form = win.down('form').getForm();
      form.setValues({
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider')
      });
  		if (form.isValid()) {
  			Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSessionGrid().getStore().model.modelName, 0, false, true, true).get('createUrl'),
  				jsonData : Ext.JSON.encode(form.getValues()),
  				success : function(response) {
            win.close();														
  				},
  				failure : function(response) {
  					Ext.MessageBox.show({
  						title : 'Error',
  						msg : response.responseText,
  						buttons : Ext.MessageBox.OK,
  						icon : Ext.MessageBox.ERROR
  					});
  				}
  			});
  		}
    },
    
    removeSession: function(btn){
      var session = this.getSessionGrid().getSelectionModel().getSelection()[0];
      var data = {
        id: session.raw.id,
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider'),
      };
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSessionGrid().getStore().model.modelName, 0, false, true, true).get('removeUrl'),
  				jsonData : Ext.JSON.encode(data),
  				success : function(response) {
            Ext.MessageBox.show({
  						title : 'Message',
  						msg : "L'&eacute;l&eacute;ment &agrave; bien &eacute;t&eacute; supprim&eacute;",
  						buttons : Ext.MessageBox.OK,
  						icon : Ext.MessageBox.INFO
  					});														
  				},
  				failure : function(response) {
  					Ext.MessageBox.show({
  						title : 'Error',
  						msg : response.responseText,
  						buttons : Ext.MessageBox.OK,
  						icon : Ext.MessageBox.ERROR
  					});
  				}
  			});
    },
    
    updateSession: function(btn){
      var session = this.getSessionGrid().getSelectionModel().getSelection()[0];
      var data = session.data;
      //on rajoute la version de l'objet avant modification
      data['version'] = session.raw['version'];
      data['id'] = session.raw['id'];
      data['user'] = Ext.util.Cookies.get('user');
      data['access_token'] = Ext.util.Cookies.get('access_token');
      data['provider'] = Ext.util.Cookies.get('provider');

      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSessionGrid().getStore().model.modelName, 0, false, true, true).get('updateUrl'),
  				jsonData : Ext.JSON.encode(data),
  				success : function(response) {
            Ext.MessageBox.show({
  						title : 'Message',
  						msg : "L'&eacute;l&eacute;ment &agrave; bien &eacute;t&eacute; sauvegard&eacute;",
  						buttons : Ext.MessageBox.OK,
  						icon : Ext.MessageBox.INFO
  					});														
  				},
  				failure : function(response) {
  					Ext.MessageBox.show({
  						title : 'Error',
  						msg : response.responseText,
  						buttons : Ext.MessageBox.OK,
  						icon : Ext.MessageBox.ERROR
  					});
  				}
  			});
    },
    
    cancel: function(btn){
      btn.up('window').close();
    }
});
