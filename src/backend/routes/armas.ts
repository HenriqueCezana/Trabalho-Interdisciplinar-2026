import { Router } from "express";
import { dbController } from "../controllers/dbController";

const router = Router();

router.get("/", dbController.index);
router.get("/:uuid", dbController.buscarPorUuid);
router.post("/importar-api", dbController.importarApi);

export default router;