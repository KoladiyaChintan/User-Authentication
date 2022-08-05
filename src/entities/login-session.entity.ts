import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Login } from './user.entity';

@Table({
  tableName: 'LoginSession',
})
export class LoginSession extends Model<LoginSession> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  session_id: string;

  @ForeignKey(() => Login)
  @Column({
    type: DataType.UUID,
  })
  user_id: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.STRING,
  })
  jwttoken: string;

  @BelongsTo(() => Login)
  login: Login;
}
