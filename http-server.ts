import express from "express";
import { PasswordValidator } from "./passwordvalidation";

export const app = express();
app.use(express.json());

app.post("/password/validation", (req, res: any) => {
  const passwordValidateObj = new PasswordValidator();
  const response = passwordValidateObj.validate(req.body.password);

  res.send({
    valid: response.isValid,
    messages: response.errors,
  });
});

app.put("/password/illegal", (req, res: any) => {
  res.status(204).send();
});
