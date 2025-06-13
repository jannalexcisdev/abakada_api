import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { USER_TYPE } from "../../app.constants";

export class UserDTO {
  @IsString()
  @IsNotEmpty()
  firstName: 'string';

  @IsString()
  @IsNotEmpty()
  lastName: 'string';

  @IsString()
  @IsNotEmpty()
  username: 'string';

  @IsEmail()
  @IsNotEmpty()
  email: 'string';

  @IsString()
  @IsNotEmpty()
  password: 'string';

  @IsEnum(USER_TYPE)
  @IsOptional()
  user_type?: USER_TYPE;
}