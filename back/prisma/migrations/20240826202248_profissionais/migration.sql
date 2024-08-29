-- CreateTable
CREATE TABLE `Profissionais` (
    `id_prof` INTEGER NOT NULL AUTO_INCREMENT,
    `name_prof` VARCHAR(191) NOT NULL,
    `cep_prof` INTEGER NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `ocupacao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_prof`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
