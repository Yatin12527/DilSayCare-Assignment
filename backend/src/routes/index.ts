import { Router } from "express";
import { createSlot } from "../controllers/index";

const router = Router();
// @post request
// slot/create
router.post("/create", createSlot);

export default router;
