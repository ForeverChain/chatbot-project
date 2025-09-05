-- AlterTable
ALTER TABLE `integration` ADD COLUMN `config` TEXT NULL,
    MODIFY `token` TEXT NULL;
