-- CreateTable
CREATE TABLE `Users` (
    `id_user` VARCHAR(191) NOT NULL,
    `name_user` VARCHAR(191) NOT NULL,
    `email_user` VARCHAR(191) NOT NULL,
    `password_user` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Users_email_user_key`(`email_user`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
