Ext.define('JCertifBO.controller.SiteController', {
    extend: 'Ext.app.Controller',
    
    stores: ['AdminOptions', 'Countries', 'Cities'],
    models: ['AdminOption', 'Site'],
    
    views: [
        'site.Grid',
        'site.Add',
        'site.Edit'
    ],


    refs: [
        {ref: 'viewer', selector: 'viewer'},
        {ref: 'siteGrid', selector: 'sitegrid'},
        {ref: 'siteFormCountries', selector: 'siteform combo#country'},
        {ref: 'siteFormCities', selector: 'siteform combo#city'}
    ],
    
    init: function() {
        this.control({
            'sitegrid': {
                itemdblclick: this.showEditSiteView
            },
            'sitegrid button[action=add]': {
                click: this.showAddSiteView
            },
            'sitegrid button[action=refresh]': {
                click: this.refreshSiteGrid
            },
            'sitegrid button[action=remove]' : {
      				  click : this.removeSite
      			},
            'siteadd button[action=add]' : {
      				  click : this.addSite
      			},
      			'siteadd button[action=cancel]' : {
      				  click : this.cancel
      			},
            'siteedit button[action=save]' : {
      				  click : this.updateSite
      			},
      			'siteedit button[action=cancel]' : {
      				  click : this.cancel
      			}
        });
    },
    
    showAddSiteView: function(btn){
      Ext.create('JCertifBO.view.site.Add');
      this.getSiteFormCountries().bindStore(this.getCountriesStore());
      this.getSiteFormCities().bindStore(this.getCitiesStore());
    },
    
    showEditSiteView: function(grid, record){
      var view = Ext.create('JCertifBO.view.site.Edit');
      view.down('form').loadRecord(record);
      this.getSiteFormCountries().bindStore(this.getCountriesStore());
      this.getSiteFormCities().bindStore(this.getCitiesStore());
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
      var controller = this;
  		if (form.isValid()) {
  			Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSiteGrid().getStore().model.modelName).get('createUrl'),
  				jsonData : Ext.JSON.encode(form.getValues()),
  				success : function(response) {
  				  controller.getSiteGrid().getStore().load();
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
      var controller = this;
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSiteGrid().getStore().model.modelName).get('removeUrl'),
  				jsonData : Ext.JSON.encode(data),
  				success : function(response) {
  				  controller.getSiteGrid().getStore().load();
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
    var win    = btn.up('window'),
        form   = win.down('form'),
        values = form.getValues(),
        site = this.getSiteGrid().getSelectionModel().getSelection()[0];
        
      var data = values;
      //on rajoute la version de l'objet avant modification
      data['version'] = site.raw['version'];
      data['id'] = site.raw['id'];
      data['user'] = Ext.util.Cookies.get('user');
      data['access_token'] = Ext.util.Cookies.get('access_token');
      data['provider'] = Ext.util.Cookies.get('provider');
      
      var controller = this;
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSiteGrid().getStore().model.modelName).get('updateUrl'),
  				jsonData : Ext.JSON.encode(data),
  				success : function(response) {
  				  controller.getSiteGrid().getStore().removeAll();
  				  controller.getSiteGrid().getStore().load();
  				  win.close();
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
