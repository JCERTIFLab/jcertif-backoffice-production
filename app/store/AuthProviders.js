Ext.define('JCertifBO.store.AuthProviders', {
	extend : 'Ext.data.Store',
	model : 'JCertifBO.model.AuthProvider',
	autoLoad : true,

	data: [
        {name: 'userpass', authorizationUrl: BACKEND_URL + '/admin', accessTokenUrl: BACKEND_URL + '/token/new', requestTokenUrl: BACKEND_URL + '/token/new'},
        {name: 'google', authorizationUrl: 'https://accounts.google.com/o/oauth2/auth', accessTokenUrl: 'https://accounts.google.com/o/oauth2/token', clientId: '854354618002.apps.googleusercontent.com', scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email', logoutUrl: 'http://accounts.google.com/Logout'},
        {name: 'github', authorizationUrl: 'https://github.com/login/oauth/authorize', accessTokenUrl: 'https://github.com/login/oauth/access_token', clientId: '8abe9e604edb2d0bb7b8', clientSecret: '5955946d098f7eab0c1160e35d76e4859fea1962', scope: 'user:email'}
    ]
});
