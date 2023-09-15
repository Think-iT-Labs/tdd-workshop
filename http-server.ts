import express from "express";
import { PasswordValidator } from "./passwordvalidation";

export const app = express();
app.use(express.json());

const passwordValidateObj = new PasswordValidator();

app.post("/password/validation", (req, res: any) => {
  const response = passwordValidateObj.validate(req.body.password);

  res.send({
    valid: response.isValid,
    messages: response.errors,
  });
});

app.put("/password/illegal", async (req, res: any) => {
  if (req.body.passwords) {
    passwordValidateObj.setIllegalPasswords(req.body.passwords);

    return res.status(204).send();
  }

  const url = req.body.url;
  const res1 = await fetch(url);
  const passwordStr = await res1.text();
  const passwordsFromUpstream = passwordStr.split("\n");

  passwordValidateObj.setIllegalPasswords(passwordsFromUpstream);
  return res.status(204).send();
});
