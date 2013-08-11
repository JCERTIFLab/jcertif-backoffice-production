Ext.define('JCertifBO.controller.SpeakerController', {
    extend: 'Ext.app.Controller',
    
    stores: ['AdminOptions', 'Titles'],
    models: ['AdminOption', 'Speaker'],
    
    views: [
        'speaker.Grid',
        'speaker.Add'
    ],


    refs: [
        {ref: 'viewer', selector: 'viewer'},
        {ref: 'speakerGrid', selector: 'speakergrid'}
    ],
    
    init: function() {
        this.control({
            'speakergrid': {
                edit: this.updateSpeaker
            },
            'speakergrid button[action=add]': {
                click: this.showAddSpeakerView
            },
            'speakergrid button[action=refresh]': {
                click: this.refreshSpeakerGrid
            },
            'speakeradd button[action=add]' : {
      				  click : this.addSpeaker
      			},
      			'speakeradd button[action=cancel]' : {
      				  click : this.cancel
      			},
      			'speakergrid button[action=remove]' : {
      				  click : this.removeSpeaker
      			}
        });
    },
    
    showAddSpeakerView: function(btn){
      Ext.create('JCertifBO.view.speaker.Add');
    },
    
    refreshSpeakerGrid: function(btn){
      this.getSpeakerGrid().getStore().load();
    },
    
    addSpeaker: function(btn){
      var win = btn.up('window'), form = win.down('form').getForm();
      form.setValues({
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider')
      });
  		if (form.isValid()) {
  			Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSpeakerGrid().getStore().model.modelName).get('createUrl'),
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
    
    removeSpeaker: function(btn){
      var speaker = this.getSpeakerGrid().getSelectionModel().getSelection()[0];
      var data = {
        email: speaker.raw.email,
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider'),
      };
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSpeakerGrid().getStore().model.modelName).get('removeUrl'),
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
    
    updateSpeaker: function(btn){
      var speaker = this.getSpeakerGrid().getSelectionModel().getSelection()[0];
      var data = speaker.data;
      //on rajoute la version de l'objet avant modification
      data['version'] = speaker.raw['version'];
      data['email'] = speaker.raw['email'];
      data['user'] = Ext.util.Cookies.get('user');
      data['access_token'] = Ext.util.Cookies.get('access_token');
      data['provider'] = Ext.util.Cookies.get('provider');

      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSpeakerGrid().getStore().model.modelName).get('updateUrl'),
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
