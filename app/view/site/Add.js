Ext.define("JCertifBO.view.site.Add", {
    extend : 'Ext.window.Window',
  	alias : 'widget.siteadd',
  	title : "Ajout d'un nouveau site",
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
  	   'JCertifBO.view.site.Form'
    ],
    
  	initComponent : function() {
        
  		this.items = [ {
  			xtype : 'siteform',
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