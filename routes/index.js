import { Router } from "express";
import userRoutes from "./user.js";
import productRoutes from "./products.js";
import categoryRoutes from "./category.js";

const router = Router();

router.use("/api", userRoutes);
router.use("/api", productRoutes);
router.use("/api", categoryRoutes);

export default router;