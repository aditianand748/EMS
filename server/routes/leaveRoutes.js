import { Router } from "express";
import { protect, protectAdmin } from "../middleware/auth.js";
import {
  createLeave,
  getLeaves,
  updateLeaveStatus,
} from "../controllers/LeaveController.js";

const leaveRouter = Router();

console.log("LEAVE ROUTES IMPORTED");

leaveRouter.post("/", protect, createLeave);
leaveRouter.get("/", protect, getLeaves);
leaveRouter.patch("/:id", protect, protectAdmin, updateLeaveStatus);

leaveRouter.get("/test", (req, res) => {
  res.send("leave route works");
});

console.log("LEAVE ROUTER LOADED");

export default leaveRouter;
