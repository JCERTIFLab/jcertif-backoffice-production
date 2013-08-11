Ext.define('JCertifBO.controller.SponsorController', {
    extend: 'Ext.app.Controller',
    
    stores: ['AdminOptions', 'SponsorLevels'],
    models: ['AdminOption', 'Sponsor'],
    
    views: [
        'sponsor.Grid',
        'sponsor.Add'
    ],


    refs: [
        {ref: 'viewer', selector: 'viewer'},
        {ref: 'sponsorGrid', selector: 'sponsorgrid'}
    ],
    
    init: function() {
        this.control({
            'sponsorgrid': {
                edit: this.updateSponsor
            },
            'sponsorgrid button[action=add]': {
                click: this.showAddSponsorView
            },
            'sponsorgrid button[action=refresh]': {
                click: this.refreshSponsorGrid
            },
            'sponsoradd button[action=add]' : {
      				  click : this.addSponsor
      			},
      			'sponsoradd button[action=cancel]' : {
      				  click : this.cancel
      			},
      			'sponsorgrid button[action=remove]' : {
      				  click : this.removeSponsor
      			}
        });
    },
    
    showAddSponsorView: function(btn){
      Ext.create('JCertifBO.view.sponsor.Add');
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
  		if (form.isValid()) {
  			Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSponsorGrid().getStore().model.modelName, 0, false, true, true).get('createUrl'),
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
    
    removeSponsor: function(btn){
      var sponsor = this.getSponsorGrid().getSelectionModel().getSelection()[0];
      var data = {
        email: sponsor.raw.email,
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider'),
      };
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSponsorGrid().getStore().model.modelName, 0, false, true, true).get('removeUrl'),
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
    
    updateSponsor: function(btn){
      var sponsor = this.getSponsorGrid().getSelectionModel().getSelection()[0];
      var data = sponsor.data;
      //on rajoute la version de l'objet avant modification
      data['version'] = sponsor.raw['version'];
      data['email'] = sponsor.raw['email'];
      data['user'] = Ext.util.Cookies.get('user');
      data['access_token'] = Ext.util.Cookies.get('access_token');
      data['provider'] = Ext.util.Cookies.get('provider');

      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSponsorGrid().getStore().model.modelName, 0, false, true, true).get('updateUrl'),
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
