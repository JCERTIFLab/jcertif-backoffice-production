Ext.define('JCertifBO.store.Categories', {
	extend : 'Ext.data.Store',
	model : 'JCertifBO.model.Category',
	proxy: {
      type: 'ajax',
      api: {
          read: BACKEND_URL + '/ref/category/list',
          create: BACKEND_URL + '/ref/category/new',
          update: BACKEND_URL + '/ref/category/update',
          destroy: BACKEND_URL + '/ref/category/remove'
      },
      reader: {
          type: 'json'
      },
      writer: {
          type: 'json'
      }
  }
});