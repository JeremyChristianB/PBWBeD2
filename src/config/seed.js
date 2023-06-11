import { getConnection, pool } from './connection.js';
import fs from 'fs';
import mysql from 'mysql2/promise';

const dataRole = fs.readFileSync('databases/role.json', { encoding: 'utf-8' });

(async () => {
  try {
    const connection = await getConnection();
    const roles = JSON.parse(dataRole);

    for (let index = 0; index < roles.length; index++) {
      const role = roles[index];
      const sql = "INSERT INTO role (id, role_name) VALUES (?, ?)";
      const values = [role.id, role.role_name];

      await connection.query(sql, values);
      console.log('Success insert role data', index);
    }

    connection.release();
  } catch (err) {
    console.log(err.stack);
  }
})();
