Ext.define("JCertifBO.view.session.Add", {
    extend : 'Ext.window.Window',
  	alias : 'widget.sessionadd',
  	title : "Ajout d'une nouvelle session",
  	width : 400,
  	height : 450,
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
  	
  	initComponent : function() {
        
  		this.items = [ {
  			xtype : 'form',
  			border : 0,
  			items : [ {
  					xtype : 'textfield',
  					fieldLabel : 'Title',
  					name : 'title',
  					itemId : 'title',
  					emptyText : 'title',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Summary',
  					name : 'summary',
  					itemId : 'summary',
  					emptyText : 'summary',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Description',
  					name : 'description',
  					itemId : 'description',
  					emptyText : 'description',
  					allowblank : false,
  				},{
  					xtype : 'combo',
  					fieldLabel : 'Status',
  					store: Ext.create('JCertifBO.store.SessionStatuses'),
  					displayField: 'label',
            valueField: 'label',
  					name : 'status',
  					itemId : 'status',
  					emptyText : 'status',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Keyword',
  					name : 'keyword',
  					itemId : 'keyword',
  					emptyText : 'keyword',
  					allowblank : false,
  				},{
  					xtype : 'combo',
  					fieldLabel : 'Category',
  					store: Ext.create('JCertifBO.store.Categories'),
  					displayField: 'label',
            valueField: 'label',
  					name : 'category',
  					itemId : 'category',
  					emptyText : 'category',
  					allowblank : false,
  				},{
  					xtype : 'datefield',
  					fieldLabel : 'Start',
  					name : 'start',
  					format: 'd/m/Y H:m',
  					itemId : 'start',
  					emptyText : 'start'
  				},{
  					xtype : 'datefield',
  					fieldLabel : 'End',
  					name : 'end',
  					format: 'd/m/Y H:m',
  					itemId : 'end',
  					emptyText : 'end'
  				},{
  					xtype : 'combo',
  					fieldLabel : 'Speakers',
  					store: Ext.create('JCertifBO.store.Speakers'),
  					tpl: '<tpl for="."><div class="x-boundlist-item">{firstname} {lastname}</div></tpl>',
            valueField: 'email',
            multiSelect: true,
  					name : 'speakers',
  					itemId : 'speakers',
  					emptyText : 'speakers'
  				},{
  					xtype : 'combo',
  					fieldLabel : 'Room',
  					store: Ext.create('JCertifBO.store.Rooms'),
  					displayField: 'name',
            valueField: 'id',
  					name : 'room',
  					itemId : 'room',
  					emptyText : 'room'
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