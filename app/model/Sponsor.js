Ext.define('JCertifBO.model.Sponsor', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'email', type: 'auto' },
        { name: 'name', type: 'auto' },
        { name: 'logo', type: 'auto' },
        { name: 'level', type: 'auto' },
        { name: 'website', type: 'auto' },
        { name: 'city', type: 'auto' },
        { name: 'country', type: 'auto' },
        { name: 'phone', type: 'auto' },
        { name: 'about', type: 'auto' }

    ]
});
