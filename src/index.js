const express = require('express');
const db = require('./models')

const authController = require('./controllers/auth');

const app = express();

app.use('/auth', authController);

app.get('/', (req, res) => {
    return res.json('API runing...')
})

db.sequelize.sync().then(() => {
    app.listen(3001, () =>{
        console.log('API listening on port 3001')
    })
})

// 1. instalar sequelize
// 	>	npm install --save sequelize

// 2. inicializar os models do sequelize-cli na pasta src
// 	> 	cd src
// 	>	npx sequelize-cli init:models 

// 3. ainda na pasta src inicializar as configurações do sequelize-cli
// 	> 	npx sequelize-cli init:config

// 4. retornar para o diretório raiz e instalar dotenv
// 	>	npm install --save dotenv
 
//   4.1. criar o arquivo .env e criar as variáveis de configuração
// 	DB_USER=root
// 	DB_PASS=admin
// 	DB_NAME=links
// 	DB_HOST=127.0.0.1

//   4.2. adicionar o arquivo .env ao gitgnore

// 5. na pasta src/config, editar a extensão do arquivo config.json para config.js (tornando possível a leitura do .env)

//   5.1. feita a alteração é necessária a inclusão de um module.exports

//   5.2. importar o arquivo .env
// 	>	require('dotenv').config()

//   5.3. substituir os dados do config.js pelos dados do .env
// 	username: process.env.DB_USER,
// 	password: process.env.DB_PASS,
// 	database: process.env.DB_NAME,
// 	host: process.env.DB_HOST

//   5.4. alterar o valor do parâmetro operatorsAliases para a string '0'

//   5.5. no arquivo models/index.js alterar a const config para config.js

// 6. instalar o drive do mysql para sequelize
// 	> npm install --save mysql2

// 7. importar o banco de dados no arquivo raiz: src/index.js
// 	> const db = require('./models ')

// 8. inicializar o banco de dados antes de inicializar o servidor
// 	>	db.sequelize.sync().then(() => {
// 			// inicializar o servidor aqui	
// 		})

// ### 'Sequelize configured'
