// Sets up Passport with a local authentication strategy, using Person model.

const passport = require('passport'); // importing passport middle-ware
const LocalStrategy = require('passport-local').Strategy; // import local strategy for authenticate.

const Person = require('../HWnode8_models/Person');

passport.use(new LocalStrategy(async (currUserName, password, done) => { // Here done is callback function
    // authentication logic here
    try {
        //console.log('Recevied credentials:', currUserName, password);
        const user = await Person.findOne({ username: currUserName });
        if (!user)
            return done(null, false, { message: 'Incorrect username' });

        const isPasswordMatch = user.password === password ? true : false;
        if (isPasswordMatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect password' });
        }

    } catch (err) {
        return done(err);
    }
}))

module.exports = passport; // Export configured passport