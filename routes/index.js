const express = require("express")
const router =express.Router()
const db = require("../db")

const delet = require("../controller/delete")
const add = require("../controller/add")
const main = require("../controller/main")


router.get("/",main.mainget)
router.post("/",main.mainpost)


router.get("/add",add.addget)
router.post("/add",add.addpost)

router.get("/delete",delet.deleteget)
router.post("/delete/:id",delet.deletepost)



router.get("/edit/:id",delet.editget)

router.post("/edit/:id",delet.editpost)






module.exports = router