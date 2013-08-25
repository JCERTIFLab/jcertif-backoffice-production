Ext.define("JCertifBO.view.speaker.Grid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.speakergrid',
    
    cls: 'admin-options-grid',

    requires: ['Ext.toolbar.Toolbar', 'Ext.ux.exporter.Exporter'],
    
    border: false,
    
    initComponent: function() {
        
        Ext.apply(this, {
            store: this.store,

            columns: [{
                text: 'Email',
                dataIndex: 'email',
                flex: 1
            }, {
                text: 'Password',
                dataIndex: 'password',
                flex: 1,
                hidden: true
            }, {
                text: 'Title',
                dataIndex: 'title',
                flex: 1
            }, {
                text: 'Lastname',
                dataIndex: 'lastname',
                flex: 1
            }, {
                text: 'Firstname',
                dataIndex: 'firstname',
                flex: 1
            }, {
                text: 'Website',
                dataIndex: 'website',
                flex: 1
            }, {
                text: 'Country',
                dataIndex: 'country',
                flex: 1
            }, {
                text: 'City',
                dataIndex: 'city',
                flex: 1
            }, {
                text: 'Phone',
                dataIndex: 'phone',
                flex: 1
            }, {
                text: 'Photo',
                dataIndex: 'photo',
                flex: 1
            }, {
                text: 'Biography',
                dataIndex: 'biography',
                flex: 1
            }, {
                text: 'Company',
                dataIndex: 'company',
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
                    itemId: 'removeSpeaker',
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
                  this.down('#removeSpeaker').setDisabled(!records.length);
                }
            }
        });

        this.callParent(arguments);
    }
});