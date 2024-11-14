import express from "express";
export class RestRoutes {
  public static map(app: express.Application): void {
    app.get("/hotel", async (req, res) => res.json([]));
  }
}
