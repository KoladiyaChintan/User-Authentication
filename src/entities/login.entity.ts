import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'usertoken',
})
export class usetToken extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.STRING,
  })
  token: string;
}
