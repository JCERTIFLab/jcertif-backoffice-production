Ext.define("JCertifBO.view.city.Grid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.citygrid',
    
    cls: 'admin-options-grid',

    requires: ['Ext.toolbar.Toolbar'],
    
    border: false,
    
    initComponent: function() {
        
        Ext.apply(this, {
            store: this.store,
            
            columns: [{
                text: 'Name',
                dataIndex: 'name',
                flex: 1
            }, {
                text: 'Country Id',
                dataIndex: 'cid'
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
                    itemId: 'removeCity',
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
                  this.down('#removeCity').setDisabled(!records.length);
                }
            }
        });

        this.callParent(arguments);
    }
});