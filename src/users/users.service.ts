import { Injectable, NotFoundException } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Bruno', email: 'bruno@example.com' },
  ];
  private nextId = 2;

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  create(data: Omit<User, 'id'>): User {
    const user: User = { id: this.nextId++, ...data };
    this.users.push(user);
    return user;
  }

  remove(id: number): void {
    this.users = this.users.filter((u) => u.id !== id);
  }
}
