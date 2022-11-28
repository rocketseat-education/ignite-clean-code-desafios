function updateUserRoute(body, params) {
  updateUserController(body, params)
}

function updateUserController(data, params) {
  userRepository.update(data, params)
}

const userRepository = {
  update: (data, params) => {},
}