Ext.define('JCertifBO.controller.SiteController', {
    extend: 'Ext.app.Controller',
    
    stores: ['AdminOptions'],
    models: ['AdminOption', 'Site'],
    
    views: [
        'site.Grid',
        'site.Add'
    ],


    refs: [
        {ref: 'viewer', selector: 'viewer'},
        {ref: 'siteGrid', selector: 'sitegrid'}
    ],
    
    init: function() {
        this.control({
            'sitegrid': {
                edit: this.updateSite
            },
            'sitegrid button[action=add]': {
                click: this.showAddSiteView
            },
            'sitegrid button[action=refresh]': {
                click: this.refreshSiteGrid
            },
            'siteadd button[action=add]' : {
      				  click : this.addSite
      			},
      			'siteadd button[action=cancel]' : {
      				  click : this.cancel
      			},
      			'sitegrid button[action=remove]' : {
      				  click : this.removeSite
      			}
        });
    },
    
    showAddSiteView: function(btn){
      Ext.create('JCertifBO.view.site.Add');
    },
    
    refreshSiteGrid: function(btn){
      this.getSiteGrid().getStore().load();
    },
    
    addSite: function(btn){
      var win = btn.up('window'), form = win.down('form').getForm();
      form.setValues({
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider')
      });
  		if (form.isValid()) {
  			Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSiteGrid().getStore().model.modelName).get('createUrl'),
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
    
    removeSite: function(btn){
      var site = this.getSiteGrid().getSelectionModel().getSelection()[0];
      var data = {
        id: site.raw.id,
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider'),
      };
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSiteGrid().getStore().model.modelName).get('removeUrl'),
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
    
    updateSite: function(btn){
      var site = this.getSiteGrid().getSelectionModel().getSelection()[0];
      var data = site.data;
      //on rajoute la version de l'objet avant modification
      data['version'] = site.raw['version'];
      data['id'] = site.raw['id'];
      data['user'] = Ext.util.Cookies.get('user');
      data['access_token'] = Ext.util.Cookies.get('access_token');
      data['provider'] = Ext.util.Cookies.get('provider');

      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSiteGrid().getStore().model.modelName).get('updateUrl'),
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
