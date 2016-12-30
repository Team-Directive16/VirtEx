export interface NewsDetails{
  title:string;
  createdOn:Date;
  byUser:string;
  body:string;
  comments:[{
    commentTitle:string;
    commentBody:string;
  }]
}
