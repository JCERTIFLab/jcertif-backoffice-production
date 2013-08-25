Ext.define('JCertifBO.store.Sessions', {
	extend : 'Ext.data.Store',
	model : 'JCertifBO.model.Session',
	proxy: {
      type: 'ajax',
      api: {
          read: BACKEND_URL + '/session/list' + '?access_token=' + Ext.util.Cookies.get('access_token') + '&provider=' + Ext.util.Cookies.get('provider') + '&user=' + Ext.util.Cookies.get('user'),
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