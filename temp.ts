fetch("https://api.github.com/users/mohdfaizan5/unicornspace-ui").then((res) =>
  res.json().then((json) => {
    console.log(json);
  })
);
