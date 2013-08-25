Ext.define('JCertifBO.model.AuthProvider', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'name', type: 'auto' },
        { name: 'authorizationUrl', type: 'auto' },
        { name: 'accessTokenUrl', type: 'auto' },
        { name: 'requestTokenUrl', type: 'auto' },
        { name: 'logoutUrl', type: 'auto' },
        { name: 'clientId', type: 'auto' },
        { name: 'clientSecret', type: 'auto' },
        { name: 'scope', type: 'auto' }
    ]
});
