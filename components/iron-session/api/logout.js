import withSession from "@components/iron-session/session";

export default withSession(async (req, res) => {
  req.session.destroy();
  res.json({ isLoggedIn: false });
});