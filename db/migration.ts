import {Pool} from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
const pool= new Pool({
    connectionString:"postgres://postgres:password@0.0.0.0:5432/postgres?schema=public"
})

const db=drizzle(pool)

async function conn() {
    await migrate(db,{migrationsFolder:"drizzle"})
    console.log("migration ended")
}

conn().catch((err)=>{
    console.log(err);
    process.exit(0);
})