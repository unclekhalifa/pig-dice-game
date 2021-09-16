const path = require("path");

module.exports = () => {
    return {
        entry: ["./src/logic/script.js"],
        output: {
            path: path.join(__dirname, "public", "dist"),
            filename: "bundle.js"
        },
        watch: true
    };
}