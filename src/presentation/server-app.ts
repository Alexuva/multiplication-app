import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    show: boolean;
    filename: string;
    path: string;
}

export class ServerApp {

    static run({ base, limit, show, filename, path }: RunOptions){
        console.log('Server running...');

        const table: string = new CreateTable().execute({ base, limit });
        const wasSave: boolean = new SaveFile().execute({ fileContent: table, fileName:filename, destination:path, });
        
        if(show) console.log(table);
        if(wasSave) console.log('File created!');
    }

}