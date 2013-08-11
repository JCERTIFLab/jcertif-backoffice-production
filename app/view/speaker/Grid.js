Ext.define("JCertifBO.view.speaker.Grid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.speakergrid',
    
    cls: 'admin-options-grid',

    requires: ['Ext.grid.plugin.RowEditing', 'Ext.toolbar.Toolbar'],
    
    border: false,
    
    initComponent: function() {
        
        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            autoCancel: false,
        });
        
        Ext.apply(this, {
            store: this.store,

            columns: [{
                text: 'Email',
                dataIndex: 'email',
                flex: 1,
                editor: {
                  xtype: 'textfield',
                  vtype: 'email'
                }
            }, {
                text: 'Password',
                dataIndex: 'password',
                flex: 1,
                editor: 'textfield',
                hidden: true
            }, {
                text: 'Title',
                dataIndex: 'title',
                flex: 1,
                editor: {
                  xtype: 'combo',
                  store: Ext.create('JCertifBO.store.Titles'),
        					displayField: 'label',
                  valueField: 'label'
                }
            }, {
                text: 'Lastname',
                dataIndex: 'lastname',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'Firstname',
                dataIndex: 'firstname',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'Website',
                dataIndex: 'website',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'Country',
                dataIndex: 'country',
                flex: 1,
                editor: {
                  xtype : 'combo',
                  store: Ext.create('JCertifBO.store.Countries'),
        					queryMode: 'local',
        					triggerAction: 'all',
        					displayField: 'country',
                  valueField: 'cid',
                  listeners:{
                    select:function(combo, value) {
                      var comboCity = Ext.getCmp('grid-combo-city'); 
                      comboCity.enable();       
                      comboCity.clearValue();
                      comboCity.store.clearFilter(true);
                      comboCity.store.filter('cid',  combo.getValue());
                    }
                  }
                }
            }, {
                text: 'City',
                dataIndex: 'city',
                flex: 1,
                editor: {
                  xtype : 'combo',
                  id:'grid-combo-city',
        					store: Ext.create('JCertifBO.store.Cities'),
        					queryMode: 'local',
        					triggerAction: 'all',
        					disabled: true,
        					displayField: 'city',
                  valueField: 'city',
                  lastQuery: ''
                }
            }, {
                text: 'Phone',
                dataIndex: 'phone',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'Photo',
                dataIndex: 'photo',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'Biography',
                dataIndex: 'biography',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'Company',
                dataIndex: 'company',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'version',
                dataIndex: 'version',
                hidden: true,
                width: 200
            }, {
                text: 'delete',
                dataIndex: 'delete',
                hidden: true,
                width: 200
            }],
            
            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    iconCls: 'admin-options-add',
                    text: 'Add',
                    action: 'add'
                },{
                    iconCls: 'admin-options-remove',
                    text: 'Remove',
                    itemId: 'removeSpeaker',
                    action: 'remove',
                    disabled: true
                },{
                    iconCls: 'admin-options-refresh',
                    text: 'Refresh',
                    action: 'refresh'
                }]
            }],
            
            plugins: [rowEditing],
            listeners: {
                'selectionchange': function(selectionModel, records) {
                  this.down('#removeSpeaker').setDisabled(!records.length);
                }
            }
        });

        this.callParent(arguments);
    }
});