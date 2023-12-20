import fs from 'fs';

export interface SaveFileUseCase {
    execute: ( options: SaveFileOptions )=> boolean;
}

export interface SaveFileOptions {
    fileContent: string;
    destination: string;
    fileName: string;
}

export class SaveFile implements SaveFileUseCase{
    constructor(
        /**
         * DI - Dependency Injection - StorageRepository
         */
    ){}

    execute({ fileContent, destination, fileName }: SaveFileOptions): boolean{

        fs.mkdir(destination, { recursive: true }, (error)=>{
            if(error) throw new Error(`Unable to create folder destination: ${error.message}`);
        });

        fs.writeFile(`${destination}/${fileName}.txt`, fileContent, (error)=>{
            if(error) throw new Error(`Unable to create file: ${error.message}`);
        });

        return true;
    }
}