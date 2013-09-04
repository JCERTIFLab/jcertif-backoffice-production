Ext.define("JCertifBO.view.participant.Edit", {
    extend : 'Ext.window.Window',
  	alias : 'widget.participantedit',
  	title : "Mise &agrave; jour d'un participant",
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
  			text : 'Save',
  			action : 'save'
  		} ];
  
  		this.callParent(arguments);
  	}
});