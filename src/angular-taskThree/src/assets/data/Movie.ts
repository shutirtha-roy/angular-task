import { IMovie } from "./IMovie";

export class Movie implements IMovie {
    public id!: string;
    public title!: string;
    public photoUpload!: string;
    public subtitle!: string;
    public description!: string;

    public constructor(init?:Partial<Movie>) {
        Object.assign(this, init);
    }
}