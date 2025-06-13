import { UserDTO } from "./user_register.dto";
import { PartialType } from "@nestjs/mapped-types"

export class UserUpdateDTO extends PartialType(UserDTO) { }