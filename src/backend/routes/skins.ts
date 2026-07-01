import { Router } from "express";
import { SkinController } from "../controllers/SkinController";

const router = Router();

router.get("/", SkinController.index);
router.get("/:uuid", SkinController.buscarPorUuid);
router.post("/", SkinController.criar);
router.put("/:uuid", SkinController.atualizar);
router.delete("/:uuid", SkinController.deletar);

export default router;