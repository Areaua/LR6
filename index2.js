function aclean(arr) 
{
    let anagrams = new Map();

    for (let word of arr) 
    {

        let sortedWord = word.toLowerCase().split('').sort().join('');

        anagrams.set(sortedWord, word);
    }

    return Array.from(anagrams.values());
}

let words = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
let uniqueWords = aclean(words);

alert(uniqueWords);
