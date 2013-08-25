Ext.define("JCertifBO.view.speaker.Form", {
    extend: 'Ext.form.Panel',
    alias : 'widget.speakerform',
    
    items : [ {
			xtype : 'textfield',
			vtype : 'email',
			fieldLabel : 'Email',
			name : 'email',
			itemId : 'email',
			emptyText : 'email',
			allowblank : false,
		},{
			xtype : 'textfield',
			fieldLabel : 'Password',
			name : 'password',
			itemId : 'password',
			emptyText : 'password',
			minLength: 8,
			allowblank : false,
		},{
			xtype : 'combo',
			fieldLabel : 'Title',
			store: this.store,
			displayField: 'label',
      valueField: 'label',
			name : 'title',
			itemId : 'title',
			emptyText : 'title'
		},{
			xtype : 'textfield',
			fieldLabel : 'Lastname',
			name : 'lastname',
			itemId : 'lastname',
			emptyText : 'lastname',
			allowblank : false,
		},{
			xtype : 'textfield',
			fieldLabel : 'Firstname',
			name : 'firstname',
			itemId : 'firstname',
			emptyText : 'firstname',
			allowblank : false,
		},{
			xtype : 'textfield',
			fieldLabel : 'Website',
			name : 'website',
			itemId : 'website',
			emptyText : 'website'
		},{
			xtype : 'combo',
			fieldLabel : 'Country',
			store: this.store,
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
			store: this.store,
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
			fieldLabel : 'Company',
			name : 'company',
			itemId : 'company',
			emptyText : 'company'
		},{
			xtype : 'textfield',
			vtype : 'url',
			fieldLabel : 'Phone',
			name : 'phone',
			itemId : 'phone',
			emptyText : 'phone'
		},{
			xtype : 'textfield',
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
			xtype : 'textfield',
			fieldLabel : 'Biography',
			name : 'biography',
			itemId : 'biography',
			emptyText : 'biography'
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