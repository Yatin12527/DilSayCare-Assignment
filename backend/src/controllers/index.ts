import { Request, Response } from "express";
import knex from "../db/knex";

export const createSlot = async (req: Request, res: Response) => {
  try {
    const { day_of_week, start_time, end_time } = req.body;
    if (!day_of_week || !start_time || !end_time) {
      return res.status(400).json({ error: "All fields are required." });
    }
    const [result] = await knex("slots")
      .insert({
        day_of_week,
        start_time,
        end_time,
      })
      .returning("id");
    const id = result.id;
    res.status(201).json({ message: "Slot created successfully!", id });
  } catch (error) {
    console.error("Error creating slot:", error);
    res.status(500).json({ error: "Failed to create slot." });
  }
};
