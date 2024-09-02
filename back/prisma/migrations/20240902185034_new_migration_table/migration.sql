/*
  Warnings:

  - Added the required column `usuario` to the `message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sexo` to the `profissionais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conta` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `message` ADD COLUMN `usuario` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `profissionais` ADD COLUMN `sexo` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `conta` VARCHAR(191) NOT NULL;

-- RenameIndex
ALTER TABLE `documents` RENAME INDEX `Documents_url_doc_key` TO `documents_url_doc_key`;
