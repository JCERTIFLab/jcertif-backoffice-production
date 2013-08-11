Ext.define('JCertifBO.model.Speaker', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'email', type: 'auto' },
        { name: 'password', type: 'auto' },
        { name: 'title', type: 'auto' },
        { name: 'lastname', type: 'auto' },
        { name: 'firstname', type: 'auto' },
        { name: 'website', type: 'auto' },
        { name: 'city', type: 'auto' },
        { name: 'country', type: 'auto' },
        { name: 'company', type: 'auto' },
        { name: 'phone', type: 'auto' },
        { name: 'photo', type: 'auto' },
        { name: 'biography', type: 'auto' }

    ]
});
