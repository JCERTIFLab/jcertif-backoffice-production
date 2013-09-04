Ext.define("JCertifBO.view.site.Form", {
    extend: 'Ext.form.Panel',
    alias : 'widget.siteform',
    
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
			store: this.store,
			triggerAction: 'all',
			displayField: 'name',
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
			store: this.store,
			triggerAction: 'all',
			disabled: true,
			displayField: 'name',
      valueField: 'name',
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
			vtype : 'url',
			fieldLabel : 'Photo',
			name : 'photo',
			itemId : 'photo',
			emptyText : 'photo',
			listeners:{
        change: function(textfield, value) {
          var preview = Ext.getCmp('photo-preview');
          preview.setSrc(value); 
        }
      }
		},{
			xtype : 'imagecomponent',
			id: 'photo-preview',
			cls: 'preview-img',
			src: Ext.BLANK_IMAGE_URL
      
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
});