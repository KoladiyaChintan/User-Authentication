import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Login } from '../../entities/user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {

    constructor(@Inject('USER_REPOSITORY') private readonly USER_REPOSITORY: typeof Login) { }

    /**creat user */
    async createUser(createUser: CreateUserDto): Promise<any> {

        const email = createUser.email;
        const user = await this.USER_REPOSITORY.findOne({ attributes: ['email'], where: { email } })
        if (user && user.email == email) {
            throw new ConflictException('ACCOUNT ALREADY EXISTS')
        }

        const hashedpassword = await bcrypt.hash(createUser.password, 12)
        try {
            const createdUser = await this.USER_REPOSITORY.create({
                ...createUser,
                password: hashedpassword
            });
            createdUser.password = undefined;
            return createdUser;
        } catch (error) {
            return error
        }
    }

    /** Get All User */
    async getUser(): Promise<Login[]> {
        return await this.USER_REPOSITORY.findAll()
    }
}
