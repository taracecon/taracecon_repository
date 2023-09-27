export abstract class RocketBase {
    abstract name: string;

    launch(): void {
        console.log("The" , this.name, "launched at", new Date().toISOString()) 
    }
}
