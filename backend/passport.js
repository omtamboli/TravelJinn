const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const users = require("../backend/Model/User.js");

passport.use(
  new GoogleStrategy(
    {
      clientID: "162912009751-ctedatei92srnk9a0rgeet444thf2n25.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await users.findById(profile.id);
        if (user) {
          return done(null, profile);
        } else {
          const newUser = new users({
            username: profile.displayName,
            email: profile.emails[0].value,
            profilePic: profile.photos[0].value,
            _id: profile.id,
          });
          await newUser.save();
          return done(null, profile);
        }
      } catch (error) {
        console.error(error);
        return done(error, false);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
