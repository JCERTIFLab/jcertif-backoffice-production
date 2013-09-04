Ext.define('JCertifBO.controller.CityController', {
    extend: 'Ext.app.Controller',
    
    stores: ['AdminOptions', 'Countries'],
    models: ['AdminOption', 'City', 'Country'],
    
    views: [
        'city.Grid',
        'city.Add'
    ],


    refs: [
        {ref: 'viewer', selector: 'viewer'},
        {ref: 'cityGrid', selector: 'citygrid'},
        {ref: 'cityFormCountries', selector: 'cityadd combo#country'},
    ],
    
    init: function() {
        this.control({
            'citygrid button[action=add]': {
                click: this.showAddCityView
            },
            'citygrid button[action=refresh]': {
                click: this.refreshCityGrid
            },
            'cityadd button[action=add]' : {
      				  click : this.addCity
      			},
      			'cityadd button[action=cancel]' : {
      				  click : this.cancel
      			},
      			'citygrid button[action=remove]' : {
      				  click : this.removeCity
      			}
        });
    },
    
    showAddCityView: function(btn){
      Ext.create('JCertifBO.view.city.Add');
      this.getCityFormCountries().bindStore(this.getCountriesStore());
    },
    
    refreshCityGrid: function(btn){
      this.getCityGrid().getStore().load();
    },
    
    addCity: function(btn){
      var win = btn.up('window'), form = win.down('form').getForm();
      form.setValues({
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider')
      });
      var controller = this;
  		if (form.isValid()) {
  			Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getCityGrid().getStore().model.modelName).get('createUrl'),
  				jsonData : Ext.JSON.encode(form.getValues()),
  				success : function(response) {
  				  controller.getCityGrid().getStore().load();
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
    
    removeCity: function(btn){
      var city = this.getCityGrid().getSelectionModel().getSelection()[0];
      var data = {
        name: city.data.name,
        cid: city.data.cid,
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider'),
      };
      var controller = this;
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getCityGrid().getStore().model.modelName).get('removeUrl'),
  				jsonData : Ext.JSON.encode(data),
  				success : function(response) {
            Ext.MessageBox.show({
  						title : 'Message',
  						msg : "L'&eacute;l&eacute;ment &agrave; bien &eacute;t&eacute; supprim&eacute;",
  						buttons : Ext.MessageBox.OK,
  						icon : Ext.MessageBox.INFO
  					});		
            controller.getCityGrid().getStore().load();												
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
