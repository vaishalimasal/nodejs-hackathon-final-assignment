const mysql = require("mysql2");
// const conn = mysql.Pool;

const connection = mysql.createPool({
  user: "root",
  host: "localhost",
  database: "testdb_11",
  password: "pasword",
  port: 3306,
});

const getUsers = (request, response) => {
  connection.query(
    "SELECT * FROM testdb_11.employee ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getUsersById = (request, response) => {
  const { id } = request.params;
  connection.query(
    "SELECT * FROM testdb_11.employee where id=($1)",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const addUser = (request, response) => {
  const { body } = request;
  connection.query(
    "INSERT INTO testdb_11.employee ( name,email) values($1,$2) ",
    [body.name, body.email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results);
    }
  );
};

const updateUser = (request, response) => {
  const { body, params } = request;
  connection.query(
    "UPDATE testdb_11.employee  set name=$1 , email=$2 where id=$3",
    [body.name, body.email, params.id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json("Updated succesfully");
    }
  );
};

const deleteUser = (request, response) => {
  const { params } = request;
  connection.query(
    "DELETE from testdb_11.employee where id=$1",
    [params.id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json("Deleted succesfully");
    }
  );
};

export { getUsers, addUser, getUsersById, updateUser, deleteUser };
