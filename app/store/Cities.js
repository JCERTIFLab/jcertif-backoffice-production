Ext.define('JCertifBO.store.Cities', {
	extend : 'Ext.data.Store',
	model : 'JCertifBO.model.City',
	autoLoad: true,
	proxy: {
      type: 'ajax',
      api: {
          read: BACKEND_URL + '/ref/city/list',
          create: BACKEND_URL + '/ref/city/new',
          destroy: BACKEND_URL + '/ref/city/remove'
      },
      reader: {
          type: 'json'
      },
      writer: {
          type: 'json'
      }
  }
});

