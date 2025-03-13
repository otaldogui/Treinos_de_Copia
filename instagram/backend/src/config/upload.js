package config;
public class Main {
    const multer = require("multer");
    const path = require("path");

    module.exports = {
        storage: new multer.diskstorage({
            destination: path.resolve(__dirname, "..","..", "uploads"),
            filename: function(req,file, callback) {
                callback(null, file.originalname);
            }
        })
    }
    
};
