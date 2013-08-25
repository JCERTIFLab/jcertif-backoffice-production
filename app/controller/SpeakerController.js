Ext.define('JCertifBO.controller.SpeakerController', {
    extend: 'Ext.app.Controller',
    
    stores: ['AdminOptions', 'Titles', 'Countries', 'Cities'],
    models: ['AdminOption', 'Speaker'],
    
    views: [
        'speaker.Grid',
        'speaker.Add',
        'speaker.Edit',
        'speaker.Export',
        'speaker.Import'
    ],


    refs: [
        {ref: 'viewer', selector: 'viewer'},
        {ref: 'speakerGrid', selector: 'speakergrid'},
        {ref: 'speakerFormTitles', selector: 'speakerform combo#title'},
        {ref: 'speakerFormCountries', selector: 'speakerform combo#country'},
        {ref: 'speakerFormCities', selector: 'speakerform combo#city'},
        {ref: 'speakerFormPasswordField', selector: 'speakerform textfield#password'},
        {ref: 'speakerExportForm', selector: 'speakerexport'},
        {ref: 'speakerExportFormFormats', selector: 'speakerexport combo#format'}
    ],
    
    init: function() {
        this.control({
            'speakergrid': {
                itemdblclick: this.showEditSpeakerView
            },
            'speakergrid button[action=add]': {
                click: this.showAddSpeakerView
            },
            'speakergrid button[action=refresh]': {
                click: this.refreshSpeakerGrid
            },
      			'speakergrid button[action=remove]' : {
      				  click : this.removeSpeaker
      			},
      			'speakergrid button[action=export]' : {
      				  click : this.showExportDialog
      			},
      			'speakergrid button[action=import]' : {
      				  click : this.showImportDialog
      			},
            'speakeradd button[action=add]' : {
      				  click : this.addSpeaker
      			},
      			'speakeradd button[action=cancel]' : {
      				  click : this.cancel
      			},
            'speakeredit button[action=save]' : {
      				  click : this.updateSpeaker
      			},
      			'speakeredit button[action=cancel]' : {
      				  click : this.cancel
      			},
      			'speakerexport button[action=export]' : {
      				  click : this.exportSpeakers
      			},
      			'speakerimport button[action=import]' : {
      				  click : this.importSpeakers
      			},
      			'speakerimport button[action=cancel]' : {
      				  click : this.cancel
      			},
        });
    },
    
    showAddSpeakerView: function(btn){
      Ext.create('JCertifBO.view.speaker.Add');
      this.getSpeakerFormTitles().bindStore(this.getTitlesStore());
      this.getSpeakerFormCountries().bindStore(this.getCountriesStore());
      this.getSpeakerFormCities().bindStore(this.getCitiesStore());
    },
    
    showEditSpeakerView: function(grid, record){
      var view = Ext.create('JCertifBO.view.speaker.Edit');
      view.down('form').loadRecord(record);
      this.getSpeakerFormTitles().bindStore(this.getTitlesStore());
      this.getSpeakerFormCountries().bindStore(this.getCountriesStore());
      this.getSpeakerFormCities().bindStore(this.getCitiesStore());
      this.getSpeakerFormPasswordField().setDisabled(true);
    },
    
    showExportDialog: function(btn){     
      Ext.create("JCertifBO.view.speaker.Export");
    },
    
    showImportDialog: function(btn){     
      Ext.create("JCertifBO.view.speaker.Import");
    },
    
    refreshSpeakerGrid: function(btn){
      this.getSpeakerGrid().getStore().load();
    },
    
    addSpeaker: function(btn){
      var win = btn.up('window'), form = win.down('form').getForm();
      form.setValues({
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider')
      });
      var controller = this;
  		if (form.isValid()) {
  			Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSpeakerGrid().getStore().model.modelName).get('createUrl'),
  				jsonData : Ext.JSON.encode(form.getValues()),
  				success : function(response) {
  				  controller.getSpeakerGrid().getStore().load();
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
    
    removeSpeaker: function(btn){
      var speaker = this.getSpeakerGrid().getSelectionModel().getSelection()[0];
      var data = {
        email: speaker.raw.email,
        user: Ext.util.Cookies.get('user'),
        access_token: Ext.util.Cookies.get('access_token'),
        provider: Ext.util.Cookies.get('provider'),
      };
      var controller = this;
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSpeakerGrid().getStore().model.modelName).get('removeUrl'),
  				jsonData : Ext.JSON.encode(data),
  				success : function(response) {
  				  controller.getSpeakerGrid().getStore().load();
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
    
    updateSpeaker: function(btn){
      var win    = btn.up('window'),
        form   = win.down('form'),
        values = form.getValues(),
        speaker = this.getSpeakerGrid().getSelectionModel().getSelection()[0];
      
      var data = values;
      //on rajoute la version de l'objet avant modification
      data['version'] = speaker.raw['version'];
      data['user'] = Ext.util.Cookies.get('user');
      data['access_token'] = Ext.util.Cookies.get('access_token');
      data['provider'] = Ext.util.Cookies.get('provider');

      var controller = this;
      Ext.Ajax.request({
  				url : BACKEND_URL + this.getAdminOptionsStore().findRecord('model', this.getSpeakerGrid().getStore().model.modelName).get('updateUrl'),
  				jsonData : Ext.JSON.encode(data),
  				success : function(response) {
  				  controller.getSpeakerGrid().getStore().removeAll();
  				  controller.getSpeakerGrid().getStore().load();
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
    
    exportSpeakers: function(btn){
      var win    = btn.up('window'),
            format = this.getSpeakerExportFormFormats().getValue();
      var filename = '2013_JCertif_Speakers.' + Ext.ux.exporter.Exporter.getFormatterByName(format).extension;
      //extract data from grid as csv format
      var data = Ext.ux.exporter.Exporter.exportAny(this.getSpeakerGrid(), format, {});
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
    
    importSpeakers: function(btn){
      var win    = btn.up('window'),
          form = win.down('form').getForm(),
          file = Ext.getCmp('speakers-file-upload').getEl().down('input[type=file]').dom.files[0];
          
      var controller = this;
      if (form.isValid()) {
          //extract data from grid as csv format
          var reader = new FileReader();
          var speakers = [];
          var errors = [];
          var waitingBox = Ext.MessageBox.show({
             msg: 'Uploading your speakers, please wait...',
             progressText: 'Uploading...',
             width:300,
             wait:true,
             waitConfig: {interval:200},
             icon:'ext-mb-upload',
             iconHeight: 50,
             animateTarget: 'speakers-file-upload'
          });
          var totalNumberOfSpeakers = 0 ;
          var proceededNumberOfSpeakers = 0 ;
          var defaultPassword = 'adminjcertif' ;
          reader.onload = (function(theFile) {
              return function(e) {
                  var allTextLines = e.target.result.split(/\r\n|\n/);
                  var headers = allTextLines[0].split(';');
                  totalNumberOfSpeakers = allTextLines.length - 1;
                  for (var i=1; i<allTextLines.length; i++) {
                      var data = allTextLines[i].split(';');
                      if (data.length == headers.length) {         
                          var params = {};
                          for (var j=0; j<headers.length; j++) {
                              params[headers[j].toLowerCase().replace(/\"/g,'')] = data[j].replace(/\"/g,'');
                          }
                          params['password'] = defaultPassword;
                          Ext.Ajax.request({
                            url: BACKEND_URL + controller.getAdminOptionsStore().findRecord('model', controller.getSpeakerGrid().getStore().model.modelName, 0, false, true, true).get('createUrl'),
                            jsonData : Ext.JSON.encode(params),
                            success: function(response, options) {
                                speakers.push(Ext.decode(options.jsonData).email);
                            },
                            failure: function(response, options){
                                errors.push(Ext.decode(options.jsonData).email);
                                
                            },
                            callback : function(){
                                proceededNumberOfSpeakers++;
                                if(totalNumberOfSpeakers == proceededNumberOfSpeakers){
                                  waitingBox.close();
                                  if(errors.length == 0){
                                    Ext.MessageBox.show({
                          						title : 'Success',
                          						msg : "Your speakers have been uploaded.<br/> they all have default password '"+ defaultPassword +"'",
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
                          						msg : 'One or more speakers upload failed : <br/>' + errorReportHtml,
                          						buttons : Ext.MessageBox.OK,
                          						icon : Ext.MessageBox.WARNING
                          					});
                                  }
                                  controller.getSpeakerGrid().getStore().load();
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
