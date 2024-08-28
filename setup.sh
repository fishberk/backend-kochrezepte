PROJECT_NAME="backend"


mkdir $PROJECT_NAME
cd $PROJECT_NAME


npm init -y


npm install express mongoose dotenv


mkdir -p src/{models,views,controllers,routes,config,utils,middleware}


touch src/models/.gitkeep
touch src/views/.gitkeep
touch src/controllers/.gitkeep
touch src/routes/index.js
touch src/config/.gitkeep
touch src/utils/.gitkeep
touch src/middleware/.gitkeep
touch src/app.js
touch .env
touch .gitignore


echo "node_modules" >> .gitignore
echo ".env" >> .gitignore


cat <<EOL > src/app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import routes
const routes = require('./routes');

// Use routes
app.use('/api', routes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Set up server to listen on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
EOL


cat <<EOL > src/routes/index.js
const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => res.send('API is running...'));

module.exports = router;
EOL

echo "MVC structure for Mongoose + Express has been created successfully!"
