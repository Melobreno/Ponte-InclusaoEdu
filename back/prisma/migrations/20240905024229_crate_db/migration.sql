-- CreateTable
CREATE TABLE `Users` (
    `id_user` VARCHAR(191) NOT NULL,
    `name_user` VARCHAR(191) NOT NULL,
    `email_user` VARCHAR(191) NOT NULL,
    `password_user` VARCHAR(191) NOT NULL,
    `conta` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Users_email_user_key`(`email_user`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `documents` (
    `id_doc` INTEGER NOT NULL AUTO_INCREMENT,
    `name_doc` VARCHAR(191) NOT NULL,
    `url_doc` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `documents_url_doc_key`(`url_doc`),
    PRIMARY KEY (`id_doc`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profissionais` (
    `id_prof` INTEGER NOT NULL AUTO_INCREMENT,
    `name_prof` VARCHAR(191) NOT NULL,
    `cep_prof` INTEGER NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `ocupacao` VARCHAR(191) NOT NULL,
    `sexo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_prof`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `texto` VARCHAR(191) NOT NULL,
    `usuario` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `atividade` (
    `id_ativi` INTEGER NOT NULL AUTO_INCREMENT,
    `texto` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_ativi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
