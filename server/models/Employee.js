import mongoose from "mongoose";
import User from "../models/User.js";
const DEPARTMENTS = [
  "Engineering",
  "Human Resources",
  "Marketing",
  "Sales",
  "Finance",
  "Operations",
  "IT Support",
  "Customer Success",
  "Product Management",
  "Design",
];

const employeeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    firstName: { type: String, required: true },
    lastName: { type: String, reqiured: true },
    email: { type: String, reqiured: true },
    phone: { type: String, reqiured: true },
    position: { type: String, reqiured: true },
    basicSalary: { type: Number, default: 0 },
    allowances: { type: Number, default: 0 },
    deductions: { type: Number, default: 0 },
    employmentStatus: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE",
    },
    joinDate: { type: Date, reqiured: true },
    isDeleted: { type: Boolean, default: false },
    bio: { type: String, default: "" },
    department: { type: String, enum: DEPARTMENTS },
  },
  { timestamps: true },
);

const Employee =
  mongoose.models.Employee || mongoose.model("Employee", employeeSchema);

export default Employee;
