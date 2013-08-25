Ext.define("JCertifBO.view.room.Edit", {
    extend : 'Ext.window.Window',
  	alias : 'widget.roomedit',
  	title : "Mise &agrave; jour d'une salle",
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
  	
  	requires: [
  	   'JCertifBO.view.room.Form'
    ],
  	
  	initComponent : function() {
  
  		this.items = [ {
  			xtype : 'roomform',
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