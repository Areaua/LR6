function countOccurrences(arr) 
{
    let occurrences = new Map();

    for (let i = 0; i < arr.length; i++) 
    {
        let item = arr[i];
        if (occurrences.has(item)) 
        {
            // Якщо елемент вже є
            occurrences.set(item, occurrences.get(item) + 1);
        } else 
        {
            // Якщо елемент ще не існує
            occurrences.set(item, 1);
        }
    }

    return occurrences;
}

let num = [1, 2, 3, 4, 2, 1, 3, 5, 6, 5, 12];
let result = countOccurrences(num);

for (let [item, count] of result) 
{
    console.log(`${item}: ${count} разів`);
}