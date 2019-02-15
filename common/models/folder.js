'use strict';
// var app = require('../../server/server');


module.exports = function(model) {

    // model.observe('after save',function(ctx, next) {
    //   var folderVersion = app.models.FolderVersion;
    //   ctx.instance.versionTimestamp = new Date();

    //   if (ctx.instance) {
    //     folderVersion.create(ctx.instance, function(err,obj){
    //       if(err){
    //         console.log(err);
    //       }
    //       console.log('created in reporting:' +JSON.stringify(obj));
    //     });

    //     console.log('Saved %s#%s', ctx.Model.modelName, ctx.instance.id);

    //   } else {
        
    //     folderVersion.create(model, function(err,obj){
    //       if(err){
    //         console.log(err);
    //       }
    //       console.log('created in reporting:' +JSON.stringify(obj));
    //     });
    //     console.log('Updated %s matching %j',
    //       ctx.Model.pluralModelName,
    //       ctx.where);
    //   }
    //   next();
    // });
      
};
