Ext.define("JCertifBO.view.room.Form", {
    extend: 'Ext.form.Panel',
    alias : 'widget.roomform',
    
    items : [ {
			xtype : 'textfield',
			fieldLabel : 'Name',
			name : 'name',
			itemId : 'name',
			emptyText : 'name',
			allowblank : false,
		},{
			xtype : 'combo',
			fieldLabel : 'Site',
			store : this.store,
			displayField: 'name',
      valueField: 'id',
			name : 'site',
			itemId : 'site',
			emptyText : 'site',
			allowblank : false,
		},{
			xtype : 'numberfield',
			fieldLabel : 'Seats',
			name : 'seats',
			itemId : 'seats',
			emptyText : 'seats',
			allowblank : false,
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