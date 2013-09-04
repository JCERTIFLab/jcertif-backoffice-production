Ext.define('JCertifBO.store.Countries', {
	extend : 'Ext.data.Store',
	model : 'JCertifBO.model.Country',
	autoLoad: true,
	proxy: {
      type: 'ajax',
      api: {
          read: BACKEND_URL + '/ref/country/list',
          create: BACKEND_URL + '/ref/country/new',
          destroy: BACKEND_URL + '/ref/country/remove'
      },
      reader: {
          type: 'json'
      },
      writer: {
          type: 'json'
      }
  }
});