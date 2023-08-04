import express from "express";

const port = 3000;
export const app = express();

app.post('/password/validation', (req, res: any) => {
  res.send();
});
