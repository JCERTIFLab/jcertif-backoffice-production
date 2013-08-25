Ext.define('JCertifBO.model.GoogleToken', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'auto' },
        { name: 'email', type: 'auto' },
        { name: 'verified_email', type: 'auto' },
        { name: 'name', type: 'auto' },
        { name: 'given_name', type: 'auto' },
        { name: 'family_name', type: 'auto' },
        { name: 'link', type: 'auto' },
        { name: 'picture', type: 'auto' },
        { name: 'gender', type: 'auto' },
        { name: 'birthday', type: 'auto' },
        { name: 'locale', type: 'auto' }
    ]
});
