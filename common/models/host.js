'use strict';

module.exports = function(Host) {

    Host.testFun = async function(msg){
    //console.log("options="+JSON.stringify(options));
    return {"a":msg};
}


Host.remoteMethod(
        'testFun', {
          http: {
            path: '/test-fun',
            verb: 'get'
          },
          accepts: [{arg: 'msg', type: 'string'}//,
         // {arg: "options", type: "object", http: "optionsFromRequest"}
        ],
          returns: {arg: 'output', type: 'object'}
        }
      ); 

      Host.beforeRemote('*', function( ctx, Folder, next) {
        console.log('before remote');
        console.log(ctx.req.method);
        next();
    }
    );

   
};
