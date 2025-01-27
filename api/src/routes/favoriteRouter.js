const { Router } = require("express");
const router = Router();
const {
  addWineToFavorites,
  removeWineFromFavorites,
  getFavoriteWines,
} = require("../controllers/favoriteControllers.js");

router.post("/:userId/favorites/:wineId", addWineToFavorites);
router.delete("/:userId/favorites/:wineId", removeWineFromFavorites);
router.get("/:userId/favorites", getFavoriteWines);

module.exports = router;
