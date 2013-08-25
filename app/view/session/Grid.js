Ext.define("JCertifBO.view.session.Grid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sessiongrid',
    
    cls: 'admin-options-grid',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.form.field.Date',
        'Ext.ux.exporter.Exporter',
        'Ext.grid.column.Date'
    ],
    
    border: false,
    
    initComponent: function() {
        
        Ext.apply(this, {
            store: this.store,

            columns: [{
                text: 'Id',
                dataIndex: 'id',
                flex: 1,
                hidden:true
            }, {
                text: 'Title',
                dataIndex: 'title',
                flex: 1
            }, {
                text: 'Summary',
                dataIndex: 'summary',
                flex: 1
            }, {
                text: 'Description',
                dataIndex: 'description',
                flex: 1
            }, {
                text: 'Status',
                dataIndex: 'status',
                flex: 1
            }, {
                text: 'Keyword',
                dataIndex: 'keyword',
                flex: 1
            }, {
                text: 'Category',
                dataIndex: 'category',
                flex: 1
            }, {
                xtype: 'datecolumn',
                text: 'Start',
                dataIndex: 'start',
                flex: 1,
                format: 'd/m/Y H:i'
                
            }, {
                xtype: 'datecolumn',
                text: 'End',
                dataIndex: 'end',
                flex: 1,
                format: 'd/m/Y H:i'
            }, {
                text: 'Speakers',
                dataIndex: 'speakers',
                flex: 1
            }, {
                text: 'Room',
                dataIndex: 'room',
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
                    itemId: 'removeSession',
                    action: 'remove',
                    disabled: true
                },{
                    iconCls: 'admin-options-refresh',
                    text: 'Refresh',
                    action: 'refresh'
                },{
                    iconCls: 'admin-options-download',
                    text: 'Export',         
                    action: 'export'                                 
                },{
                    iconCls: 'admin-options-upload',
                    text: 'Import',
                    action: 'import'
                }]
            }],

            listeners: {
                'selectionchange': function(selectionModel, records) {
                  this.down('#removeSession').setDisabled(!records.length);
                }
            }
        });

        this.callParent(arguments);
    }
});