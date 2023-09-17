import {RocketBase} from "./RocketBase";

export class MilitaryRocket extends RocketBase 
{
    name: string = "TOP SECRET"

    launch(): void
    {
        console.log("TOP SECRET") 
    }
}
