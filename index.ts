const express= require('express')
const app= express()



import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
// for migrations
const migrationClient = postgres("postgres://postgres:password@0.0.0.0:5432/postgres", { max: 1 });
//migrate(drizzle(migrationClient), ...)
// for query purposes
const queryClient = postgres("postgres://postgres:password@0.0.0.0:5432/postgres");
const db = drizzle(queryClient);

db.insert