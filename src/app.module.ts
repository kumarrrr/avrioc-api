import { Module } from '@nestjs/common';

import { FilmsModule} from './films/films.module'

import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://kumar:pHhqj5mKgBgCJsdy@cluster0.wekof.mongodb.net/avrioc?retryWrites=true&w=majority'),FilmsModule],
  
})
export class AppModule {}
