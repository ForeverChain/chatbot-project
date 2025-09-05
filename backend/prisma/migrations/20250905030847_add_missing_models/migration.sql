/*
  Warnings:

  - You are about to drop the `bottemplate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `chatbotintegration` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `bottemplate` DROP FOREIGN KEY `BotTemplate_chatbotId_fkey`;

-- DropForeignKey
ALTER TABLE `chatbotintegration` DROP FOREIGN KEY `ChatbotIntegration_chatbotId_fkey`;

-- AlterTable
ALTER TABLE `integration` ADD COLUMN `chatbotId` INTEGER NULL;

-- DropTable
DROP TABLE `bottemplate`;

-- DropTable
DROP TABLE `chatbotintegration`;

-- CreateTable
CREATE TABLE `MessageTemplate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chatbotId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Analytics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chatbotId` INTEGER NOT NULL,
    `userId` INTEGER NULL,
    `action` VARCHAR(191) NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Integration` ADD CONSTRAINT `Integration_chatbotId_fkey` FOREIGN KEY (`chatbotId`) REFERENCES `Chatbot`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MessageTemplate` ADD CONSTRAINT `MessageTemplate_chatbotId_fkey` FOREIGN KEY (`chatbotId`) REFERENCES `Chatbot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Analytics` ADD CONSTRAINT `Analytics_chatbotId_fkey` FOREIGN KEY (`chatbotId`) REFERENCES `Chatbot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Analytics` ADD CONSTRAINT `Analytics_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
