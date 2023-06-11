import { getConnection } from '../config/connection.js';

router.post('/signup-siswa', async (req, res) => {
  const { nama, email, username, password, sekolah, kelas } = req.body;

  const connection = await getConnection();

  try {
    // Lakukan proses penyimpanan data ke database sesuai dengan kebutuhan Anda
    // Contoh:
    const sql = 'INSERT INTO siswa (nama, email, username, password, sekolah, kelas) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [nama, email, username, password, sekolah, kelas];

    await connection.query(sql, values);

    res.send('Signup siswa berhasil');
  } catch (err) {
    console.log(err);
    res.status(500).send('Terjadi kesalahan saat menyimpan data');
  } finally {
    connection.release();
  }
});

export default router;
