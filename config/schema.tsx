
import { integer, pgTable, serial, text, timestamp,varchar,date, json } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  credits:integer().default(5)
});


export const ProjectTable= pgTable('project',{
  id:integer().primaryKey().generatedAlwaysAsIdentity(),
  projectId:varchar().notNull(),
  userInput:varchar(),
  device:varchar(),
  createdOn:date().defaultNow(),
  config:json(),
  userId:varchar().references(()=>usersTable.email).notNull()
})
