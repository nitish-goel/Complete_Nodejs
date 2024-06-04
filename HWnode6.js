// Method to share data : Get , Post , Delete , Patch

// Get : Get method is use to access data from database.

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function (req, res) {
  res.send("Hello This is Coder's World");
})

app.get('/address', function (req, res) {
  res.send("Hanumangarh Road, Abohar, Punjab");
})

app.get('/college', function (req, res) {
  res.send("DAV College, Abohar");
})

app.get('/course',(req, res)=>{
    let BCA = {
        courseName : "Bachlor of Computer Application",
        duration : "2-years",
        branch : "Computer-science",
        fees : 46150
    }
 res.send(BCA);
})

// console.log(app);

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})