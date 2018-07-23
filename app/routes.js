module.exports = function (app, passport) {

    app.get('/', (req, res) => {
        res.render('index.ejs')
    });

    app.get('/login', (req, res, next) => {
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    app.get('/signup', (req, res, next) => {
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    app.get('/profile', (req, res, next) => {
        res.render('profile.ejs', { user: req.user });
    });

    app.get('/logout', (req, res, next) => {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
