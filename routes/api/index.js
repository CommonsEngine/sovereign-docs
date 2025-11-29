import express from "express";

export default (ctx = {}) => {
  const router = express.Router();

  router.get("/", (_req, res) => {
    res.json({
      message: "Docs API route is live!",
      plugin: "@sovereign/docs",
      contextKeys: Object.keys(ctx),
    });
  });

  return router;
};
