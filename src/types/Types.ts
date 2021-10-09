export interface Postitem {
    title: string;
    body:string;
    id:number;
    onPressItem:(item:Postitem)=>void
}