Ext.define('JCertifBO.store.Speakers', {
	extend : 'Ext.data.Store',
	model : 'JCertifBO.model.Speaker',
	proxy: {
      type: 'ajax',
      api: {
          read: BACKEND_URL + '/speaker/list',
          create: BACKEND_URL + '/speaker/register',
          update: BACKEND_URL + '/speaker/update',
          destroy: BACKEND_URL + '/speaker/remove'
      },
      reader: {
          type: 'json'
      },
      writer: {
          type: 'json'
      }
  }
});