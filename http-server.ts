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

app.put("/password/illegal", (req, res: any) => {
  passwordValidateObj.setIllegalPasswords(req.body.passwords);

  res.status(204).send();
});
