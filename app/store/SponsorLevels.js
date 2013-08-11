Ext.define('JCertifBO.store.SponsorLevels', {
	extend : 'Ext.data.Store',
	model : 'JCertifBO.model.SponsorLevel',
	proxy: {
      type: 'ajax',
      api: {
          read: BACKEND_URL + '/ref/sponsorlevel/list',
          create: BACKEND_URL + '/ref/sponsorlevel/new',
          destroy: BACKEND_URL + '/ref/sponsorlevel/remove'
      },
      reader: {
          type: 'json'
      },
      writer: {
          type: 'json'
      }
  }
});