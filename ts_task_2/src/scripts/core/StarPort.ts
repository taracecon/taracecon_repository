import {SpaceXRocket} from "./SpaceXRocket";
import {NasaRocket} from "./NasaRocket";
import {MilitaryRocket} from "./MilitaryRocket";
import {RocketBase} from "./RocketBase";

export class StarPort {
    getAllRockets(): RocketBase[] {
        let arr: RocketBase[] = [new SpaceXRocket(), 
                                new NasaRocket(),
                                new MilitaryRocket(),
                                new MilitaryRocket(), 
                                new SpaceXRocket(),
                                new MilitaryRocket(),
                                new NasaRocket(),
                                new NasaRocket(),
                                new MilitaryRocket(),
                                new SpaceXRocket()]; 
        return arr
    }
}
