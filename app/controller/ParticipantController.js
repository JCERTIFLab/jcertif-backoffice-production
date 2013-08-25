Ext.define('JCertifBO.controller.ParticipantController', {
    extend: 'Ext.app.Controller',
    
    stores: ['AdminOptions', 'Titles', 'Countries', 'Cities', 'Sessions'],
    models: ['AdminOption', 'Participant'],
    
    views: [
        'participant.Grid',
        'participant.Add',
        'participant.Edit'
    ],


    refs: [
        {ref: 'viewer', selector: 'viewer'},
        {ref: 'participantGrid', selector: 'participantgrid'},
        {ref: 'participantFormTitles', selector: 'participantform combo#title'},
        {ref: 'participantFormCountries', selector: 'participantform combo#country'},
        {ref: 'participantFormCities', selector: 'participantform combo#city'},
        {ref: 'participantFormSessions', selector: 'participantform combo#sessions'},
        {ref: 'participantFormPasswordField', selector: 'participantform textfield#password'}
    ],
    
    init: function() {
        this.control({
            'participantgrid': {
                itemdblclick: this.showEditParticipantView
            },
            'participantgrid button[action=add]': {
                click: this.showAddParticipantView
            },
            'participantgrid button[action=refresh]': {
                click: this.refreshParticipantGrid
            },
      			'participantgrid button[action=remove]' : {
      				  click : this.removeParticipant
      			},
            'participantadd button[action=add]' : {
      				  click : this.addParticipant
      			},
      			'participantadd button[action=cancel]' : {
      				  click : this.cancel
      			},
            'participantedit button[action=save]' : {
      				  click : this.updateParticipant
      			},
      			'participantedit button[action=cancel]' : {
      				  click : this.cancel
      			}
        });
    },
    
    showAddParticipantView: function(btn){
      Ext.create('JCertifBO.view.participant.Add');
      this.getParticipantFormTitles().bindStore(this.getTitlesStore());
      this.getParticipantFormCountries().bindStore(this.getCountriesStore());
      this.getParticipantFormCities().bindStore(this.getCitiesStore());
      this.getParticipantFormSessions().bindStore(this.getSessionsStore());
    },
    
    showEditParticipantView: function(grid, record){
      var view = Ext.create('JCertifBO.view.participant.Edit');
      view.down('form').loadRecord(record);
      this.getParticipantFormTitles().bindStore(this.getTitlesStore());
      this.getParticipantFormCountries().bindStore(this.getCountriesStore());
      this.getParticipantFormCities().bindStore(this.getCitiesStore());
      this.getParticipantFormSessions().bindStore(this.getSessionsStore());
      this.getParticipantFormPasswordField().setDisabled(true);
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
      var controller = this;
  		if (form.isValid()) {
  			Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getParticipantGrid().getStore().model.modelName).get('createUrl'),
  				jsonData : Ext.JSON.encode(form.getValues()),
  				success : function(response) {
  				  controller.getParticipantGrid().getStore().load();
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
      var controller = this;
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getParticipantGrid().getStore().model.modelName).get('removeUrl'),
  				jsonData : Ext.JSON.encode(data),
  				success : function(response) {
  				  controller.getParticipantGrid().getStore().load();
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
      var win    = btn.up('window'),
        form   = win.down('form'),
        values = form.getValues(),
        participant = this.getParticipantGrid().getSelectionModel().getSelection()[0];
        
      var data = values;
      //on rajoute la version de l'objet avant modification
      data['version'] = participant.raw['version'];
      data['user'] = Ext.util.Cookies.get('user');
      data['access_token'] = Ext.util.Cookies.get('access_token');
      data['provider'] = Ext.util.Cookies.get('provider');

      var controller = this;
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getParticipantGrid().getStore().model.modelName).get('updateUrl'),
  				jsonData : Ext.JSON.encode(data),
  				success : function(response) {
  				  controller.getParticipantGrid().getStore().removeAll();
  				  controller.getParticipantGrid().getStore().load();
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
