Ext.define('JCertifBO.controller.CountryController', {
    extend: 'Ext.app.Controller',
    
    stores: ['AdminOptions'],
    models: ['AdminOption', 'Country'],
    
    views: [
        'country.Grid',
        'country.Add'
    ],


    refs: [
        {ref: 'viewer', selector: 'viewer'},
        {ref: 'countryGrid', selector: 'countrygrid'}
    ],
    
    init: function() {
        this.control({
            'countrygrid button[action=add]': {
                click: this.showAddCountryView
            },
            'countrygrid button[action=refresh]': {
                click: this.refreshCountryGrid
            },
            'countryadd button[action=add]' : {
      				  click : this.addCountry
      			},
      			'countryadd button[action=cancel]' : {
      				  click : this.cancel
      			},
      			'countrygrid button[action=remove]' : {
      				  click : this.removeCountry
      			}
        });
    },
    
    showAddCountryView: function(btn){
      Ext.create('JCertifBO.view.country.Add');
    },
    
    refreshCountryGrid: function(btn){
      this.getCountryGrid().getStore().load();
    },
    
    addCountry: function(btn){
      var win = btn.up('window'), form = win.down('form').getForm();
      form.setValues({
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider')
      });
      var controller = this;
  		if (form.isValid()) {
  			Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getCountryGrid().getStore().model.modelName).get('createUrl'),
  				jsonData : Ext.JSON.encode(form.getValues()),
  				success : function(response) {
  				  controller.getCountryGrid().getStore().load();
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
    
    removeCountry: function(btn){
      var country = this.getCountryGrid().getSelectionModel().getSelection()[0];
      var data = {
        name: country.data.name,
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider'),
      };
      var controller = this;
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getCountryGrid().getStore().model.modelName).get('removeUrl'),
  				jsonData : Ext.JSON.encode(data),
  				success : function(response) {
            Ext.MessageBox.show({
  						title : 'Message',
  						msg : "L'&eacute;l&eacute;ment &agrave; bien &eacute;t&eacute; supprim&eacute;",
  						buttons : Ext.MessageBox.OK,
  						icon : Ext.MessageBox.INFO
  					});		
            controller.getCountryGrid().getStore().load();												
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
