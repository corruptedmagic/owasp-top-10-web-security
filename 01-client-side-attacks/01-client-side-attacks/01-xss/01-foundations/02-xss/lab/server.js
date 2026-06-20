const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

let comments = [];

/* ---------------- HOME PAGE ---------------- */
app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>XSS Lab</title>
      <style>
        body { font-family: Arial; background:#0f172a; color:white; text-align:center; }
        a { color:#38bdf8; display:block; margin:10px; font-size:18px; }
        .box { margin-top:50px; }
      </style>
    </head>

    <body>
      <h1>⚔️ XSS Training Lab</h1>

      <div class="box">
        <a href="/reflected?q=test">🔎 Reflected XSS (Search Page)</a>
        <a href="/stored">💬 Stored XSS (Comments)</a>
        <a href="/dom#name=test">👤 DOM XSS (Profile Page)</a>
      </div>
    </body>
    </html>
  `);
});

/* ---------------- REFLECTED XSS (SEARCH PAGE) ---------------- */
app.get("/reflected", (req, res) => {
  const q = req.query.q || "";

  res.send(`
    <h2>Search Page</h2>

    <form>
      <input name="q" placeholder="Search something..." />
      <button>Search</button>
    </form>

    <hr>

    <div>
      <h3>Results for:</h3>
      <p>${q}</p>
    </div>
  `);
});

/* ---------------- STORED XSS (COMMENT SYSTEM) ---------------- */
app.get("/stored", (req, res) => {
  const list = comments.map(c => `
    <div style="padding:10px;margin:10px;background:#1e293b;border-radius:8px;">
      ${c}
    </div>
  `).join("");

  res.send(`
    <h2>💬 Comment Section</h2>

    <form method="POST" action="/stored">
      <input name="comment" placeholder="Write a comment..." />
      <button>Post</button>
    </form>

    <hr>

    <h3>Comments:</h3>
    ${list}
  `);
});

app.post("/stored", (req, res) => {
  comments.push(req.body.comment || "");
  res.redirect("/stored");
});

/* ---------------- DOM XSS (PROFILE PAGE) ---------------- */
app.get("/dom", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Profile</title>
    </head>

    <body>
      <h2>👤 User Profile</h2>

      <div id="profile"></div>

      <script>
        const hash = location.hash.slice(1);
        const params = new URLSearchParams(hash);
        const name = params.get("name") || "guest";

        document.getElementById("profile").innerHTML =
          "<h3>Welcome " + name + "</h3>";
      </script>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Lab running on http://localhost:3000");
});
