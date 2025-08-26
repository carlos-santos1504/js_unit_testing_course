import {it,expect,vi} from 'vitest';
import writeData from './io';
import {promises as fs} from 'fs';

vi.mock('fs');
vi.mock('path', () => {
    return {
        default: {
            join: (...args) =>{
                return args[args.length -1]; //return only the filename (last argument)
            }
        },
    };
});

it('Deve executar o escrita de arquivo',()=>{
    //should execute the writeFile method
    const testData = 'Test';
    const testFilename = 'test.txt';

    writeData(testData,testFilename)
    //return expect(writeData(testData,testFilename)).resolves.toBeUndefined();
    //expect(fs.writeFile).toBeCalled();
    expect(fs.writeFile).toBeCalledWith(testFilename,testData);
});

it('Deve retornar uma promessa resolvida',()=>{
    //should execute the writeFile method
    const testData = 'Test';
    const testFilename = 'test.txt';

    writeData(testData,testFilename)
    return expect(writeData(testData,testFilename)).resolves.toBeUndefined();
    //expect(fs.writeFile).toBeCalled();
    //expect(fs.writeFile).toBeCalledWith(testFilename,testData);
});