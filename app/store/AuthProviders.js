Ext.define('JCertifBO.store.AuthProviders', {
	extend : 'Ext.data.Store',
	model : 'JCertifBO.model.AuthProvider',
	autoLoad : true,

	data: [
        {name: 'userpass', authorizationUrl: BACKEND_URL + '/admin', accessTokenUrl: BACKEND_URL + '/token/new', requestTokenUrl: BACKEND_URL + '/token/new'},
        {name: 'google', authorizationUrl: 'https://accounts.google.com/o/oauth2/auth', accessTokenUrl: 'https://accounts.google.com/o/oauth2/token', clientId: '854354618002.apps.googleusercontent.com', scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email', logoutUrl: 'http://accounts.google.com/Logout'},
        {name: 'github', authorizationUrl: 'https://github.com/login/oauth/authorize', accessTokenUrl: 'https://github.com/login/oauth/access_token', clientId: '672000c39117d988c3d9', clientSecret: 'e97fdd89ec9c08d27c4de56444f6908c285fcda3', scope: 'user:email'}
    ]
});