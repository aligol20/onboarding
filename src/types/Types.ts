import { ImageStyle, ViewStyle } from "react-native";


export enum UserTypes{
    ADVISER = "ADVISER"
}
export interface PostTypes {
    location:{title: string};
    contentResponse:{description:string,creationDate:string};
    mediaResponses:[{
        type:string;
        originalUrl:string;
        creationDate:string;
        originalSize:{
            width:number;
            height:number;
        }
        id:number;
        
    }]
    id:number;
    userIdentification:{
        userId:number;
        username:string;
        reference:string;
        avatarUrl:string;
        userType: UserTypes;
    };
    userSchema:{
        liked:boolean;
        subscribe:boolean;
    }
    like:number;
    views:number;
    comments:number;
    owner:boolean;
}

export interface AuthTypes {
    main : ()=>void;
    signIn:()=>void;
}
export interface IconProps {

    style?:ViewStyle;
    onPress?:(e:any)=>void;
    size?:number;
}
export interface PostHeaderProps{
    onPress?:(e:any)=>void;
    avatarSRC:string;
    style?:ImageStyle;
    username?:string
}