import { pool } from '../config/connection.js';

export const insertTeacherAccount = async (params) => {
  const sql = "INSERT INTO teachers (full_name, address, phone_number) VALUES (?, ?, ?)";

  const { full_name, address, phone_number } = params;
  const values = [full_name, address, phone_number];

  try {
    const [result] = await pool.execute(sql, values);
    return result.insertId;
  } catch (error) {
    throw new Error(`Error inserting teacher account: ${error}`);
  }
};
