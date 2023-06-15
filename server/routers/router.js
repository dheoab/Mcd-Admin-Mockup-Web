const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");
const errorHandler = require("../handlers/errorHandler");
const authN = require("../middleware/authentication");
const authZ = require("../middleware/authorization");
// const custAuthN = require("../middleware/custAuthN");

router.post("/login", Controller.adminLogin);
router.post("/register", authN, Controller.register);

router.get("/dashboard", authN, Controller.getTotal);

router.get("/items", authN, Controller.readItems);
router.post("/items", authN, Controller.postItems);
router.put("/items/:itemId", authN, Controller.editItems);
router.get("/items/:itemId", authN, Controller.readItemDetail);
router.delete("/items/:itemId", authN, Controller.deleteItem);

router.get("/categories", authN, Controller.readCategories);
router.post("/categories", authN, Controller.postCategories);
router.delete("/categories/:categoryId", authN, Controller.deleteCategories);
router.get("/categories/:categoryId", authN, Controller.readCategoryDetail);
router.put("/categories/:categoryId", authN, Controller.editCategory);

// ===========================================================================================

router.get("/public/items", Controller.readItemsClient);
router.get("/public/items/:itemId", Controller.readItemClientDetail);
router.get("/public/categories", Controller.readCategoriesClient);

router.use(errorHandler);
module.exports = router;
