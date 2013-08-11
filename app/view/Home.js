Ext.define("JCertifBO.view.Home", {
	extend : 'Ext.container.Viewport',
	requires: [	    
      'JCertifBO.view.Viewer',
      'JCertifBO.view.AdminOptionsList',
      'Ext.layout.container.Border',
      'JCertifBO.view.AppHeader'
  ],
	layout: 'border',
	items: [{
        region: 'north',
        xtype: 'appheader'
    },{
        region: 'center',
        xtype: 'viewer'      
    },{
        region: 'west',
        width: 225,
        xtype: 'adminoptionslist'      
    }]
});
