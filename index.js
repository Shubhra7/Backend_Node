require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000

const githubData = {
    "login": "Shubhra7",
    "id": 112610308,
    "node_id": "U_kgDOBrZMBA",
    "avatar_url": "https://avatars.githubusercontent.com/u/112610308?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Shubhra7",
    "html_url": "https://github.com/Shubhra7",
    "followers_url": "https://api.github.com/users/Shubhra7/followers",
    "following_url": "https://api.github.com/users/Shubhra7/following{/other_user}",
    "gists_url": "https://api.github.com/users/Shubhra7/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Shubhra7/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Shubhra7/subscriptions",
    "organizations_url": "https://api.github.com/users/Shubhra7/orgs",
    "repos_url": "https://api.github.com/users/Shubhra7/repos",
    "events_url": "https://api.github.com/users/Shubhra7/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Shubhra7/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Shubhrajit Ghosh",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Passionate about all tech things  🚀 | GitHub aficionado | Coding enthusiast 💻 | Open source advocate 🌟",
    "twitter_username": null,
    "public_repos": 23,
    "public_gists": 0,
    "followers": 3,
    "following": 1,
    "created_at": "2022-09-01T06:35:53Z",
    "updated_at": "2025-01-10T11:35:05Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Shubhrajit.COm')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2> Chai aur Shubhra code</h2>")
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {   // Change Port ==> process.env.PORT
  console.log(`Example app listening on port ${port}`)
})