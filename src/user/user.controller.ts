import { Body, Controller, Delete, InternalServerErrorException, NotFoundException, Param, ParseIntPipe, Patch, Post, UnauthorizedException, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user_register.dto';
import { UserUpdateDTO } from './dto/user_update.dto';

@Controller('user')
export class UserController {

  constructor (
    private readonly userService:UserService,
  ) {}

  @Post('/register')
  async register(@Body(ValidationPipe) userDTO:UserDTO) {    
    if (await this.userService.checkEmail(userDTO.email))
      throw new InternalServerErrorException ('Email already exist')
    if (await this.userService.checkUsername(userDTO.username))
      throw new InternalServerErrorException ('Username already exist')
    return this.userService.register(userDTO)
  }

  @Post('/login')
  login(@Body('username') username:string, @Body('password') password:string) {
    if (!username || !password) 
      throw new UnauthorizedException("Username and Password are Required")
    return this.userService.login(username, password)
  }
  
  @Patch(':id')
  async updateUser(@Param('id', ParseIntPipe) id:number, @Body(ValidationPipe) userUpdateDTO:UserUpdateDTO) {
    if (await this.userService.findOne(id)) 
      return await this.userService.updateUser(id, userUpdateDTO)
    throw new NotFoundException ("User not found")
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id:number) {
    if (await this.userService.findOne(id))
      return await this.userService.deleteUser(id)
  }

  
}