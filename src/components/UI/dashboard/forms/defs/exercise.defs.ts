/*
model Exercise {
  id               String @id @default(cuid())
  title            String
  shortDescription String
  description      String
  sequence         Int    @default(0)
  isActive       Boolean @default(true)

  topicId String?
  topic Topic? @relation(fields: [topicId], references: [id])

  @@map("exercises")
}
*/