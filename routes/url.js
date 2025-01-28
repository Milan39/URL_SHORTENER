import express from "express";
import {
  generateShortId,
  redirectToURL,
  getAllURL,
} from "../controller/url.js";
import { handleLoggedUserOny } from "../middleware/auth.js";

const urlRouter = express.Router();

urlRouter.route("/",).get(handleLoggedUserOny, getAllURL).post(handleLoggedUserOny, generateShortId);

urlRouter.get("/:shortId", redirectToURL);

export { urlRouter };
