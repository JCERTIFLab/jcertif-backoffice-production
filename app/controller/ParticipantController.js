Ext.define('JCertifBO.controller.ParticipantController', {
    extend: 'Ext.app.Controller',
    
    stores: ['AdminOptions', 'Titles', 'Sessions'],
    models: ['AdminOption', 'Participant'],
    
    views: [
        'participant.Grid',
        'participant.Add'
    ],


    refs: [
        {ref: 'viewer', selector: 'viewer'},
        {ref: 'participantGrid', selector: 'participantgrid'}
    ],
    
    init: function() {
        this.control({
            'participantgrid': {
                edit: this.updateParticipant
            },
            'participantgrid button[action=add]': {
                click: this.showAddParticipantView
            },
            'participantgrid button[action=refresh]': {
                click: this.refreshParticipantGrid
            },
            'participantadd button[action=add]' : {
      				  click : this.addParticipant
      			},
      			'participantadd button[action=cancel]' : {
      				  click : this.cancel
      			},
      			'participantgrid button[action=remove]' : {
      				  click : this.removeParticipant
      			}
        });
    },
    
    showAddParticipantView: function(btn){
      Ext.create('JCertifBO.view.participant.Add');
    },
    
    refreshParticipantGrid: function(btn){
      this.getParticipantGrid().getStore().load();
    },
    
    addParticipant: function(btn){
      var win = btn.up('window'), form = win.down('form').getForm();
      form.setValues({
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider')
      });
  		if (form.isValid()) {
  			Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getParticipantGrid().getStore().model.modelName).get('createUrl'),
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
    
    removeParticipant: function(btn){
      var participant = this.getParticipantGrid().getSelectionModel().getSelection()[0];
      var data = {
        email: participant.raw.email,
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider'),
      };
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getParticipantGrid().getStore().model.modelName).get('removeUrl'),
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
    
    updateParticipant: function(btn){
      var participant = this.getParticipantGrid().getSelectionModel().getSelection()[0];
      var data = participant.data;
      //on rajoute la version de l'objet avant modification
      data['version'] = participant.raw['version'];
      data['email'] = participant.raw['email'];
      data['user'] = Ext.util.Cookies.get('user');
      data['access_token'] = Ext.util.Cookies.get('access_token');
      data['provider'] = Ext.util.Cookies.get('provider');

      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getParticipantGrid().getStore().model.modelName).get('updateUrl'),
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
