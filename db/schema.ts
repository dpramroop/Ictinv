import {pgTable,serial,text,integer,json} from "drizzle-orm/pg-core";

export const item= pgTable("item",{
id:serial("id").primaryKey(),
ItemType:text("ITEMTYPE").notNull(),
Brand:text("BRAND").notNull(),
Model:text("MODEL").notNull(),
Quantity:integer("QUANTITY").notNull(),
Attribute:json("ATTRIBUTE")
})


