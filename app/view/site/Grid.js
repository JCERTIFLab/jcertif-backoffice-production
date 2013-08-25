Ext.define("JCertifBO.view.site.Grid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sitegrid',
    
    cls: 'admin-options-grid',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.form.field.ComboBox',
        'JCertifBO.store.Countries',
        'JCertifBO.store.Cities',
    ],
    
    border: false,
    
    initComponent: function() {

        Ext.apply(this, {

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
                text: 'Street',
                dataIndex: 'street',
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
                text: 'Contact',
                dataIndex: 'contact',
                flex: 1
            }, {
                text: 'Website',
                dataIndex: 'website',
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
                text: 'Latitude',
                dataIndex: 'latitude',
                flex: 1
            }, {
                text: 'Longitude',
                dataIndex: 'longitude',
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
                    itemId: 'removeSite',
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
                  this.down('#removeSite').setDisabled(!records.length);
                }
            }
        });

        this.callParent(arguments);
    }
});