Ext.define("JCertifBO.view.sponsor.Edit", {
    extend : 'Ext.window.Window',
  	alias : 'widget.sponsoredit',
  	title : "Mise &agrave; jour d'un sponsor",
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
  	   'JCertifBO.view.sponsor.Form'
    ],
  	
  	initComponent : function() {

  		this.items = [ {
  			xtype : 'sponsorform',
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