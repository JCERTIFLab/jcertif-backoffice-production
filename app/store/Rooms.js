Ext.define('JCertifBO.store.Rooms', {
	extend : 'Ext.data.Store',
	model : 'JCertifBO.model.Room',
	proxy: {
      type: 'ajax',
      api: {
          read: BACKEND_URL + '/room/list',
          create: BACKEND_URL + '/room/new',
          update: BACKEND_URL + '/room/update',
          destroy: BACKEND_URL + '/room/remove'
      },
      reader: {
          type: 'json'
      },
      writer: {
          type: 'json'
      }
  }
});