Ext.define("JCertifBO.view.session.Grid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sessiongrid',
    
    cls: 'admin-options-grid',

    requires: [
        'Ext.grid.plugin.RowEditing', 
        'Ext.toolbar.Toolbar',
        'Ext.form.field.Date'
    ],
    
    border: false,
    
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
                hidden:true
            }, {
                text: 'Title',
                dataIndex: 'title',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'Summary',
                dataIndex: 'summary',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'Description',
                dataIndex: 'description',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'Status',
                dataIndex: 'status',
                flex: 1,
                editor: {
                  xtype: 'combo',
                  store: Ext.create('JCertifBO.store.SessionStatuses'),
        					displayField: 'label',
                  valueField: 'label'
                }
            }, {
                text: 'Keyword',
                dataIndex: 'keyword',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'Category',
                dataIndex: 'category',
                flex: 1,
                editor: {
                  xtype: 'combo',
                  store: Ext.create('JCertifBO.store.Categories'),
        					displayField: 'label',
                  valueField: 'label'
                }
            }, {
                text: 'Start',
                dataIndex: 'start',
                flex: 1,
                renderer: Ext.util.Format.dateRenderer('d/m/Y H:m'),
                editor: {
                  xtype: 'datefield',
                  format: 'd/m/Y H:m',
                  renderer: Ext.util.Format.dateRenderer('d/m/Y H:m')
                }
                
            }, {
                text: 'End',
                dataIndex: 'end',
                flex: 1,
                renderer: Ext.util.Format.dateRenderer('d/m/Y H:m'),
                editor: {
                  xtype: 'datefield',
                  format: 'd/m/Y H:m',
                  renderer: Ext.util.Format.dateRenderer('d/m/Y H:m')
                }
            }, {
                text: 'Speakers',
                dataIndex: 'speakers',
                flex: 1,
                editor: {
                  xtype: 'combo',
                  store: Ext.create('JCertifBO.store.Speakers'),
        					tpl: '<tpl for="."><div class="x-boundlist-item">{firstname} {lastname}</div></tpl>',
                  valueField: 'email',
                  multiSelect: true
                }
            }, {
                text: 'Room',
                dataIndex: 'room',
                flex: 1,
                editor: {
                  xtype: 'combo',
                  store: Ext.create('JCertifBO.store.Rooms'),
        					displayField: 'name',
                  valueField: 'id'
                }
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
                }]
            }],
            
            plugins: [rowEditing],
            listeners: {
                'selectionchange': function(selectionModel, records) {
                  this.down('#removeSession').setDisabled(!records.length);
                }
            }
        });

        this.callParent(arguments);
    }
});