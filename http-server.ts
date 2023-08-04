import express from "express";
import { passwordValidator } from "./passwordvalidation";

const port = 3000;
export const app = express();
app.use(express.json())

app.post('/password/validation', (req, res: any) => {

  const response = passwordValidator(req.body.password);

  res.send({
    valid: response.isValid,
    messages: response.errors
  });
});
