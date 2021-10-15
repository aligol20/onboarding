import { ImageStyle, ViewStyle } from "react-native";



export interface IAuth {
    main : ()=>void;
    signIn:()=>void;
}
export interface IIcon {

    style?:ViewStyle;
    onPress?:(e:any)=>void;
    size?:number;
}
export interface IPostHeader{
    onPress?:(e:any)=>void;
    avatarSRC:string;
    style?:ImageStyle;
    username?:string
}