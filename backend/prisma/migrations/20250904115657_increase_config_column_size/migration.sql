-- Alter the BotTemplate table to increase the size of the config column
ALTER TABLE `BotTemplate` MODIFY `config` TEXT NOT NULL;