'use strict';

module.exports = function(Folder) {

Folder.testFun = async function(msg, options){
    console.log("options="+JSON.stringify(options));
    return {"a":msg};
}


    Folder.remoteMethod(
        'testFun', {
          http: {
            path: '/test-fun',
            verb: 'get'
          },
          accepts: [{arg: 'msg', type: 'string'},
          {arg: "options", type: "object", http: "optionsFromRequest"}
        ],
          returns: {arg: 'output', type: 'object'}
        }
      ); 
};
