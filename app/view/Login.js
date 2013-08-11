Ext.define('JCertifBO.view.Login', {

	extend : 'Ext.window.Window',
	alias : 'widget.login',
	title : 'Connexion administrateur JCertif',
	width : 480,
	height : 260,
	autoShow : true,
	closable : false,
	draggable : false,
	shadow : 'frame',
	shadowOffset : 10,
	padding : 10,
	bodyPadding : 10,
	layout : {
		type : 'vbox',
		align : 'center',
		pack : 'center'
	},

  requires : [
      'Ext.form.FieldSet'
  ],
  
	initComponent : function() {

		this.items = [ {
			xtype : 'form',
			border : 0,
			items : [ {
				xtype : 'fieldset',
				title : 'Identification administrateur',
				width : 420,
				bodyPadding : 10,
				defaultType : 'textfield',
				defaults : {
					allowBlank : false,
					msgTarget : 'side',
					labelWidth : 200,
					anchor : '100%',
					width : 300
				},
				items : [ {
					xtype : 'textfield',
					fieldLabel : 'Email',
					name : 'email',
					itemId : 'email',
					emptyText : 'email',
					allowblank : false,
				}, {
					allowBlank : false,
					fieldLabel : 'Mot de passe',
					name : 'password',
					emptyText : 'password',
					inputType : 'password'
				}, {
					xtype : 'checkbox',
					fieldLabel : 'Se souvenir de moi',
					name : 'remember'
				} ]
			} ]
		} ];
		this.buttons = [ {
			text : 'Reset',
			action : 'reset'
		}, {
			text : 'Login',
			action : 'login'
		} ];

		this.callParent(arguments);
	}
});