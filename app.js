BACKEND_URL='http://www.jcertif.backend.vm-host.net';
var splashscreen;

Ext.application({
    name       : 'JCertifBO',
    appFolder  : 'app',
    
    
    controllers : [
        'LoginController',
        'HomeController',
        'AdminOptionsController',
        'ReferentielController',
        'SponsorController',
        'SiteController',
        'RoomController',
        'SessionController',
        'SpeakerController',
        'ParticipantController'
    ],      
    autoCreateViewport: true
});
