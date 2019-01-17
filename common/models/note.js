module.exports = function(Note) {
    Note.beforeRemote( 'create', async  function( ctx) {
        console.log('test');
       return;
    });    
};


module.exports = function(Note){

    Note.observe('access', async  function( ctx) {
        console.log('test2');
    });
}

