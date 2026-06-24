import { Router } from "express";
import { dbController } from "../controllers/dbController";

const router = Router();

router.get("/", dbController.index);
router.post("/importar-api", dbController.importarApi);

export default router;