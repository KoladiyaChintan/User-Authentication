import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Login } from '../../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UpdateProfileDto } from '../auth/password/dto/update-profile.dto';
import * as jwt from 'jsonwebtoken';


@Injectable()
export class UserService {

    constructor(@Inject('USER_REPOSITORY') private readonly USER_REPOSITORY: typeof Login) { }

    /**
     * create user
     * @param createUserDto 
     * @returns 
     */
    async createUser(createUserDto: CreateUserDto): Promise<Login> {

        const email = createUserDto.email;
        const user = await this.USER_REPOSITORY.findOne({ attributes: ['email'], where: { email } })
        if (user && user.email == email) {
            throw new ConflictException('ACCOUNT ALREADY EXISTS')
        }

        const hashedpassword = await bcrypt.hash(createUserDto.password, 12)
        try {
            const createdUser = await this.USER_REPOSITORY.create({
                ...createUserDto,
                password: hashedpassword
            });
            createdUser.password = undefined;
            return createdUser;
        } catch (error) {
            return error
        }
    }

    /**
     * get all users 
     * @returns 
     */
    async getAllUser(): Promise<Login[]> {
        return await this.USER_REPOSITORY.findAll()
    }

    /**
     * get profile using jwttoken
     * @param req 
     * @returns 
     */
    async getProfile(req): Promise<any> {

        const bearerHeader = req.headers.authorization.replace('Bearer', '');
        const jwtData = jwt.verify(bearerHeader, process.env.JWT_SECRET)

        console.log("data", jwtData);

        const getProfile = await this.USER_REPOSITORY.findOne({ attributes: ["id", "first_name", "last_name", "user_name", "email", "password"], where: { id: jwtData["id"] } })
        try {
            if (getProfile) {
                return { profile: getProfile }
            }
        } catch (err) {
            return err;
        }
    }

    /**
     * update user profile
     * @param updateProfileDto 
     * @param req 
     * @returns 
     */
    async updateProfile(updateProfileDto: UpdateProfileDto, req): Promise<any> {

        const bearerHeader = req.headers.authorization.replace('Bearer', '')
        const jwtData = jwt.verify(bearerHeader, process.env.JWT_SECRET)

        const update = await this.USER_REPOSITORY.update({
            first_name: updateProfileDto.first_name,
            last_name: updateProfileDto.last_name,
            user_name: updateProfileDto.user_name,
        }, { where: { id: jwtData["id"] } });

        return { massage: "Profile updated successfully" }
    }
}
