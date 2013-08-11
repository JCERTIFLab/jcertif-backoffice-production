Ext.define("JCertifBO.view.referentiel.Add", {
    extend : 'Ext.window.Window',
  	alias : 'widget.referentieladd',
  	title : "Cr&eacute;ation d'une nouvelle cat&eacute;gorie",
  	width : 350,
  	height : 200,
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
  					fieldLabel : 'Label',
  					name : 'label',
  					itemId : 'label',
  					emptyText : 'label',
  					allowblank : false,
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