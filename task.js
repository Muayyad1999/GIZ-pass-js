let fs = require('fs');
let Input_Arr = fs.readFileSync(__dirname + '/\data.txt').toString().split(',');

const Numbers = [5,8,0,1,9,11,15,16];

console.log("Original Numbers List: ", Numbers)

bblSort_ASC(Numbers)
console.log("Numbers List After ASC Sorting: ", Numbers)
bblSort_DESC(Numbers)
console.log("Numbers List After DESC Sorting: ", Numbers)

console.log("Input Array List Before Sorting: ", Input_Arr)

function bblSort_ASC(arr)
{
    for(let i = 0; i < arr.length; i++)
    { 
        for(let j = 0; j < (arr.length - i - 1); j++)
        {
            if(arr[j] > arr[j + 1])
            {
                let temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
}

function bblSort_DESC(arr)
{
    for(let i = 0; i < arr.length; i++)
    { 
        for(let j = 0; j < (arr.length - i - 1); j++)
        {
            if(arr[j] < arr[j + 1])
            {
                let temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
}

bblSort_ASC(Input_Arr);
Save_Output()
console.log("Input Array List After ASC Sorting: ", Input_Arr)
bblSort_DESC(Input_Arr);
console.log("Input Array List After DESC Sorting: ", Input_Arr)


function Save_Output()
{
    let file = fs.createWriteStream(__dirname + '/\output.txt');
    file.on('error', function(err) { Console.log(err) });
    let str = Input_Arr.join(','); 
    file.write(str);
    file.end();
}
