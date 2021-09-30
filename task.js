let fs = require('fs'); // Please Use Node.js
let Input_Arr = fs.readFileSync(__dirname + '/\data.txt').toString().split(','); // Reading data.txt Numbers From Repo Directory

const Numbers = [5,8,0,1,9,11,15,16]; 

console.log("Original Numbers List: ", Numbers)

bblSort_ASC(Numbers) // Calling Ascending Bubble Sort Function For Numbers Array
console.log("Numbers List After ASC Sorting: ", Numbers)
bblSort_DESC(Numbers) // Calling Descending Bubble Sort Function For Numbers Array
console.log("Numbers List After DESC Sorting: ", Numbers)

console.log("Input Array List Before Sorting: ", Input_Arr)

function bblSort_ASC(arr) // Bubble Sort Function For Ascending Sorting
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

function bblSort_DESC(arr) // Bubble Sort Function For Descending Sorting
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

bblSort_ASC(Input_Arr); // Calling Bubble Ascending Sort Function For Input Array From data.txt
Save_Output() // Calling The Save Output Function
console.log("Input Array List After ASC Sorting: ", Input_Arr)
bblSort_DESC(Input_Arr); // Calling Bubble Descending Sort Function For Input Array From data.txt
console.log("Input Array List After DESC Sorting: ", Input_Arr)


function Save_Output() // Saving Result In output.txt For The Ascending Bubble Sort Of The Input Array From data.txt As Requested In To-Do's
{
    let file = fs.createWriteStream(__dirname + '/\output.txt');
    file.on('error', function(err) { Console.log(err) });
    let str = Input_Arr.join(','); 
    file.write(str);
    file.end();
}
