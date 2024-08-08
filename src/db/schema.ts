import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const userTable = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
  username: text("username").unique().notNull(),
  password_hash: text("password_hash").notNull(),
});

export const sessionTable = sqliteTable("session", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id").notNull().references(() => userTable.id),
  expiresAt: integer("expires_at").notNull(),
});

export const notesTable = sqliteTable("notes", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id").notNull().references(() => userTable.id),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  created_at: text("created_at").notNull()
})
