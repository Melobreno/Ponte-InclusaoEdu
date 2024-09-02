/*
  Warnings:

  - Added the required column `SEXO` to the `Profissionais` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `profissionais` ADD COLUMN `SEXO` VARCHAR(191) NOT NULL DEFAULT 'não especificado';
