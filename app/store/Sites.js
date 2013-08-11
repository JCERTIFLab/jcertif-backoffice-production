Ext.define('JCertifBO.store.Sites', {
	extend : 'Ext.data.Store',
	model : 'JCertifBO.model.Site',
	proxy: {
      type: 'ajax',
      api: {
          read: BACKEND_URL + '/site/list',
          create: BACKEND_URL + '/site/new',
          update: BACKEND_URL + '/site/update',
          destroy: BACKEND_URL + '/site/remove'
      },
      reader: {
          type: 'json'
      },
      writer: {
          type: 'json'
      }
  }
});