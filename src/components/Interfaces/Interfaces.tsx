export interface ResultType {
    definition : string;
    type : string;
    example : string;
    image_url : string;
    emoji : string;
    map:Function
}
export interface ResultObj {
    definitions? : ResultType,
    word? : string,
    pronunciation? : string ,
    message?:string
}
