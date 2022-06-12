import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("prg_character")
class Character {
    @PrimaryColumn()
    id_character: string;

    @Column()
    id_user: string;

    @Column()
    name: string;

    @Column()
    class_group: string;

    @Column()
    sub_class_group: string;

    @CreateDateColumn()
    created_at: string;

    constructor() {
        if (!this.id_character) {
            this.id_character = uuidV4();
        }
    }
}

export { Character };
