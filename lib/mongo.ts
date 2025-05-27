// lib/mongo.ts
import { MongoClient } from 'mongodb';
import { env } from './env';

let clientPromise: Promise<MongoClient> | null = null;

export function getMongoClient(): Promise<MongoClient> {
  if (!clientPromise) {
    const client = new MongoClient(env.MONGODB_URI);
    clientPromise = client
      .connect()
      .then((connectedClient) => {
        console.log(`✅ MongoDB connected to ${env.MONGODB_URI.split('/').pop()}`);
        return connectedClient;
      })
      .catch((err) => {
        console.error('⛔ MongoDB connection error:', err);
        throw err;
      });
  }
  return clientPromise;
}

export async function getDb() {
  const client = await getMongoClient();
  return client.db();
}
