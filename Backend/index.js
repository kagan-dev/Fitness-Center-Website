const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
const router = express.Router();

const { sendEmail } = require("./utils/sendEmail.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: [process.env.FRONTEND_URI],
    methods: ["POST"],
    credentials: true
}));

router.post("/send/mail", async (req, res, next) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return next(
            res.status(400).json({
                success: false,
                message: "Please provide all details."
            })
        )
    }
    try {
        await sendEmail({
            email:"dummymail@gmail.com",
            subject:"GYM WEBSITE CONTACT",
            message,
            userEmail:email,
        });
        res.status(200).json({
            success:true,
            message:"Message Sent Successfully",
        });
    } catch (error) {
        res.status(500).json({success:false,
            message:error.message
        })
    }
})
app.use(router)

PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});
