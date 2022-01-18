import {MigrationInterface, QueryRunner, Table} from "typeorm";

/**
 * CREATE TABLE IF NOT EXISTS `teste_receitas_rg_sistemas`.`categorias` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC))
ENGINE = InnoDB;

INSERT INTO `teste_receitas_rg_sistemas`.`categorias` (`id`, `nome`) VALUES (1, 'Bolos e tortas doces');
INSERT INTO `teste_receitas_rg_sistemas`.`categorias` (`id`, `nome`) VALUES (2, 'Carnes');
INSERT INTO `teste_receitas_rg_sistemas`.`categorias` (`id`, `nome`) VALUES (3, 'Aves');
INSERT INTO `teste_receitas_rg_sistemas`.`categorias` (`id`, `nome`) VALUES (4, 'Peixes e frutos do mar');
INSERT INTO `teste_receitas_rg_sistemas`.`categorias` (`id`, `nome`) VALUES (5, 'Saladas, molhos e acompanhamentos');
INSERT INTO `teste_receitas_rg_sistemas`.`categorias` (`id`, `nome`) VALUES (6, 'Sopas');
INSERT INTO `teste_receitas_rg_sistemas`.`categorias` (`id`, `nome`) VALUES (7, 'Massas');
INSERT INTO `teste_receitas_rg_sistemas`.`categorias` (`id`, `nome`) VALUES (8, 'Bebidas');
INSERT INTO `teste_receitas_rg_sistemas`.`categorias` (`id`, `nome`) VALUES (9, 'Doces e sobremesas');
INSERT INTO `teste_receitas_rg_sistemas`.`categorias` (`id`, `nome`) VALUES (10, 'Lanches');
INSERT INTO `teste_receitas_rg_sistemas`.`categorias` (`id`, `nome`) VALUES (11, 'Prato Único');
INSERT INTO `teste_receitas_rg_sistemas`.`categorias` (`id`, `nome`) VALUES (12, 'Light');
INSERT INTO `teste_receitas_rg_sistemas`.`categorias` (`id`, `nome`) VALUES (13, 'Alimentação Saudável');
 */

export class CreateCategory1642208805155 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'teste_receitas_rg_sistemas.categorias',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isNullable: false,
                        length: '10'
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        length: '100',
                        isNullable: true
                    }
                ],
            })
        );
        await queryRunner.query(`
            INSERT INTO teste_receitas_rg_sistemas.categorias (id, nome) VALUES (1, 'Bolos e tortas doces');
            INSERT INTO teste_receitas_rg_sistemas.categorias (id, nome) VALUES (2, 'Carnes');
            INSERT INTO teste_receitas_rg_sistemas.categorias (id, nome) VALUES (3, 'Aves');
            INSERT INTO teste_receitas_rg_sistemas.categorias (id, nome) VALUES (4, 'Peixes e frutos do mar');
            INSERT INTO teste_receitas_rg_sistemas.categorias (id, nome) VALUES (5, 'Saladas, molhos e acompanhamentos');
            INSERT INTO teste_receitas_rg_sistemas.categorias (id, nome) VALUES (6, 'Sopas');
            INSERT INTO teste_receitas_rg_sistemas.categorias (id, nome) VALUES (7, 'Massas');
            INSERT INTO teste_receitas_rg_sistemas.categorias (id, nome) VALUES (8, 'Bebidas');
            INSERT INTO teste_receitas_rg_sistemas.categorias (id, nome) VALUES (9, 'Doces e sobremesas');
            INSERT INTO teste_receitas_rg_sistemas.categorias (id, nome) VALUES (10, 'Lanches');
            INSERT INTO teste_receitas_rg_sistemas.categorias (id, nome) VALUES (11, 'Prato Único');
            INSERT INTO teste_receitas_rg_sistemas.categorias (id, nome) VALUES (12, 'Light');
            INSERT INTO teste_receitas_rg_sistemas.categorias (id, nome) VALUES (13, 'Alimentação Saudável');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('teste_receitas_rg_sistemas.categorias');
    }

}
