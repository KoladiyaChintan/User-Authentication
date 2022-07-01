import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { Login } from 'src/entities/user.entity';

@Table({
  tableName: 'resetpassword',
})
export class resetpassword extends Model<resetpassword> {
  @ForeignKey(() => Login)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  userId: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  random_Token: string;

  @BelongsTo(() => Login)
  user: Login;
}
