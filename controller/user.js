import { UserModel } from "../models/user.js";
import { v4 as uuidV4 } from "uuid";
import { setUser } from "../service/auth.js";

const handleUserSingup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const newUser = await UserModel.create({ fullname, email, password });
    return res.status(201).json({ message: "User created,", user: newUser });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

const handelUserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "All Fileds are required" });
    const user = await UserModel.findOne({ email, password });
    if (!user)
      return res.status(400).json({ error: "Invalid username or password" });

    const sessionId = uuidV4();
    res.cookie('uuid', sessionId)
    setUser(sessionId, user);
    return res.status(200).json({ message: "Login Successfully." });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

const fetchAllUser = async (req, res) => {
  try {
    const users = await UserModel.find({});
    return res.status(200).json({ data: users });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

export { handleUserSingup, fetchAllUser, handelUserLogin };
