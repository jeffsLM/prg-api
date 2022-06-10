import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1647803559261 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "prg_users",
                columns: [
                    { name: "id", type: "uuid" },
                    { name: "name", type: "varchar" },
                    { name: "email", type: "varchar", isUnique: true },
                    { name: "password", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    {
                        name: "closed_at",
                        type: "timestamp",
                        isNullable: true,
                        default: "null",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("prg_users");
    }
}
