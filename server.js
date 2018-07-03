var GitHub = require("github-api");

var gh = new GitHub({
  username: "jayfcs@qq.com",
  password: "zhang532"
});
var clayreimann = gh.getUser("clayreimann");
clayreimann.listStarredRepos(function(err, repos) {
  // look at all the starred repos!
  console.log(repos);
});
