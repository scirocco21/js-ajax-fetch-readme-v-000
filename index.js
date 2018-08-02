// const app = "I don't do much.";

const token = '7fe2aceb9d8fb3e44f18ccd7bf73aa5c15fd97a8'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
