import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    // Signed in

    res.statusCode = 200;
    res.json({ msg: "top secret data", email: session.user.email });
  } else {
    // Not Signed in

    res.status(401);
    res.json({ msg: "Not Signed in!!" });
  }
  res.end();
};
