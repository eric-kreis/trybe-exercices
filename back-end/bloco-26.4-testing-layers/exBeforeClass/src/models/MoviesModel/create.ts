import connection from '@models/connection';
import { IMovie, IMovieInserted } from './interfaces';

const create = async (
{ title, directedBy, releaseYear }: IMovie,
): Promise<IMovieInserted | null> => {
  try {
    const movie = { title, directedBy, releaseYear };
    const db = await connection();
    const { insertedId: id } = await db.collection('movies').insertOne(movie);
  
    return { id };
  } catch (e) {
    return null;
  }
};

export default create;
