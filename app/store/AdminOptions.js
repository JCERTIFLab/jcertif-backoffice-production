Ext.define('JCertifBO.store.AdminOptions', {
	extend : 'Ext.data.Store',
	model : 'JCertifBO.model.AdminOption',
	autoLoad : true,

	data: [
        {name: 'Cat&eacute;gories', createUrl: '/ref/category/new', loadUrl: '/ref/category/list', removeUrl: '/ref/category/remove', model: 'JCertifBO.model.Category', grid: 'referentielgrid'},
        {name: 'Statuts de session', createUrl: '/ref/sessionstatus/new', loadUrl: '/ref/sessionstatus/list', removeUrl: '/ref/sessionstatus/remove', model: 'JCertifBO.model.SessionStatus', grid: 'referentielgrid'},
        {name: 'Niveaux de sponsoring', createUrl: '/ref/sponsorlevel/new', loadUrl: '/ref/sponsorlevel/list', removeUrl: '/ref/sponsorlevel/remove', model: 'JCertifBO.model.SponsorLevel', grid: 'referentielgrid'},
        {name: 'Civilit&eacute;', createUrl: '/ref/title/new', loadUrl: '/ref/title/list', removeUrl: '/ref/title/remove', model: 'JCertifBO.model.Title', grid: 'referentielgrid'},
        {name: 'Pays', createUrl: '/ref/country/new', loadUrl: '/ref/country/list', removeUrl: '/ref/country/remove', model: 'JCertifBO.model.Country', grid: 'countrygrid'},
        {name: 'Villes', createUrl: '/ref/city/new', loadUrl: '/ref/city/list', removeUrl: '/ref/city/remove', model: 'JCertifBO.model.City', grid: 'citygrid'},
        {name: 'Sponsors', createUrl: '/sponsor/new', loadUrl: '/sponsor/list', updateUrl: '/sponsor/update', removeUrl: '/sponsor/remove', model: 'JCertifBO.model.Sponsor', grid: 'sponsorgrid'},
        {name: 'Sites', createUrl: '/site/new', loadUrl: '/site/list', updateUrl: '/site/update', removeUrl: '/site/remove', model: 'JCertifBO.model.Site', grid: 'sitegrid'},
        {name: 'Salles', createUrl: '/room/new', loadUrl: '/room/list', updateUrl: '/room/update', removeUrl: '/room/remove', model: 'JCertifBO.model.Room', grid: 'roomgrid'},
        {name: 'Sessions', createUrl: '/session/new', loadUrl: '/admin/session/list', updateUrl: '/session/update', removeUrl: '/session/remove', model: 'JCertifBO.model.Session', grid: 'sessiongrid'},
        {name: 'Pr&eacute;sentateurs', createUrl: '/speaker/register', loadUrl: '/admin/speaker/list', updateUrl: '/speaker/update', removeUrl: '/speaker/remove', model: 'JCertifBO.model.Speaker', grid: 'speakergrid'},
        {name: 'Participants', createUrl: '/participant/register', loadUrl: '/participant/list', updateUrl: '/participant/update', removeUrl: '/participant/remove', model: 'JCertifBO.model.Participant', grid: 'participantgrid'}
    ]
});
