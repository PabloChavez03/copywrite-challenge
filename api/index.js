const app = require('./app');
const { PORT } = require('./src/config');
require('./src/database');

app.listen(PORT, () => {
  console.log('Server connected in port',PORT );
});
