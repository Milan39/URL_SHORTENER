import { getUser } from "../service/auth.js";

const handleLoggedUserOny = (req, res, next) => {
  const uuid = req.cookies.uuid;
  if (!uuid) return res.status(401).json({ message: "Unauthorized User" });
  const user = getUser(uuid);

  if (!user) return res.status(401).json({ message: "No active user found." });
  next();
};

export { handleLoggedUserOny };
