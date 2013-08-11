Ext.define("JCertifBO.view.room.Grid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.roomgrid',
    
    cls: 'admin-options-grid',

    requires: ['Ext.grid.plugin.RowEditing', 'Ext.toolbar.Toolbar'],
    
    border: false,
    
    store : 'Sites',
    
    initComponent: function() {
        
        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            autoCancel: false,
        });
        
        Ext.apply(this, {
            store: this.store,

            columns: [{
                text: 'Id',
                dataIndex: 'id',
                flex: 1,
                editor: 'textfield',
                hidden: true
            }, {
                text: 'Name',
                dataIndex: 'name',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'Site',
                dataIndex: 'site',
                flex: 1,
                editor: {
                  xtype: 'combo',
                  store: this.store,
        					displayField: 'name',
                  valueField: 'id',
                }
            }, {
                text: 'Seats',
                dataIndex: 'seats',
                flex: 1,
                editor: 'numberfield'
            }, {
                text: 'Description',
                dataIndex: 'description',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'Photo',
                dataIndex: 'photo',
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
                    itemId: 'removeRoom',
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
                  this.down('#removeRoom').setDisabled(!records.length);
                }
            }
        });

        this.callParent(arguments);
    }
});