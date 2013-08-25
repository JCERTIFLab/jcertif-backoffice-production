Ext.define('JCertifBO.model.Session', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'auto' },
        { name: 'title', type: 'auto' },
        { name: 'summary', type: 'auto' },
        { name: 'description', type: 'auto' },
        { name: 'status', type: 'auto' },
        { name: 'keyword', type: 'auto' },
        { name: 'category', type: 'auto' },
        { name: 'start', type: 'date', dateFormat: 'd/m/Y H:i' },
        { name: 'end', type: 'date', dateFormat: 'd/m/Y H:i' },
        { name: 'speakers', type: 'auto'},
        { name: 'room', type: 'auto' }

    ]
});
