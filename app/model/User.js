Ext.define('JCertifBO.model.User', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'email', type: 'auto' },
        { name: 'title', type: 'auto' },
        { name: 'lastname', type: 'auto' },
        { name: 'firstname', type: 'auto' },
        { name: 'photo', type: 'auto' },
        { name: 'access_token', type: 'auto' }

    ]
});
