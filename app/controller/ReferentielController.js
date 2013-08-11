Ext.define('JCertifBO.controller.ReferentielController', {
    extend: 'Ext.app.Controller',
    
    stores: ['AdminOptions'],
    models: ['AdminOption', 'Referentiel'],
    
    views: [
        'referentiel.Grid',
        'referentiel.Add'
    ],


    refs: [
        {ref: 'viewer', selector: 'viewer'},
        {ref: 'referentielGrid', selector: 'referentielgrid'}
    ],
    
    init: function() {
        this.control({
            'referentielgrid button[action=add]': {
                click: this.showAddReferentielView
            },
            'referentielgrid button[action=refresh]': {
                click: this.refreshReferentielGrid
            },
            'referentieladd button[action=add]' : {
      				  click : this.addReferentiel
      			},
      			'referentieladd button[action=cancel]' : {
      				  click : this.cancel
      			},
      			'referentielgrid button[action=remove]' : {
      				  click : this.removeReferentiel
      			}
        });
    },
    
    showAddReferentielView: function(btn){
      Ext.create('JCertifBO.view.referentiel.Add');
    },
    
    refreshReferentielGrid: function(btn){
      this.getReferentielGrid().getStore().load();
    },
    
    addReferentiel: function(btn){
      var win = btn.up('window'), form = win.down('form').getForm();
      form.setValues({
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider')
      });
  		if (form.isValid()) {
  			Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getReferentielGrid().getStore().model.modelName).get('createUrl'),
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
    
    removeReferentiel: function(btn){
      var referentiel = this.getReferentielGrid().getSelectionModel().getSelection()[0];
      var data = {
        label: referentiel.data.label,
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider'),
      };
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getReferentielGrid().getStore().model.modelName).get('removeUrl'),
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
    
    cancel: function(btn){
      btn.up('window').close();
    }
});
