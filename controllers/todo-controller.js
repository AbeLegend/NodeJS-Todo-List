module.exports = {
  index: async (req, res) => {
    res.render('index', {
      layout: 'layout/main-layout',
    });
  }
}