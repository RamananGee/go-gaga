const User = require("./../models/User");

exports.getUsers = (req, res) => {
    User.find()
    .then(users => {
        if(!users)
        {
            errors.nouser = 'There is no Users';
            return res.status(404).json(errors);
        }
    res.render('renderingPages/list', {users});
});
}


exports.addUser = (req, res) => {
    const newUser = new User({
        name: req.body.name,
        age: req.body.age,
        location: req.body.location,
        current_relationship_status: req.body.current_relationship_status
    });

    newUser.save()
        .then(() => res.redirect('/gogaga/list.html'))
        .catch(err => console.log(err));
}