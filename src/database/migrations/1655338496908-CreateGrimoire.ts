import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateGrimoire1655338496908 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "prg_grimoire",
                columns: [
                    {
                        name: "id_grimoire",
                        type: "uuid",
                        isPrimary: true,
                    },
                    { name: "id_character", type: "uuid" },
                    { name: "skill", type: "varchar" },
                    { name: "class_group", type: "varchar" },
                    { name: "type", type: "varchar" },
                    {
                        name: "points",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "rules",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "icon",
                        type: "varchar",
                        isNullable: true,
                    },
                    { name: "created_at", type: "timestamp", default: "now()" },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("prg_grimoire");
    }
}
