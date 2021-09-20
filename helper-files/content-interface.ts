//Export lets you cherry pick without the whole file

export interface Content{
  id: number;
  author: string;
  imgUrl?: string;
  type?: string;
  title: string;
  body: string;
  tags?: string[];
}
