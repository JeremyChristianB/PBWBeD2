app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Perform the database query to check the credentials
    pool.query('SELECT * FROM users WHERE email = ? LIMIT 1', [email], (error, results) => {
      if (error) {
        console.log(error);
        // Handle the error, e.g., show an error message or redirect back to the login page
        return res.redirect('/login');
      }
  
      if (results.length > 0) {
        const user = results[0];
        if (user.password === password) {
          // User is authenticated, redirect to the home page
          return res.redirect('/homepageGuru');
        }
      }
  
      // Invalid credentials, show an error message or redirect back to the login page
      return res.redirect('/login');
    });
  });
  