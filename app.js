var BACKEND_URL='http://www.jcertif.backend.vm-host.net';
var BACKOFFICE_URL='http://jcertiflab.github.io/jcertif-backoffice-20.5';
var VERSION='0.5';

var splashscreen;

Ext.application({
    name       : 'JCertifBO',
    appFolder  : 'app',
        
    paths: {
        'Ext.ux': 'ext/src/ux/'
    },
    
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

Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();
});
