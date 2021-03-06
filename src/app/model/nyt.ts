export interface Nyt {
    status: string;
    num_results: Number;
    results: Array<Result>;
}

export interface Result {
    feedTitle: string;
    title: string;
    abstract: string;
    url: string;
    short_url: string;
    published_date: Date;
    today: boolean;
}
