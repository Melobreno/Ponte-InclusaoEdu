-- CreateTable
CREATE TABLE `Documents` (
    `id_doc` INTEGER NOT NULL AUTO_INCREMENT,
    `name_doc` VARCHAR(191) NOT NULL,
    `url_doc` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Documents_url_doc_key`(`url_doc`),
    PRIMARY KEY (`id_doc`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
