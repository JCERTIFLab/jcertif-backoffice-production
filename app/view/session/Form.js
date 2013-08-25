Ext.define("JCertifBO.view.session.Form", {
    extend: 'Ext.form.Panel',
    alias : 'widget.sessionform',
    
    items : [ {
  		xtype : 'textfield',
  		fieldLabel : 'Title',
  		name : 'title',
  		itemId : 'title',
  		emptyText : 'title',
  		allowblank : false,
  	},{
  		xtype : 'textfield',
  		fieldLabel : 'Summary',
  		name : 'summary',
  		itemId : 'summary',
  		emptyText : 'summary',
  		allowblank : false,
  	},{
  		xtype : 'textfield',
  		fieldLabel : 'Description',
  		name : 'description',
  		itemId : 'description',
  		emptyText : 'description',
  		allowblank : false,
  	},{
  		xtype : 'combo',
  		fieldLabel : 'Status',
  		store: this.store,
  		displayField: 'label',
      valueField: 'label',
  		name : 'status',
  		itemId : 'status',
  		emptyText : 'status',
  		allowblank : false,
  	},{
  		xtype : 'textfield',
  		fieldLabel : 'Keyword',
  		name : 'keyword',
  		itemId : 'keyword',
  		emptyText : 'keyword',
  		allowblank : false,
  	},{
  		xtype : 'combo',
  		fieldLabel : 'Category',
  		store: this.store,
  		displayField: 'label',
      valueField: 'label',
  		name : 'category',
  		itemId : 'category',
  		emptyText : 'category',
  		allowblank : false,
  	},{
  		xtype : 'datefield',
  		fieldLabel : 'Start',
  		name : 'start',
  		format: 'd/m/Y H:i',
  		itemId : 'start',
  		emptyText : 'start'
  	},{
  		xtype : 'datefield',
  		fieldLabel : 'End',
  		name : 'end',
  		format: 'd/m/Y H:i',
  		itemId : 'end',
  		emptyText : 'end'
  	},{
  		xtype : 'combo',
  		fieldLabel : 'Speakers',
  		store: this.store,
  		tpl: '<tpl for="."><div class="x-boundlist-item">{firstname} {lastname}</div></tpl>',
      valueField: 'email',
      multiSelect: true,
  		name : 'speakers',
  		itemId : 'speakers',
  		emptyText : 'speakers'
  	},{
  		xtype : 'combo',
  		fieldLabel : 'Room',
  		store: this.store,
  		displayField: 'name',
      valueField: 'id',
  		name : 'room',
  		itemId : 'room',
  		emptyText : 'room'
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