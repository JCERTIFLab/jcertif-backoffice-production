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
        html: 'JCertif BackOffice',
        flex: 1
    },{
        xtype: 'button',
        text: 'D&eacute;connexion',
        action: 'logout'
    }]
});