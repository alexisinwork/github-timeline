export const fetchAllReposForUser = async (username) => {
  return await fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        alert(
          `Cannot find a user with a name "${username}". Reason: ${data.message}`
        );

        return [];
      }

      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(`Cannot find such a username or server error => ${error}`);
      return error;
    });
};
