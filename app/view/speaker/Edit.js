Ext.define("JCertifBO.view.speaker.Edit", {
    extend : 'Ext.window.Window',
  	alias : 'widget.speakeredit',
  	title : "Mise &agrave; jour d'un pr&eacute;sentateur",
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
  	   'JCertifBO.view.speaker.Form'
    ],
    
  	initComponent : function() {
        
  		this.items = [ {
  			xtype : 'speakerform',
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