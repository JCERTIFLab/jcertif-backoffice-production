Ext.define('JCertifBO.controller.RoomController', {
    extend: 'Ext.app.Controller',
    
    stores: ['AdminOptions', 'Sites'],
    models: ['AdminOption', 'Room'],
    
    views: [
        'room.Grid',
        'room.Add',
        'room.Edit'
    ],


    refs: [
        {ref: 'viewer', selector: 'viewer'},
        {ref: 'roomGrid', selector: 'roomgrid'},
        {ref: 'roomFormSites', selector: 'roomform combo#site'}
    ],
    
    init: function() {
        this.control({
            'roomgrid': {
                itemdblclick: this.showEditRoomView
            },
            'roomgrid button[action=add]': {
                click: this.showAddRoomView
            },
            'roomgrid button[action=refresh]': {
                click: this.refreshRoomGrid
            },
      			'roomgrid button[action=remove]' : {
      				  click : this.removeRoom
      			},
            'roomadd button[action=add]' : {
      				  click : this.addRoom
      			},
      			'roomadd button[action=cancel]' : {
      				  click : this.cancel
      			},
            'roomedit button[action=save]' : {
      				  click : this.updateRoom
      			},
      			'roomedit button[action=cancel]' : {
      				  click : this.cancel
      			}
        });
    },
    
    showAddRoomView: function(btn){
      Ext.create('JCertifBO.view.room.Add');
      this.getRoomFormSites().bindStore(this.getSitesStore());
    },
    
    showEditRoomView: function(grid, record){
      var view = Ext.create('JCertifBO.view.room.Edit');
      view.down('form').loadRecord(record);
      this.getRoomFormSites().bindStore(this.getSitesStore());
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
      var controller = this;
  		if (form.isValid()) {
  			Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getRoomGrid().getStore().model.modelName).get('createUrl'),
  				jsonData : Ext.JSON.encode(form.getValues()),
  				success : function(response) {
  				  controller.getRoomGrid().getStore().load();
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
      var controller = this;
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getRoomGrid().getStore().model.modelName).get('removeUrl'),
  				jsonData : Ext.JSON.encode(data),
  				success : function(response) {
  				  controller.getRoomGrid().getStore().load();
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
     var win    = btn.up('window'),
        form   = win.down('form'),
        values = form.getValues(),
        room = this.getRoomGrid().getSelectionModel().getSelection()[0];
      
      var data = values;
      //on rajoute la version de l'objet avant modification
      data['version'] = room.raw['version'];
      data['id'] = room.raw['id'];
      data['user'] = Ext.util.Cookies.get('user');
      data['access_token'] = Ext.util.Cookies.get('access_token');
      data['provider'] = Ext.util.Cookies.get('provider');

      var controller = this;
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getRoomGrid().getStore().model.modelName).get('updateUrl'),
  				jsonData : Ext.JSON.encode(data),
  				success : function(response) {
  				  controller.getRoomGrid().getStore().removeAll();
  				  controller.getRoomGrid().getStore().load();
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
