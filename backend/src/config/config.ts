import "dotenv/config";

export const dev = {
  app: {
    port: process.env.SERVER_PORT,
  },
  db: {
    url:
      process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/sda-ecommerce-db",
  },
};
