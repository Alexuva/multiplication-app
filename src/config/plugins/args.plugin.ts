import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .options({
        b:{
            alias:'base',
            type:'number',
            demandOption: true,
            describe: 'Multiplication table base'
        },
        l:{
            alias: 'limit',
            type: 'number',
            demandOption: true,
            describe: 'Table multiplication limit'
        },
        s:{
            alias: 'show',
            type: 'boolean',
            demandOption: false,
            default: true,
            describe: 'Toggle if you want to see the table in the console'
        },
        n:{
            alias: 'filename',
            type: 'string',
            demandOption: false,
            default: 'table',
            describe: 'Name of the file that outputs'
        },
        p:{
            alias: 'path',
            type: 'string',
            demandOption: 'false',
            default: 'output',
            describe: 'File destination path'
        }
    })
    .check(( argv )=>{
        if(argv.b < 1 || argv.l < 1){
            throw new Error(`Base and limit must be greater than 0`);
        }else if(Number.isNaN(argv.b) || Number.isNaN(argv.l)){
            throw new Error(`Base and limit must be a number`);
        }else{
            return true;
        }
    
    })
    .parseSync()