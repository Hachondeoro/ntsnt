import { withIronSession } from "next-iron-session";

async function handler(req, res) {
  // get user from database then:
  req.session.set("user", {
    id: 230,
    admin: true,
  });
  await req.session.save();
  console.log(req.session.get());
  res.send("Logged in");
  console.log("logged in")
}

export default withIronSession(handler, {
  password: "2gyZ3GDw3LHZQKDhPmPDL3sjREVRXPr8",
  cookieName: "myapp_cookiename",
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});