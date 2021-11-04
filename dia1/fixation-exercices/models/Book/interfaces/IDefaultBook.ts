import { RowDataPacket } from 'mysql2';

export default interface IDefaultBook extends RowDataPacket {
  id: number,
  title: string,
  author_id: number
}
