interface Contact{
  birth?:{
      __type:string,
      iso: Date
  },
  name:string,
  sex:string,
  mobile:string,
  tag?:Array<string>,
  age?:number,
  likeCount?:number,
  random?:number
}