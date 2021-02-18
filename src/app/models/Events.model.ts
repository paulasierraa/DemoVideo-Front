export class Events{
   private id:number;
   private name:string;
   private description:string;
   private value:number;
   private date_start:Date;
   private date_end:Date;
   private slug:string;
   private id_file:number;
   private id_state_event:number;
   private id_city:number;
   private id_user:number;

   constructor();
   constructor(id?:number,name?:string,description?:string,value?:number,date_start?:Date,date_end?:Date,
    slug?:string,id_file?:number,id_state_event?:number,id_city?:number,id_user?:number)
   {
         this.id=id;
         this.name=name;
         this.description=description;
         this.value=value;
         this.date_start=date_start;
         this.date_end=date_end;
         this.slug=slug;
         this.id_file=id_file;
         this.id_state_event=id_state_event;
         this.id_city=id_city;
         this.id_user=id_user;
   }
//    private setId(id:number){
//         this.id=id;
//    }
//    private setName(name:string){
//         this.name=name;
//     }
//     private setId(id:number){
//         this.id=id;
//     }
//     private setId(id:number){
//         this.id=id;
//    }
//    private setId(id:number){
//     this.id=id;
//     }
//     private setId(id:number){
//         this.id=id;
//     }
//     private setId(id:number){
//         this.id=id;
//     }
//     private setId(id:number){
//         this.id=id;
//     }
//     private setId(id:number){
//         this.id=id;
//     }
//     private setId(id:number){
//         this.id=id;
//     }
//     private setId(id:number){
//         this.id=id;
//     }
}