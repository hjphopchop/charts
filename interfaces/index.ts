export interface Data {
    id: string
    personal_id: string
    name: string
    answers:answers[]
}

interface answers {
    id:string;
    name: string;
    type: number;
    low: number;
    high: number;
    median: number;

}

