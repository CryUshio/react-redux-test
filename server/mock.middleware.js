const path = require('path');

function mockServer(req, res) {
    const APIPath = path.resolve(__dirname, '../mock/APIs', req.path);
    const handleFn = require(APIPath);
    if(!handleFn) {
        return;
    }
    res.end(JSON.stringify(handleFn()));
    return;
}

module.exports = mockServer;