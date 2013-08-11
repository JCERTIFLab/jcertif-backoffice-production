Ext.define("JCertifBO.view.Viewer", {
    extend: 'Ext.tab.Panel',
    alias: 'widget.viewer',
    
    requires: ['JCertifBO.view.option.Show'],
    
    activeItem: 0,
    margins: '5 5 5 5',
    
    cls: 'preview',
    
    initComponent: function() {
        this.items = [{
            xtype: 'optionshow'
        }];
        
        this.callParent(arguments);
    }
});