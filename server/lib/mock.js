'use strict';
var mock = module.exports;
var q = require('q');

mock.login = function(req) {
    return q.when({
        status: 200,
        data: {
            user: 'Wisam'
        }
    });
};

mock.getArtistsForGenre = function(req) {
    return q.when({
        status: 200,
        data: {
            artists: [{
                id: 1,
                name: 'Pink Floyd',
                img: 'http://i.imgur.com/EOBDqov.png'
            }, {
                id: 2,
                name: 'Michael Jackson',
                img: 'http://i.imgur.com/856Dntl.jpg'
            }]
        }
    });
};