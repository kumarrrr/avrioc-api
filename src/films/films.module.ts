import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {FilmsController} from './films.controller';
import {FilmsService} from './films.service'
import { FilmSchema } from './film.model';

@Module({
  imports:[MongooseModule.forFeature([{name:'Film',schema:FilmSchema}])],
  controllers:[FilmsController],
  providers :[FilmsService]

})
export class FilmsModule{}