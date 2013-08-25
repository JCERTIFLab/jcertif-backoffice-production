Ext.define("JCertifBO.view.session.Edit", {
    extend : 'Ext.window.Window',
  	alias : 'widget.sessionedit',
  	title : "Mise &agrave; jour d'une session",
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
  			text : 'Save',
  			action : 'save'
  		} ];
  
  		this.callParent(arguments);
  	}
});