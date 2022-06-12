import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("prg_personagem")
class Character {
    @PrimaryColumn()
    id_user: string;

    @PrimaryColumn()
    id_character: string;

    @Column()
    name: string;

    @Column()
    class: string | null;

    @Column()
    sub_class: string | null;

    @CreateDateColumn()
    created_at: string;

    constructor() {
        if (!this.id_user) {
            this.id_user = uuidV4();
        }
    }
}

export { Character };
