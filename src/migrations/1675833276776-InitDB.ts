import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDB1675833276776 implements MigrationInterface {
    name = 'InitDB1675833276776'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`category\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`color_badge\` enum ('default', 'primary', 'secondary', 'error', 'info', 'success', 'warning') NOT NULL DEFAULT 'primary', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`price\` decimal(8,2) NOT NULL, \`category_id\` varchar(36) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product_purchase\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`quantity_product\` int NOT NULL, \`total_price\` decimal(8,2) NOT NULL, \`product_id\` varchar(36) NOT NULL, \`purchase_id\` varchar(36) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`purchase\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`status\` enum ('IN_CART', 'PENDING_PAYMENT', 'PENDING_APPROVED', 'APPROVED', 'ERROR') NOT NULL, \`payment_method\` varchar(255) NOT NULL, \`customer_id\` varchar(36) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`customer\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`address\` varchar(255) NOT NULL, \`dni\` varchar(255) NOT NULL, \`user_id\` varchar(36) NOT NULL, UNIQUE INDEX \`IDX_4fbd35975cb4ad42e0fa011406\` (\`dni\`), UNIQUE INDEX \`REL_5d1f609371a285123294fddcf3\` (\`user_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_name\` varchar(64) NOT NULL, \`name\` varchar(64) NOT NULL, \`lastname\` varchar(64) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`province\` varchar(32) NOT NULL, \`role\` enum ('USER', 'CUSTOMER', 'ADMIN') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_0dce9bc93c2d2c399982d04bef1\` FOREIGN KEY (\`category_id\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_purchase\` ADD CONSTRAINT \`FK_5753ef47df3de5ce988b8720fd0\` FOREIGN KEY (\`product_id\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_purchase\` ADD CONSTRAINT \`FK_0acf478a064499876d92e15e5c5\` FOREIGN KEY (\`purchase_id\`) REFERENCES \`purchase\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`purchase\` ADD CONSTRAINT \`FK_2248a331258d17d204ccfe9497c\` FOREIGN KEY (\`customer_id\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD CONSTRAINT \`FK_5d1f609371a285123294fddcf3a\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customer\` DROP FOREIGN KEY \`FK_5d1f609371a285123294fddcf3a\``);
        await queryRunner.query(`ALTER TABLE \`purchase\` DROP FOREIGN KEY \`FK_2248a331258d17d204ccfe9497c\``);
        await queryRunner.query(`ALTER TABLE \`product_purchase\` DROP FOREIGN KEY \`FK_0acf478a064499876d92e15e5c5\``);
        await queryRunner.query(`ALTER TABLE \`product_purchase\` DROP FOREIGN KEY \`FK_5753ef47df3de5ce988b8720fd0\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_0dce9bc93c2d2c399982d04bef1\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP INDEX \`REL_5d1f609371a285123294fddcf3\` ON \`customer\``);
        await queryRunner.query(`DROP INDEX \`IDX_4fbd35975cb4ad42e0fa011406\` ON \`customer\``);
        await queryRunner.query(`DROP TABLE \`customer\``);
        await queryRunner.query(`DROP TABLE \`purchase\``);
        await queryRunner.query(`DROP TABLE \`product_purchase\``);
        await queryRunner.query(`DROP TABLE \`product\``);
        await queryRunner.query(`DROP TABLE \`category\``);
    }

}
