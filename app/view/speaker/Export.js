Ext.define("JCertifBO.view.speaker.Export", {
    extend : 'Ext.window.Window',
  	alias : 'widget.speakerexport',
  	title : "Choix du format d'export",
  	width : 200,
  	height : 150,
  	border : 0,
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
  	buttonAlign : 'center',
    
  	initComponent : function() {
  	
  	  var formats = Ext.create('Ext.data.Store', {
          fields: ['name', 'value'],
          data : [
              {"name":"csv", "value":"csv"}
          ]
      });
  		this.items = [ {
  			xtype : 'combo',
  			store : formats,
  			displayField: 'name',
        valueField: 'value',
        value: 'csv',
        width : 75,
  	    height : 25,
  			name : 'format',
  			itemId : 'format'
  			} ];
  		this.buttons = [ {
  		  text : 'OK',
  			action : 'export'
  		}];
  
  		this.callParent(arguments);
  	}
});