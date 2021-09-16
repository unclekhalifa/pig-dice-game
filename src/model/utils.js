const utils = {
    displayAlert: function (message) {
        try {
            alert(message);
        } catch (error) {
            console.log(message);
        }
    }
};

module.exports = utils;