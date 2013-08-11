Ext.define('JCertifBO.store.Titles', {
	extend : 'Ext.data.Store',
	model : 'JCertifBO.model.Title',
	proxy: {
      type: 'ajax',
      api: {
          read: BACKEND_URL + '/ref/title/list',
          create: BACKEND_URL + '/ref/title/new',
          destroy: BACKEND_URL + '/ref/title/remove'
      },
      reader: {
          type: 'json'
      },
      writer: {
          type: 'json'
      }
  }
});