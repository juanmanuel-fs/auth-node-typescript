import { MigrationInterface, QueryRunner } from "typeorm";

export class updated1675899627458 implements MigrationInterface {
    name = 'updated1675899627458'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`role\` \`role\` enum ('USER', 'CUSTOMER', 'ADMIN') NOT NULL DEFAULT 'CUSTOMER'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`role\` \`role\` enum ('USER', 'CUSTOMER', 'ADMIN') NOT NULL`);
    }

}
