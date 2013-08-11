Ext.define('JCertifBO.model.Site', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'auto' },
        { name: 'name', type: 'auto' },
        { name: 'street', type: 'auto' },
        { name: 'city', type: 'auto' },
        { name: 'country', type: 'auto' },
        { name: 'contact', type: 'auto' },
        { name: 'website', type: 'auto' },
        { name: 'description', type: 'auto' },
        { name: 'photo', type: 'auto' },
        { name: 'latitude', type: 'auto' },
        { name: 'longitude', type: 'auto' }

    ]
});
