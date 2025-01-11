
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './Config/Schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:6FTJb4tBZIXq@ep-morning-water-a5o3xq0d.us-east-2.aws.neon.tech/AI-study-matrial?sslmode=require',
  },
});
