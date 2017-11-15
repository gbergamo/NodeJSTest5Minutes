module.exports = (function () {

    var router = require('express').Router();

    router.post('/', function (req, res) {
        res.status(200).send('Your post route is ok!');
    });

    router.get('/', function (req, res) {
        res.status(200).send('Your get route is ok!');
    });

    return router;

})();
