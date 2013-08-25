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
  	
  	requires: [
  	   'JCertifBO.view.session.Form'
    ],
    
  	initComponent : function() {
        
  		this.items = [ {
  			xtype : 'sessionform',
  			border : 0
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