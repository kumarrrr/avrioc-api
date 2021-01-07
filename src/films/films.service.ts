import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Film } from './film.model'

@Injectable()
export class FilmsService {
  private films: Film[] = [];

  constructor(
    @InjectModel('Film') private readonly filmModel: Model<any>,
  ) { }

  async insertFilm(
    name: string,
    description: string,
    releaseDate: Date,
    rating: number,
    ticketPrice: string,
    country: string,
    genre: string,
    photo: string
  ) {
    const newFilm = new this.filmModel({ name, description, releaseDate, rating, ticketPrice, country, genre, photo })
    const result = await newFilm.save();
    return result.id as string



  }

}