Ext.define('JCertifBO.model.Room', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'auto' },
        { name: 'name', type: 'auto' },
        { name: 'site', type: 'auto' },
        { name: 'seats', type: 'auto' },
        { name: 'description', type: 'auto' },
        { name: 'photo', type: 'auto' }

    ]
});
