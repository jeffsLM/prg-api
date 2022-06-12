import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("prg_users")
class User {
    @PrimaryColumn()
    id_user: string;

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

    constructor() {
        if (!this.id_user) {
            this.id_user = uuidV4();
        }
    }
}

export { User };
