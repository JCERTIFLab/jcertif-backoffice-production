Ext.define("JCertifBO.view.participant.Add", {
    extend : 'Ext.window.Window',
  	alias : 'widget.participantadd',
  	title : "Ajout d'un nouveau participant",
  	width : 400,
  	height : 600,
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
  	   'JCertifBO.view.participant.Form'
    ],
    
  	initComponent : function() {
        
  		this.items = [ {
  			xtype : 'participantform',
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