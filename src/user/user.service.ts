import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserModel } from '../models/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from './dto/user_register.dto';
import { UserUpdateDTO } from './dto/user_update.dto';
import { USER_TYPE } from '../app.constants';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
  ) { }

  async register(userDTO: UserDTO): Promise<UserModel> {
    const user = this.userRepository.create({...userDTO, user_type:USER_TYPE.ADMIN});
    return await this.userRepository.save(user)
  }

  async updateUser(id: number, userUpdateDTO: UserUpdateDTO): Promise<UserModel | null> {
    await this.userRepository.update(id, userUpdateDTO)
    return await  this.userRepository.findOne({where: {id}})

  }

  async deleteUser(id: number) {
    await this.userRepository.delete({ id })
  }

  async findOne(id: number): Promise<boolean> {
    const findOne = await this.userRepository.findOne({ where: { id } })
    return !!findOne
  }

  async checkEmail(email: string): Promise<boolean> {
    const email_exist = await this.userRepository.findOne({ where: { email } })
    return !!email_exist
  }

  async checkUsername(username: string): Promise<boolean> {
    const username_exist = await this.userRepository.findOne({ where: { username } })
    return !!username_exist
  }

}
