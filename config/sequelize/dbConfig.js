export default {
	HOST: 'localhost',
	USER: 'root',
	PASSWORD: 'password',
	DB: 'testdb_11',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
