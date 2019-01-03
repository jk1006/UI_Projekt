export class Subject {
  constructor(
    public id: number,
    public name: string,
    public startTime: string,
    public endTime: string,
    public room?: String
  ) {}
}