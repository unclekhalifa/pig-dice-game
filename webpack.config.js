const path = require("path");

module.exports = () => {
    return {
        entry: ["./src/script.js"],
        output: {
            path: path.join(__dirname, "public", "dist"),
            filename: "bundle.js"
        },
        watch: true
    };
}