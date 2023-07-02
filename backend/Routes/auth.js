const router = require("express").Router();
var passport = require('passport');
const cookieSession = require("cookie-session");
const session = require('express-session');
const express = require("express");
const app = express();

app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(session({
  secret: 'key',
  resave: false,
  saveUninitialized: false,
  cookie:{secure:false},
}));

app.use(passport.initialize());
app.use(passport.session());

// require('./passport.js');
//passport.authenticate();
console.log("is");
router.get("/login/success", (req, res) => {
	if (req.user) {
	  const userQueryParam = encodeURIComponent(JSON.stringify(req.user));
	  const redirectUrl = `http://127.0.0.1:5173/profile?user=${userQueryParam}`;
	  res.redirect(redirectUrl);
	} else {
	  res.status(403).json({ error: true, message: "error" });
	}
  });

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
	"/google/callback",
	
	passport.authenticate("google", {
		
		successRedirect: "/auth/login/success/",
		failureRedirect: "/auth/login/failed/",
	})


);

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect("http://127.0.0.1:5173/");
});

module.exports = router;