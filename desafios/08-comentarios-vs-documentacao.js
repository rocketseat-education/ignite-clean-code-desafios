// Essa função tem o objetivo de registrar um novo usuário no banco.
async function register(data) {
  // Desestrutura os dados recebidos.
  const { email, name, avatar } = data

  // Verifica se o avatar foi informado.
  if (!avatar) return { error: 'avatar is required' }

  // Verifica se o nome foi informado.
  if(!name) return { error: 'name is required' }

  // Essa função retorna o usuário a partir do email informado
  const userMail = getUserByEmail(email)

  // Verificação se o email informado já foi utilizado por algum usuário.
  if (userMail) {
    return { error: 'email already used' }
  }

  // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
  // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
  const avatar2 = convertImageToJPG(avatar)

  // Cria o usuário no banco de dados
  const user = await createUser({ email, name, avatar: avatar2 })

  return { user }
}