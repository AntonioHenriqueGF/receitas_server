import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRecipe1642208792066 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS \`teste_receitas_rg_sistemas\`.\`receitas\` (
            \`id\` INT UNSIGNED NOT NULL AUTO_INCREMENT,
            \`id_usuarios\` INT(10) UNSIGNED NOT NULL,
            \`id_categorias\` INT(10) UNSIGNED NULL,
            \`nome\` VARCHAR(45) NULL,
            \`tempo_preparo_minutos\` INT UNSIGNED NULL,
            \`porcoes\` INT UNSIGNED NULL,
            \`modo_preparo\` TEXT NOT NULL,
            \`ingredientes\` TEXT NULL,
            \`criado_em\` DATETIME NOT NULL,
            \`alterado_em\` DATETIME NOT NULL,
            PRIMARY KEY (\`id\`),
            INDEX \`fk_receitas_1_idx\` (\`id_usuarios\` ASC),
            INDEX \`fk_receitas_2_idx\` (\`id_categorias\` ASC),
            CONSTRAINT \`fk_receitas_1\`
                FOREIGN KEY (\`id_usuarios\`)
                REFERENCES \`teste_receitas_rg_sistemas\`.\`usuarios\` (\`id\`)
                ON DELETE RESTRICT
                ON UPDATE CASCADE,
            CONSTRAINT \`fk_receitas_2\`
                FOREIGN KEY (\`id_categorias\`)
                REFERENCES \`teste_receitas_rg_sistemas\`.\`categorias\` (\`id\`)
                ON DELETE CASCADE
                ON UPDATE CASCADE)
        ENGINE = InnoDB;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`teste_receitas_rg_sistemas\`.\`receitas\`;`);
    }

}
