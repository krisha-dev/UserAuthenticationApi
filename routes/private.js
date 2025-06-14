router.get('/dashboard', authMiddleware, (req, res) => {
  res.json({ message: 'Welcome to your dashboard' });
});