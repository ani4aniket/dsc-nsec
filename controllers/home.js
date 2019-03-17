module.exports = function(){
	const User = require('../models/user');
	return {
		SetRouting: function(router){
			router.post('/update/:id', this.updateProfile);
			router.get('/verify/:id', this.verifyEmail);
		},
        
        updateProfile: function(req, res){
			var id = req.params.id;
			User.findOne({
				_id:id
			}).then((user) => {
				user.college = req.body.college;
				user.username = req.body.username;
				user.firstName = req.body.firstName;
				user.lastName = req.body.lastName;
				user.studentid = req.body.studentid;
				user.year = req.body.year;
				user.stream = req.body.stream;
				user.about = req.body.about;

				user.save();
				res.redirect('/home');
			});
        },

        verifyEmail: function(req, res){
        	var id = req.params.id;
			User.findOne({
				_id:id
			}).then((user) => {
				user.active = true;

				user.save();
				res.render('enroll');
			});
        }
	}
}