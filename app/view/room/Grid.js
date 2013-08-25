Ext.define("JCertifBO.view.room.Grid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.roomgrid',
    
    cls: 'admin-options-grid',

    requires: ['Ext.toolbar.Toolbar'],
    
    border: false,
    
    store : 'Sites',
    
    initComponent: function() {
        
        Ext.apply(this, {
            store: this.store,

            columns: [{
                text: 'Id',
                dataIndex: 'id',
                flex: 1,
                hidden: true
            }, {
                text: 'Name',
                dataIndex: 'name',
                flex: 1
            }, {
                text: 'Site',
                dataIndex: 'site',
                flex: 1
            }, {
                text: 'Seats',
                dataIndex: 'seats',
                flex: 1
            }, {
                text: 'Description',
                dataIndex: 'description',
                flex: 1
            }, {
                text: 'Photo',
                dataIndex: 'photo',
                flex: 1
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

            listeners: {
                'selectionchange': function(selectionModel, records) {
                  this.down('#removeRoom').setDisabled(!records.length);
                }
            }
        });

        this.callParent(arguments);
    }
});