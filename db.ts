import postgres from 'postgres'

const sql = postgres('postgres://username:password@host:port/database', {
    host                 : 'localhost',            // Postgres ip address[s] or domain name[s]
    port                 : 5432,          // Postgres server port[s]
    database             : 'postgres',            // Name of database to connect to
    username             : 'postgres',            // Username of database user
    password             : 'password',            // Password of database user
   
  }) // will use psql environment variables

export default sql