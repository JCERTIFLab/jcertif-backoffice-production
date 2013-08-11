Ext.define("JCertifBO.view.site.Add", {
    extend : 'Ext.window.Window',
  	alias : 'widget.siteadd',
  	title : "Ajout d'un nouveau site",
  	width : 400,
  	height : 450,
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
  					fieldLabel : 'Name',
  					name : 'name',
  					itemId : 'name',
  					emptyText : 'name',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Street',
  					name : 'street',
  					itemId : 'street',
  					emptyText : 'street',
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
  					fieldLabel : 'Contact',
  					name : 'contact',
  					itemId : 'contact',
  					emptyText : 'contact',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Website',
  					name : 'website',
  					itemId : 'website',
  					emptyText : 'website'
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Description',
  					name : 'description',
  					itemId : 'description',
  					emptyText : 'description',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Photo',
  					name : 'photo',
  					itemId : 'photo',
  					emptyText : 'photo'
  				},{
  					xtype : 'numberfield',
  					fieldLabel : 'Latitude',
  					name : 'latitude',
  					itemId : 'latitude',
  					emptyText : 'latitude'
  				},{
  					xtype : 'numberfield',
  					fieldLabel : 'Longitude',
  					name : 'longitude',
  					itemId : 'longitude',
  					emptyText : 'longitude'
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