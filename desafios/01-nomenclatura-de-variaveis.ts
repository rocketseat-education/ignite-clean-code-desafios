// Nomenclatura de variáveis

const users = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getUserNameFromGithub(req, res) {
  const userNameOnGithub = String(req.query.username)

  if (!userNameOnGithub) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const response = await fetch(`https://api.github.com/users/${userNameOnGithub}`);

  if (response.status === 404) {
    return res.status(400).json({
      message: `User with username "${userNameOnGithub}" not found`
    })
  }

  const userAccountOnGithub = await response.json()

  const listOfUsersSortedByMaxFollowers = users.sort((a, b) =>  b.followers - a.followers); 

  const category = listOfUsersSortedByMaxFollowers.find(i => userAccountOnGithub.followers > i.followers)

  const listOfUsersWithCategory = {
    userNameOnGithub,
    category: category.title
  }

  return listOfUsersWithCategory
}

getUserNameFromGithub({ query: {
  username: 'josepholiveira'
}}, {})