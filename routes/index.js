import { Router } from "express";
import user from "./user";
import ordonance from "./ordonance";
import commande from "./commande";
import pharmacie from "./pharmacie";
import dotenv from "dotenv";
import passport from "passport";
import passportService from "../middleware/passport";
const passportAuth = passport.authenticate("jwt", { session: false });
dotenv.config();
let api = Router();

api.get("/", (req, res) => {
  res.json({ hi: "startupWeek API" });
});

api.use("/users", user);
api.use("/ordonances",passportAuth, ordonance);
api.use ('/commande',passportAuth,commande);
api.use('/pharmacie',passportAuth,pharmacie);
export default api;
