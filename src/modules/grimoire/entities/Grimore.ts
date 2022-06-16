import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("prg_grimoire")
class Grimoire {
    @PrimaryColumn()
    id_grimoire: string;

    @Column()
    id_character: string;

    @Column()
    skill: string;

    @Column()
    points: string;

    @Column()
    class_group: string;

    @Column()
    type: string;

    @Column()
    rules: string;

    @Column()
    icon: string;

    @CreateDateColumn()
    created_at: string;

    constructor() {
        if (!this.id_grimoire) {
            this.id_grimoire = uuidV4();
        }
    }
}

export { Grimoire };
