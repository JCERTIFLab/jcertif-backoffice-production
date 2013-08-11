Ext.define("JCertifBO.view.sponsor.Add", {
    extend : 'Ext.window.Window',
  	alias : 'widget.sponsoradd',
  	title : "Ajout d'un nouveau sponsor",
  	width : 400,
  	height : 400,
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
  	
  	initComponent : function() {

  		this.items = [ {
  			xtype : 'form',
  			border : 0,
  			items : [ {
  					xtype : 'textfield',
  					vtype: 'email',
  					fieldLabel : 'Email',
  					name : 'email',
  					itemId : 'email',
  					emptyText : 'email',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Name',
  					name : 'name',
  					itemId : 'name',
  					emptyText : 'name',
  					allowblank : false,
  				},{
  					xtype : 'combo',
  					fieldLabel : 'Level',
  					store: Ext.create('JCertifBO.store.SponsorLevels'),
  					displayField: 'label',
            valueField: 'label',
  					name : 'level',
  					itemId : 'level',
  					emptyText : 'level',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Website',
  					name : 'website',
  					itemId : 'website',
  					emptyText : 'website',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Logo',
  					name : 'logo',
  					itemId : 'logo',
  					emptyText : 'logo',
  					allowblank : false,
  				},{
  					xtype : 'combo',
  					fieldLabel : 'Country',
  					store: Ext.create('JCertifBO.store.Countries'),
  					queryMode: 'local',
  					triggerAction: 'all',
  					displayField: 'country',
            valueField: 'cid',
  					name : 'country',
  					itemId : 'country',
  					emptyText : 'country',
  					allowblank : false,
  					listeners:{
              select:function(combo, value) {
                var comboCity = Ext.getCmp('add-combo-city'); 
                comboCity.enable();       
                comboCity.clearValue();
                comboCity.store.clearFilter(true);
                comboCity.store.filter('cid',  combo.getValue());
              }
            }
  				},{
  					xtype : 'combo',
  					fieldLabel : 'City',
  					id:'add-combo-city',
  					store: Ext.create('JCertifBO.store.Cities'),
  					queryMode: 'local',
  					triggerAction: 'all',
  					disabled: true,
  					displayField: 'city',
            valueField: 'city',
            lastQuery: '',
  					name : 'city',
  					itemId : 'city',
  					emptyText : 'city',
  					allowblank : false
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Phone',
  					name : 'phone',
  					itemId : 'phone',
  					emptyText : 'phone'
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'About',
  					name : 'about',
  					itemId : 'about',
  					emptyText : 'about'
  				},{
  					xtype : 'textfield',
  					name : 'provider',
  					itemId : 'provider',
  					hidden: true
  				},{
  					xtype : 'textfield',
  					name : 'user',
  					itemId : 'user',
  					hidden: true
  				},{
  					xtype : 'textfield',
  					name : 'access_token',
  					itemId : 'access_token',
  					hidden: true
  				}]
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