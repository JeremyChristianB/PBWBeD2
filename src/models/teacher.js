import { pool } from '../config/connection.js';

export const getTeacherDataById = async (teacher_id) => {
  const sql = "SELECT * FROM teachers WHERE id = ?";

  const [rows] = await pool.promise().query(sql, [teacher_id]);
  return rows;
};
