const express = require("express");
const path=require("path")
const urlRoute = require("./routes/url");
const { connectmongo } = require("./connect");
const app = express();
const URL = require("./models/url");
const staticRoute=require("./routes/staticrouter")
const userrouter=require("./routes/user")
const cookieparser=require("cookie-parser");
const { restrict, checkauth } = require("./middleware/auth");
connectmongo("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("mongo is connected"))
  .catch((err) => console.log(err));



app.set("view engine","ejs")
app.set("views", path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieparser())



app.use("/url",restrict,urlRoute);
app.use("/",checkauth,staticRoute)
app.use("/user",userrouter)

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
 const entry=await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visithistory:{
            timestamp:Date.now()
        },
      },
    }
  );
  res.redirect("https://"+entry.redirectURL)
});

app.listen(8000, () => {
  console.log("server started");
});
