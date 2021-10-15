import { ImageStyle, ViewStyle } from "react-native";


export type  UserType = "ADVISER"


export type PostType  = {
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
        userType: UserType;
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

