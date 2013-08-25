Ext.define("JCertifBO.view.speaker.Add", {
    extend : 'Ext.window.Window',
  	alias : 'widget.speakeradd',
  	title : "Ajout d'un nouveau pr&eacute;sentateur",
  	width : 400,
  	height : 500,
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
  			text : 'Add',
  			action : 'add'
  		} ];
  
  		this.callParent(arguments);
  	}
});