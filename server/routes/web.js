const express=require('express')
const ContactController = require('../controllers/ContactController')
const TeacherController = require('../controllers/teacherController')
const CourseController = require('../controllers/CourseController')
const UserController = require('../controllers/userController')
const router =express.Router()
const checkAuth = require("../middleware/auth")



router.get('/contact',ContactController.display)
router.post('/create',ContactController.create)//create method
router.get("/course/view/:id",ContactController.view)
router.put("/update/:id",ContactController.update)
router.delete("/delete/:id",ContactController.delete)



router.get("/teacher",TeacherController.display)
router.post('/createTeacher',TeacherController.create)
router.get("/view/:id",TeacherController.view)
router.put("/update/:id",TeacherController.update)
router.delete("/delete/:id",TeacherController.delete)



router.get("/course",CourseController.display)
router.post('/createCourse',CourseController.create)
router.get("/view/:id",CourseController.view)
router.put("/update/:id",CourseController.update)
router.delete("/delete/:id",CourseController.delete)



router.post("/register",UserController.register)
router.post("/login",UserController.login)
router.get("/profile",checkAuth,UserController.profile)
router.get("/logout",UserController.logout)


module.exports = router