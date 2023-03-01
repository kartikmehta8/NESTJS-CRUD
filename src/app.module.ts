import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { UserService } from './service/user/user.service';
import { UserController } from './controller/user/user.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://kartik:mehta@users.tgxiug2.mongodb.net/?retryWrites=true&w=majority'),
  MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}