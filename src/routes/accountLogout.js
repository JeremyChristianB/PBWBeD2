app.post('/logout', (req, res) => {
    // Perform logout logic here
    // For example, clear session data, remove authentication tokens, etc.
    
    // Assuming you are using Express session, you can destroy the session to clear all session data
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        // Handle the error, e.g., show an error message or redirect to an error page
        return;
      }
      
      // Redirect the user to the login page or any other desired page
      res.redirect('/homepage');
    });
  });
  