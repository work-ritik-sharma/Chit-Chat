const express = require("express");
const cors = require("cors");
const axios = require("axios");


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "6ab9df5a-fabf-451f-b7e7-bdb450a17104" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    // return res.status(e.response.status).json(e.response.data);
    console.log(e);
  }

});



app.listen(3001);