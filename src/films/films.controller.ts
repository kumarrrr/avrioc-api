import { Controller, Post, Body } from "@nestjs/common";
import { FilmsService } from './films.service';


@Controller('films') //filter routes to /films
export class FilmsController {
  constructor(private readonly filmService: FilmsService) { }

  @Post()
  async insertFilm(
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('releaseDate') releaseDate: Date,
    @Body('rating') rating: number,
    @Body('ticketPrice') ticketPrice: string,
    @Body('country') country: string,
    @Body('genre') genre: string,
    @Body('photo') photo: string,
  ) {
    const generatedId = await this.filmService.insertFilm(
      name, 
      description, 
      releaseDate, 
      rating, 
      ticketPrice, 
      country, 
      genre, 
      photo
    );
    return { id: generatedId }
  }
}

//name, description, releaseDate, rating, ticketPrice, country, genre, photo