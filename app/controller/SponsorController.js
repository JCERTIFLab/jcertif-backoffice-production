Ext.define('JCertifBO.controller.SponsorController', {
    extend: 'Ext.app.Controller',
    
    stores: ['AdminOptions', 'SponsorLevels', 'Countries', 'Cities'],
    models: ['AdminOption', 'Sponsor'],
    
    views: [
        'sponsor.Grid',
        'sponsor.Add',
        'sponsor.Edit'
    ],


    refs: [
        {ref: 'viewer', selector: 'viewer'},
        {ref: 'sponsorGrid', selector: 'sponsorgrid'},
        {ref: 'sponsorFormLevels', selector: 'sponsorform combo#level'},
        {ref: 'sponsorFormCountries', selector: 'sponsorform combo#country'},
        {ref: 'sponsorFormCities', selector: 'sponsorform combo#city'}
    ],
    
    init: function() {
        this.control({
            'sponsorgrid': {
                itemdblclick: this.showEditSponsorView 
            },
            'sponsorgrid button[action=add]': {
                click: this.showAddSponsorView
            },
            'sponsorgrid button[action=refresh]': {
                click: this.refreshSponsorGrid
            },
      			'sponsorgrid button[action=remove]' : {
      				  click : this.removeSponsor
      			},
            'sponsoradd button[action=add]' : {
      				  click : this.addSponsor
      			},
      			'sponsoradd button[action=cancel]' : {
      				  click : this.cancel
      			},
            'sponsoredit button[action=save]' : {
      				  click : this.updateSponsor
      			},
      			'sponsoredit button[action=cancel]' : {
      				  click : this.cancel
      			}
        });
    },
    
    showAddSponsorView: function(btn){
      Ext.create('JCertifBO.view.sponsor.Add');
      this.getSponsorFormLevels().bindStore(this.getSponsorLevelsStore());
      this.getSponsorFormCountries().bindStore(this.getCountriesStore());
      this.getSponsorFormCities().bindStore(this.getCitiesStore());
    },
    
    showEditSponsorView: function(grid, record){
      var view = Ext.create('JCertifBO.view.sponsor.Edit');
      view.down('form').loadRecord(record);
      this.getSponsorFormLevels().bindStore(this.getSponsorLevelsStore());
      this.getSponsorFormCountries().bindStore(this.getCountriesStore());
      this.getSponsorFormCities().bindStore(this.getCitiesStore());
    },
    
    refreshSponsorGrid: function(btn){
      this.getSponsorGrid().getStore().load();
    },
    
    addSponsor: function(btn){
      var win = btn.up('window'), form = win.down('form').getForm();
      form.setValues({
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider')
      });
      var controller = this;
  		if (form.isValid()) {
  			Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSponsorGrid().getStore().model.modelName, 0, false, true, true).get('createUrl'),
  				jsonData : Ext.JSON.encode(form.getValues()),
  				success : function(response) {
  				  controller.getSponsorGrid().getStore().load();
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
    
    removeSponsor: function(btn){
      var sponsor = this.getSponsorGrid().getSelectionModel().getSelection()[0];
      var data = {
        email: sponsor.raw.email,
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider'),
      };
      var controller = this;
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSponsorGrid().getStore().model.modelName, 0, false, true, true).get('removeUrl'),
  				jsonData : Ext.JSON.encode(data),
  				success : function(response) {
  				  controller.getSponsorGrid().getStore().load();
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
    
    updateSponsor: function(btn){
      var win    = btn.up('window'),
        form   = win.down('form'),
        values = form.getValues(),
        sponsor = this.getSponsorGrid().getSelectionModel().getSelection()[0];
      
      var data = values;
      //on rajoute la version de l'objet avant modification
      data['version'] = sponsor.raw['version'];
      data['user'] = Ext.util.Cookies.get('user');
      data['access_token'] = Ext.util.Cookies.get('access_token');
      data['provider'] = Ext.util.Cookies.get('provider');
      
      var controller = this;
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSponsorGrid().getStore().model.modelName, 0, false, true, true).get('updateUrl'),
  				jsonData : Ext.JSON.encode(data),
  				success : function(response) {
  				  controller.getSponsorGrid().getStore().removeAll();
  				  controller.getSponsorGrid().getStore().load();
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
