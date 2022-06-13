import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCharacter1654907750316 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "prg_character",
                columns: [
                    { name: "id_user", type: "uuid" },
                    { name: "id_character", type: "uuid" },
                    { name: "name", type: "varchar" },
                    { name: "class_group", type: "varchar", isNullable: true },
                    {
                        name: "sub_class_group",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "max_life_points",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "life_points",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "max_mana_points",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "mana_points",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "max_especial_points",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "especial_points",
                        type: "int",
                        isNullable: true,
                    },
                    { name: "created_at", type: "timestamp", default: "now()" },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("prg_character");
    }
}
