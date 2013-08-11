Ext.define('JCertifBO.store.Sessions', {
	extend : 'Ext.data.Store',
	model : 'JCertifBO.model.Session',
	proxy: {
      type: 'ajax',
      api: {
          read: BACKEND_URL + '/session/list',
          create: BACKEND_URL + '/session/new',
          update: BACKEND_URL + '/session/update',
          destroy: BACKEND_URL + '/session/remove'
      },
      reader: {
          type: 'json'
      },
      writer: {
          type: 'json'
      }
  }
});