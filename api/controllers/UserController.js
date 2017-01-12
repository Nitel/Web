/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    moncompte: function(reg,res){
        var data = {};

        data.medata ={
            title: "COUCOU toi!",
            content:"Toi"
        };

        console.log(req.user);

        return res.view("moncompte", data);
    },
	
};

