Ext.define('JCertifBO.controller.RoomController', {
    extend: 'Ext.app.Controller',
    
    stores: ['AdminOptions', 'Sites'],
    models: ['AdminOption', 'Room'],
    
    views: [
        'room.Grid',
        'room.Add'
    ],


    refs: [
        {ref: 'viewer', selector: 'viewer'},
        {ref: 'roomGrid', selector: 'roomgrid'}
    ],
    
    init: function() {
        this.control({
            'roomgrid': {
                edit: this.updateRoom
            },
            'roomgrid button[action=add]': {
                click: this.showAddRoomView
            },
            'roomgrid button[action=refresh]': {
                click: this.refreshRoomGrid
            },
            'roomadd button[action=add]' : {
      				  click : this.addRoom
      			},
      			'roomadd button[action=cancel]' : {
      				  click : this.cancel
      			},
      			'roomgrid button[action=remove]' : {
      				  click : this.removeRoom
      			}
        });
    },
    
    showAddRoomView: function(btn){
      Ext.create('JCertifBO.view.room.Add');
    },
    
    refreshRoomGrid: function(btn){
      this.getRoomGrid().getStore().load();
    },
    
    addRoom: function(btn){
      var win = btn.up('window'), form = win.down('form').getForm();
      form.setValues({
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider')
      });
  		if (form.isValid()) {
  			Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getRoomGrid().getStore().model.modelName).get('createUrl'),
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
    
    removeRoom: function(btn){
      var room = this.getRoomGrid().getSelectionModel().getSelection()[0];
      var data = {
        id: room.raw.id,
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider'),
      };
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getRoomGrid().getStore().model.modelName).get('removeUrl'),
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
    
    updateRoom: function(btn){
      var room = this.getRoomGrid().getSelectionModel().getSelection()[0];
      var data = room.data;
      //on rajoute la version de l'objet avant modification
      data['version'] = room.raw['version'];
      data['id'] = room.raw['id'];
      data['user'] = Ext.util.Cookies.get('user');
      data['access_token'] = Ext.util.Cookies.get('access_token');
      data['provider'] = Ext.util.Cookies.get('provider');

      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getRoomGrid().getStore().model.modelName).get('updateUrl'),
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
