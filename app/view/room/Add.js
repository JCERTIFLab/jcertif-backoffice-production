Ext.define("JCertifBO.view.room.Add", {
    extend : 'Ext.window.Window',
  	alias : 'widget.roomadd',
  	title : "Ajout d'une nouvelle salle",
  	width : 400,
  	height : 300,
  	autoShow : true,
  	closable : true,
  	draggable : true,
  	shadow : 'frame',
  	shadowOffset : 10,
  	padding : 10,
  	bodyPadding : 10,
  	layout : {
  		type : 'vbox',
  		align : 'center',
  		pack : 'center'
  	},
  	
  	store : 'Sites',
  	
  	initComponent : function() {
  
  		this.items = [ {
  			xtype : 'form',
  			border : 0,
  			items : [ {
  					xtype : 'textfield',
  					fieldLabel : 'Name',
  					name : 'name',
  					itemId : 'name',
  					emptyText : 'name',
  					allowblank : false,
  				},{
  					xtype : 'combo',
  					fieldLabel : 'Site',
  					store : this.store,
  					displayField: 'name',
            valueField: 'id',
  					name : 'site',
  					itemId : 'site',
  					emptyText : 'site',
  					allowblank : false,
  				},{
  					xtype : 'numberfield',
  					fieldLabel : 'Seats',
  					name : 'seats',
  					itemId : 'seats',
  					emptyText : 'seats',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Description',
  					name : 'description',
  					itemId : 'description',
  					emptyText : 'description',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Photo',
  					name : 'photo',
  					itemId : 'photo',
  					emptyText : 'photo'
  				},{
  					xtype : 'textfield',
  					name : 'provider',
  					itemId : 'provider',
  					hidden: true
  				},{
  					xtype : 'textfield',
  					name : 'user',
  					itemId : 'user',
  					hidden: true
  				},{
  					xtype : 'textfield',
  					name : 'access_token',
  					itemId : 'access_token',
  					hidden: true
  				}]
  		} ];
  		this.buttons = [ {
  			text : 'Cancel',
  			action : 'cancel'
  		}, {
  			text : 'Add',
  			action : 'add'
  		} ];
  
  		this.callParent(arguments);
  	}
});