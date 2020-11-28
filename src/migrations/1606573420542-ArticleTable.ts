import { MigrationInterface, QueryRunner } from 'typeorm';
import { Product } from '../models/product.entity';

export class ArticleTable1606573420542 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const productRepo = queryRunner.connection.getRepository(Product);
    // await queryRunner.query('INSERT INTO `migrations` VALUES("1e5jh", "Dąb Brine", "https://d2xsg7d4c6iu77.cloudfront.net/account/1e6kz/product/1e5jh_image_256.lotogkr560s.bin", 59)');

    await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "title" TO "name"`);


    // await productRepo.insert(
    //   {
    //     'id': '1e5jh',
    //     'name': 'Dąb Brine',
    //     'photo': 'https://d2xsg7d4c6iu77.cloudfront.net/account/1e6kz/product/1e5jh_image_256.lotogkr560s.bin',
    //     'price': 59,
    //   },
    // );
  }


// {
//     'id': '1e5jh',
//     'name': 'Dąb Brine',
//     'photo': 'https://d2xsg7d4c6iu77.cloudfront.net/account/1e6kz/product/1e5jh_image_256.lotogkr560s.bin',
//     'price': 59,
// },
// {
//     'id': '1e5me',
//   'name': 'Dąb Brine',
//   'photo': 'https://d2xsg7d4c6iu77.cloudfront.net/account/1e6kz/product/1e5me_image_256.aqnw6shjy4h.bin',
//   'price': 49,
// },
// {
//     'id': '1e5mn',
//   'name': 'Dąb Carmine',
//   'photo': 'https://d2xsg7d4c6iu77.cloudfront.net/account/1e6kz/product/1e5mn_image_256.2e4w2wf1tme.jpeg',
//   'price': 69,
// },
// {
//     'id': '1e5ls',
//   'name': 'Dąb Almond',
//   'photo': 'https://d2xsg7d4c6iu77.cloudfront.net/account/1e6kz/product/1e5ls_image_256.pj1jrg6tcn.bin',
//   'price': 69,
// },
// {
//     'id': '1e5m1',
//   'name': 'Dąb Antique',
//   'photo': 'https://d2xsg7d4c6iu77.cloudfront.net/account/1e6kz/product/1e5m1_image_256.v6f7sq1cjm.bin',
//   'price': 79,
// },
// {
//     'id': '1e5le',
//   'name': 'Dąb Caldos',
//   'photo': 'https://d2xsg7d4c6iu77.cloudfront.net/account/1e6kz/product/1e5le_image_256.4i1fk0ywi3v.bin',
//   'price': 89,
// },
// {
//     'id': '1e5ln',
//   'name': 'Dąb Capre',
//   'photo': 'https://d2xsg7d4c6iu77.cloudfront.net/account/1e6kz/product/1e5ln_image_256.gugzlxxyeuh.bin',
//   'price': 99,
// },
// {
//     'id': '1e5lo',
//   'name': 'Dąb Classic',
//   'photo': 'https://d2xsg7d4c6iu77.cloudfront.net/account/1e6kz/product/1e5lo_image_256.sgccvz3ugyq.bin',
//   'price': 99,
// },
// {
//     'id': '1e5l1',
//   'name': 'Dąb Clay',
//   'photo': 'https://d2xsg7d4c6iu77.cloudfront.net/account/1e6kz/product/1e5l1_image_256.jxgl772fqur.bin',
//   'price': 109,
// },


  public async down(queryRunner: QueryRunner): Promise<any> {
    // await queryRunner.dropColumn('article', 'author');
  }
}
