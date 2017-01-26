/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');

module.exports = {
    index: function (req,res){

        res.writeHead(200, {'content-type': 'text/html'});
        res.end(
            '<form action="http://localhost:1337/file/upload" enctype="multipart/form-data" method="post">'+
            '<input type="text" name="title"><br>'+
            '<input type="file" name="avatar" multiple="multiple"><br>'+
            '<input type="submit" value="Upload">'+
            '</form>'
        )
    },
    upload: function  (req, res) {
        req.file('avatar').upload({
            dirname: './assets/images'
        },function (err, uploadedFiles) {
            if (err) return res.negotiate(err);

            return res.json({
                message: uploadedFiles.length + ' file(s) uploaded successfully!'
            });
        });
    },
  attributes: {
    email: {
      type: 'email',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
      codepostal: {
          type: 'string',
          required: true
      },
      adresse: {
          type: 'string',
          required: true
      },
      ville: {
          type: 'string',
          required: true
      },
      avatar: {
          type: 'file',
          required: true
      },


    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },
  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        } else {
          user.password = hash;
          cb();
        }
      });
    });
  }
};



