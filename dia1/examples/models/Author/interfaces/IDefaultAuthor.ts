import { RowDataPacket } from 'mysql2';

export default interface IAuthor extends RowDataPacket {
  id: number,
  first_name: string,
  middle_name?: string,
  last_name: string,
  birthdate?: string,
  nationality: string
}
