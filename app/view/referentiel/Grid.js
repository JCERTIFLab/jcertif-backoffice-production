Ext.define("JCertifBO.view.referentiel.Grid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.referentielgrid',
    
    cls: 'admin-options-grid',

    requires: ['Ext.toolbar.Toolbar'],
    
    border: false,
    
    initComponent: function() {
        
        Ext.apply(this, {
            store: this.store,
            
            viewConfig: {
              loadMask: false
            },
            
            columns: [{
                text: 'Label',
                dataIndex: 'label',
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
                    itemId: 'removeReferentiel',
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
                  this.down('#removeReferentiel').setDisabled(!records.length);
                }
            }
        });

        this.callParent(arguments);
    }
});