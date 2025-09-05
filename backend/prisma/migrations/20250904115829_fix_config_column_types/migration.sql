-- This migration is obsolete because the bottemplate table was dropped
-- It has been replaced with MessageTemplate table

-- No operation needed - tables no longer exist
-- The MessageTemplate table now handles this functionality

-- Only modify tables that still exist
-- AlterTable
ALTER TABLE `chatbotcustomization` MODIFY `config` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `chatbotintegration` MODIFY `config` TEXT NOT NULL;