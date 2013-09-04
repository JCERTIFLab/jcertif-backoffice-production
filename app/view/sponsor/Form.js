Ext.define("JCertifBO.view.sponsor.Form", {
    extend: 'Ext.form.Panel',
    alias : 'widget.sponsorform',
    
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
			store: this.store,
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
			vtype : 'url',
			fieldLabel : 'Logo',
			name : 'logo',
			itemId : 'logo',
			emptyText : 'logo',
			allowblank : false,
      listeners:{
        change: function(textfield, value) {
          var preview = Ext.getCmp('logo-preview');
          preview.setSrc(value); 
        }
      }
		},{
			xtype : 'imagecomponent',
			id: 'logo-preview',
			cls: 'preview-img',
			src: Ext.BLANK_IMAGE_URL
      
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
});