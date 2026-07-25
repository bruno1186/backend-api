import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Bruno' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'bruno@example.com' })
  @IsEmail()
  email: string;
}
