Ext.define('JCertifBO.store.SessionStatuses', {
	extend : 'Ext.data.Store',
	model : 'JCertifBO.model.SessionStatus',
	proxy: {
      type: 'ajax',
      api: {
          read: BACKEND_URL + '/ref/sessionstatus/list',
          create: BACKEND_URL + '/ref/sessionstatus/new',
          destroy: BACKEND_URL + '/ref/sessionstatus/remove'
      },
      reader: {
          type: 'json'
      },
      writer: {
          type: 'json'
      }
  }
});