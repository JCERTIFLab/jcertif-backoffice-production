Ext.define('JCertifBO.model.Referentiel', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'label', type: 'auto' },
        { name: 'version', type: 'auto' },
        { name: 'deleted', type: 'auto' }
    ]
});
