const path = require("path");

module.exports = (env) => {
    return {
        mode: env.production ? "production" : "development",
        entry: ["./src/logic/script.js"],
        output: {
            path: path.join(__dirname, "public", "dist"),
            filename: "bundle.js"
        },
        watch: true
    };
}