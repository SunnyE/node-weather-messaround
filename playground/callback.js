var getUser = (id, callback) => {
    var user = {
        id: id, 
        name: 'Arnold'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
};


getUser(21, (user) => {
    console.log(user)
});