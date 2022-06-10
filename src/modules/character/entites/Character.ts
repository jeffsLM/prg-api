import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("prg_character")
class Character {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: string;

    @CreateDateColumn()
    closed_at: Date | null;

    // constructor() {
    //     if (!this.id) {
    //         this.id = uuidV4();
    //     }
    // }
}

export { Character };
