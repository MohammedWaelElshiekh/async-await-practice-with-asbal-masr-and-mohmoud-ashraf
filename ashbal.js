async function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, [
      { id: 1, name: "alex" },
      { id: 2, name: "jo" },
      { id: 3, name: "ahmed" },
      { id: 4, name: "hany" },
      { id: 5, name: "max" },
    ]);
  }).then((d) => d);
}
async function fetchPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, [
      { userId: 1, title: "this post with made by the user of ID: 1" },
      { userId: 2, title: "this post with made by the user of ID: 2" },
      { userId: 3, title: "this post with made by the user of ID: 3" },
      { userId: 4, title: "this post with made by the user of ID: 4" },
      { userId: 5, title: "this post with made by the user of ID: 5" },
    ]);
  }).then((d) => d);
}
async function fetchData() {
  try {
    let data = await Promise.all([fetchUsers(), fetchPosts()]);
    const Users = data[0],
      Posts = data[1];
    let result = Users.map(async (e) => {
      return { user: e, posts: Posts.filter((p) => p.userId === e.id) };
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
fetchData();
