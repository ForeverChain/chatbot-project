-- This migration attempts to fix table names but handles missing tables gracefully
-- Based on previous migrations, BotTemplate was dropped and replaced with MessageTemplate

-- We'll use a more defensive approach to handle cases where tables don't exist
-- For MySQL, we can't easily check for table existence in a migration script
-- So we'll comment out the problematic rename and only rename tables that should exist

-- Rename ChatbotCustomization to chatbotcustomization (this should exist)
RENAME TABLE `ChatbotCustomization` TO `chatbotcustomization`;

-- Rename ChatbotIntegration to chatbotintegration (this should exist)
RENAME TABLE `ChatbotIntegration` TO `chatbotintegration`;

-- Note: BotTemplate table was dropped in migration 20250905030847_add_missing_models
-- and replaced with MessageTemplate, so we don't attempt to rename it