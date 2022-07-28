const app = require('./app');
const { PORT } = require('./src/config');
require('./src/database');

const listener = app.listen(PORT, () => {
  console.log('Server connected in port',PORT );
});

module.exports = listener;