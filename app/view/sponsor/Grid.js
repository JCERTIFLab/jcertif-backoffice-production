Ext.define("JCertifBO.view.sponsor.Grid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sponsorgrid',
    
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
            store: this.store,

            columns: [{
                text: 'Email',
                dataIndex: 'email',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'Name',
                dataIndex: 'name',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'Logo',
                dataIndex: 'logo',
                flex: 1,
                editor: 'textfield'
            }, {
                text: 'Level',
                dataIndex: 'level',
                flex: 1,
                editor: {
                  xtype: 'combo',
                  store: Ext.create('JCertifBO.store.SponsorLevels'),
        					displayField: 'label',
                  valueField: 'label',
                }
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
                text: 'About',
                dataIndex: 'about',
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
                    itemId: 'removeSponsor',
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
                  this.down('#removeSponsor').setDisabled(!records.length);
                }
            }
        });

        this.callParent(arguments);
    }
});