Ext.define("JCertifBO.view.AppHeader", {
    extend: 'Ext.container.Container',
    alias: 'widget.appheader',
    layout: 'hbox',
    cls: 'app-header',
  
    items: [{
        xtype: 'component',
        autoEl: {
            tag: 'h1'
        },
        html: 'JCertif BackOffice v' + VERSION,
        flex: 1
    },{
        cls: 'logout-icon',
        xtype: 'button',
        action: 'logout',
        tooltip: 'Logout',
        autoWidth : true,
        autoHeight : true
    }]
});