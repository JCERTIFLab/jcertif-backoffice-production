Ext.define("JCertifBO.view.AdminOptionsList", {
    extend: 'Ext.panel.Panel',
    alias: 'widget.adminoptionslist',

    title: "Option d'Administration",
    collapsible: true,
    animCollapse: true,
    margins: '5 0 5 5',
    layout: 'fit',

    items: [{
        xtype: 'dataview',
        trackOver: true,
        store: this.store,
        cls: 'admin-options-list',
        itemSelector: '.admin-options-list-item',
        overItemCls: 'admin-options-list-item-hover',
        tpl: '<tpl for="."><div class="admin-options-list-item">{name}</div></tpl>'
    }]
    
});