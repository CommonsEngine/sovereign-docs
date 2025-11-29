import express from "express";

export default () => {
  const router = express.Router();

  router.get("/", (_req, res) => {
    res.send(`<h1>Docs</h1><p>Kickstart the Docs js plugin for Sovereign.</p>`);
  });

  return router;
};
