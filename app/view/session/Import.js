Ext.define("JCertifBO.view.session.Import", {
    extend : 'Ext.window.Window',
  	alias : 'widget.sessionimport',
  	title : "Choix du fichier &agrave; importer",
  	width : 410,
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
  	
  	requires: [
        'Ext.form.field.File'
    ],
    
  	initComponent : function() {

      this.items = [ {
  			xtype : 'form',
  			border : 0,
  			items : [ {
  				xtype : 'fileuploadfield',
  				id: 'sessions-file-upload',
    			emptyText: 'Choississez un fichier',
          fieldLabel: 'fichier',
          name: 'file-path',
          allowBlank: false,
          buttonText: '',
          buttonConfig: {
              iconCls: 'upload-icon'
          },
          listeners: {
              'change': function (filefield, value) {
                  value = value.replace('C:\\fakepath\\', '');
              }
          }
  			} ]
  		} ];

  		this.buttons = [  {
  		  text : 'Cancel',
  			action : 'cancel'
  		},{
  		  text : 'Upload',
  			action : 'import'
  		}];
  
  		this.callParent(arguments);
  	}
});