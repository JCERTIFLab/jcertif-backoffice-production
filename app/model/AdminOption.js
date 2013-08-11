Ext.define('JCertifBO.model.AdminOption', {
    extend: 'Ext.data.Model',
    
    proxy: {
        type: 'memory'
    },
    
    fields: [
        { name: 'name', type: 'auto' },
        { name: 'createUrl', type: 'auto' },
        { name: 'loadUrl', type: 'auto' },
        { name: 'updateUrl', type: 'auto' },
        { name: 'removeUrl', type: 'auto' },
        { name: 'model', type: 'auto' },
        { name: 'grid', type: 'auto' }

    ]
});
