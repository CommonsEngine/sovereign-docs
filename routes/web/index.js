import express from "express";

export default (ctx) => {
  const router = express.Router();

  router.get("/", (req, res) => {
    return res.render("docs/index");
  });

  router.get("/:id", (req, res) => {
    return res.render("docs/[id]");
  });

  return router;
};
