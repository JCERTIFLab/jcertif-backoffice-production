Ext.define("JCertifBO.view.site.Grid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sitegrid',
    
    cls: 'admin-options-grid',

    requires: [
        'Ext.grid.plugin.RowEditing', 
        'Ext.toolbar.Toolbar',
        'Ext.form.field.ComboBox',
        'JCertifBO.store.Countries',
        'JCertifBO.store.Cities',
    ],
    
    border: false,
    
    initComponent: function() {
        
        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            autoCancel: false,
        });

        Ext.apply(this, {

            columns: [{
                text: 'Id',
                dataIndex: 'id',
                flex: 1,
                editor: 'numberfield',
                hidden: true
            }, {
                text: 'Name',
                dataIndex: 'name',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'Street',
                dataIndex: 'street',
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
                text: 'Contact',
                dataIndex: 'contact',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'Website',
                dataIndex: 'website',
                flex: 1,
                editor: 'textfield'
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
                text: 'Latitude',
                dataIndex: 'latitude',
                flex: 1,
                editor: 'numberfield'
            }, {
                text: 'Longitude',
                dataIndex: 'longitude',
                flex: 1,
                editor: 'numberfield'
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
            
            plugins: [rowEditing],
            listeners: {
                'selectionchange': function(selectionModel, records) {
                  this.down('#removeSite').setDisabled(!records.length);
                }
            }
        });

        this.callParent(arguments);
    }
});