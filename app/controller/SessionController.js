Ext.define('JCertifBO.controller.SessionController', {
    extend: 'Ext.app.Controller',
    
    stores: ['AdminOptions', 'SessionStatuses', 'Categories', 'Speakers', 'Rooms'],
    models: ['AdminOption', 'Session'],
    
    views: [
        'session.Grid',
        'session.Add',
        'session.Edit',
        'session.Export',
        'session.Import'
    ],


    refs: [
        {ref: 'viewer', selector: 'viewer'},
        {ref: 'sessionGrid', selector: 'sessiongrid'},
        {ref: 'sessionFormStatuses', selector: 'sessionform combo#status'},
        {ref: 'sessionFormCategories', selector: 'sessionform combo#category'},
        {ref: 'sessionFormSpeakers', selector: 'sessionform combo#speakers'},
        {ref: 'sessionFormRooms', selector: 'sessionform combo#room'},
        {ref: 'sessionExportForm', selector: 'sessionexport'},
        {ref: 'sessionExportFormFormats', selector: 'sessionexport combo#format'}
    ],
    
    init: function() {
        this.control({
            'sessiongrid': {
                itemdblclick: this.showEditSessionView
            },
            'sessiongrid button[action=add]': {
                click: this.showAddSessionView
            },
            'sessiongrid button[action=refresh]': {
                click: this.refreshSessionGrid
            },
      			'sessiongrid button[action=remove]' : {
      				  click : this.removeSession
      			},
      			'sessiongrid button[action=export]' : {
      				  click : this.showExportDialog
      			},
      			'sessiongrid button[action=import]' : {
      				  click : this.showImportDialog
      			},
            'sessionadd button[action=add]' : {
      				  click : this.addSession
      			},
      			'sessionadd button[action=cancel]' : {
      				  click : this.cancel
      			},
            'sessionedit button[action=save]' : {
      				  click : this.updateSession
      			},
      			'sessionedit button[action=cancel]' : {
      				  click : this.cancel
      			},
      			'sessionexport button[action=export]' : {
      				  click : this.exportSessions
      			},
      			'sessionimport button[action=import]' : {
      				  click : this.importSessions
      			},
      			'sessionimport button[action=cancel]' : {
      				  click : this.cancel
      			},
        });
    },
    
    showAddSessionView: function(btn){
      Ext.create('JCertifBO.view.session.Add');
      this.getSessionFormStatuses().bindStore(this.getSessionStatusesStore());
      this.getSessionFormCategories().bindStore(this.getCategoriesStore());
      this.getSessionFormSpeakers().bindStore(this.getSpeakersStore());
      this.getSessionFormRooms().bindStore(this.getRoomsStore());
    },
    
    showEditSessionView: function(grid, record){
      var view = Ext.create('JCertifBO.view.session.Edit');
      view.down('form').loadRecord(record);
      this.getSessionFormStatuses().bindStore(this.getSessionStatusesStore());
      this.getSessionFormCategories().bindStore(this.getCategoriesStore());
      this.getSessionFormSpeakers().bindStore(this.getSpeakersStore());
      this.getSessionFormRooms().bindStore(this.getRoomsStore());
    },
    
    showExportDialog: function(btn){     
      Ext.create("JCertifBO.view.session.Export");
    },
    
    showImportDialog: function(btn){     
      Ext.create("JCertifBO.view.session.Import");
    },
    
    refreshSessionGrid: function(btn){
      this.getSessionGrid().getStore().load();
    },
    
    addSession: function(btn){
      var win = btn.up('window'), form = win.down('form').getForm();
      form.setValues({
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider')
      });
      var controller = this;
  		if (form.isValid()) {
  			Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSessionGrid().getStore().model.modelName, 0, false, true, true).get('createUrl'),
  				jsonData : Ext.JSON.encode(form.getValues()),
  				success : function(response) {
  				  controller.getSessionGrid().getStore().load();
            win.close();														
  				},
  				failure : function(response) {
  					Ext.MessageBox.show({
  						title : 'Error',
  						msg : response.responseText,
  						buttons : Ext.MessageBox.OK,
  						icon : Ext.MessageBox.ERROR
  					});
  				}
  			});
  		}
    },
    
    removeSession: function(btn){
      var session = this.getSessionGrid().getSelectionModel().getSelection()[0];
      var data = {
        id: session.raw.id,
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider'),
      };
      var controller = this;
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSessionGrid().getStore().model.modelName, 0, false, true, true).get('removeUrl'),
  				jsonData : Ext.JSON.encode(data),
  				success : function(response) {
  				  controller.getSessionGrid().getStore().load();
            Ext.MessageBox.show({
  						title : 'Message',
  						msg : "L'&eacute;l&eacute;ment &agrave; bien &eacute;t&eacute; supprim&eacute;",
  						buttons : Ext.MessageBox.OK,
  						icon : Ext.MessageBox.INFO
  					});														
  				},
  				failure : function(response) {
  					Ext.MessageBox.show({
  						title : 'Error',
  						msg : response.responseText,
  						buttons : Ext.MessageBox.OK,
  						icon : Ext.MessageBox.ERROR
  					});
  				}
  			});
    },
    
    updateSession: function(btn){
      var win    = btn.up('window'),
        form   = win.down('form'),
        values = form.getValues(),
        session = this.getSessionGrid().getSelectionModel().getSelection()[0];
        
      var data = values;
      //on rajoute la version de l'objet avant modification
      data['version'] = session.raw['version'];
      data['id'] = session.raw['id'];
      data['user'] = Ext.util.Cookies.get('user');
      data['access_token'] = Ext.util.Cookies.get('access_token');
      data['provider'] = Ext.util.Cookies.get('provider');

      var controller = this;
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSessionGrid().getStore().model.modelName, 0, false, true, true).get('updateUrl'),
  				jsonData : Ext.JSON.encode(data),
  				success : function(response) {
  				  controller.getSessionGrid().getStore().removeAll();
  				  controller.getSessionGrid().getStore().load();
  				  win.close();
            Ext.MessageBox.show({
  						title : 'Message',
  						msg : "L'&eacute;l&eacute;ment &agrave; bien &eacute;t&eacute; sauvegard&eacute;",
  						buttons : Ext.MessageBox.OK,
  						icon : Ext.MessageBox.INFO
  					});														
  				},
  				failure : function(response) {
  					Ext.MessageBox.show({
  						title : 'Error',
  						msg : response.responseText,
  						buttons : Ext.MessageBox.OK,
  						icon : Ext.MessageBox.ERROR
  					});
  				}
  			});
    },
    
    exportSessions: function(btn){
      var win    = btn.up('window'),
          format = this.getSessionExportFormFormats().getValue();
      var filename = '2013_JCertif_Sessions.' + Ext.ux.exporter.Exporter.getFormatterByName(format).extension;
      //extract data from grid as csv format
      var data = Ext.ux.exporter.Exporter.exportAny(this.getSessionGrid(), format, {});
      var params = {};
      params['access_token'] = Ext.util.Cookies.get('access_token');
      params['provider'] = Ext.util.Cookies.get('provider');
      params['user'] = Ext.util.Cookies.get('user');
      params['filename'] = filename;
      params['data'] = data;
      //save data on the server in a temp file      
      Ext.Ajax.request({
          url: BACKEND_URL + '/admin/export/write',
          jsonData : Ext.JSON.encode(params),
          success: function(response) {
              //prompt a download of the temp file that was saved
              var ifrm = document.getElementById('downloadFrame');
              win.close();
              ifrm.src = BACKEND_URL + '/admin/export/read' + '?access_token=' + Ext.util.Cookies.get('access_token') + '&provider=' + Ext.util.Cookies.get('provider') + '&user=' + Ext.util.Cookies.get('user') + '&filename=' + filename;
          },
          failure: function(response){
              Ext.MessageBox.show({
    						title : 'Error',
    						msg : response.responseText,
    						buttons : Ext.MessageBox.OK,
    						icon : Ext.MessageBox.ERROR
    					});
          }
      });
    },
    
    importSessions: function(btn){
      var win    = btn.up('window'),
          form = win.down('form').getForm(),
          file = Ext.getCmp('sessions-file-upload').getEl().down('input[type=file]').dom.files[0];
      
      var controller = this;
      if (form.isValid()) {
          //extract data from grid as csv format
          var reader = new FileReader();
          var sessions = [];
          var errors = [];
          var waitingBox = Ext.MessageBox.show({
             msg: 'Uploading your sessions, please wait...',
             progressText: 'Uploading...',
             width:300,
             wait:true,
             waitConfig: {interval:200},
             icon:'ext-mb-upload',
             iconHeight: 50,
             animateTarget: 'sessions-file-upload'
          });
          var totalNumberOfSessions = 0 ;
          var proceededNumberOfSessions = 0 ;
          reader.onload = (function(theFile) {
              return function(e) {
                  var allTextLines = e.target.result.split(/\r\n|\n/);
                  var headers = allTextLines[0].split(';');
                  totalNumberOfSessions = allTextLines.length - 1;
                  for (var i=1; i<allTextLines.length; i++) {
                      var data = allTextLines[i].split(';');
                      if (data.length == headers.length) {         
                          var params = {};
                          for (var j=0; j<headers.length; j++) {
                              params[headers[j].toLowerCase().replace(/\"/g,'')] = data[j].replace(/\"/g,'');
                          }
                          Ext.Ajax.request({
                            url: BACKEND_URL + controller.getAdminOptionsStore().findRecord('model', controller.getSessionGrid().getStore().model.modelName, 0, false, true, true).get('createUrl'),
                            jsonData : Ext.JSON.encode(params),
                            success: function(response, options) {
                                sessions.push(Ext.decode(options.jsonData).title);
                            },
                            failure: function(response, options){
                                errors.push(Ext.decode(options.jsonData).title);
                                
                            },
                            callback : function(){
                                proceededNumberOfSessions++;
                                if(totalNumberOfSessions == proceededNumberOfSessions){
                                  waitingBox.close();
                                  if(errors.length == 0){
                                    Ext.MessageBox.show({
                          						title : 'Success',
                          						msg : 'Your sessions have been uploaded',
                          						buttons : Ext.MessageBox.OK,
                          						icon : Ext.MessageBox.INFO
                          					});
                                  }else{
                                    var errorReportHtml = '';
                                    for (var j=0; j<errors.length; j++) {
                                        errorReportHtml += errors[j] + '<br />';
                                    }
                                    Ext.MessageBox.show({
                          						title : 'Warning',
                          						msg : 'One or more sessions upload failed : <br/>' + errorReportHtml,
                          						buttons : Ext.MessageBox.OK,
                          						icon : Ext.MessageBox.WARNING
                          					});
                                  }
                                  controller.getSessionGrid().getStore().load();
                                }
                            }
                        });
                      }else{
                        waitingBox.close();
                        Ext.MessageBox.show({
              						title : 'Error',
              						msg : 'File ' + file.name + ' not well formated',
              						buttons : Ext.MessageBox.OK,
              						icon : Ext.MessageBox.ERROR
              					});
                      }
                  }
              };
          })(file);         
          win.close();
          reader.readAsBinaryString(file);
      }
    },
    
    cancel: function(btn){
      btn.up('window').close();
    }
});
