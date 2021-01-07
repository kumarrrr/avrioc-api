import * as mongoose from 'mongoose';

export const FilmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true
  },
  ticketPrice: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  genre: {
    type: [String],
    required: true

  },
  photo: {
    type: String,
    required: true
  }
})

export interface Film {
  id: string,
  name: string,
  description: string,
  releaseDate: Date,
  rating: number,
  ticketPrice: string,
  country: string,
  genre: [string],
  photo: string

}