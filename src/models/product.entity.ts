import { Entity, Column, PrimaryColumn} from 'typeorm';

@Entity({name: 'product'})
export class Product {

  @PrimaryColumn({type: 'text'})
  public id: string;

  @Column({type: 'text'})
  public name: string;

  @Column({type: 'text'})
  public photo: string;

  @Column({type: 'bigint'})
  public price: number;
}
