function groupAnagrams(words){
    const anagrams ={};

    for(const word of words){
        const sortedWord = word.split('').sort().join('');
        if(groupAnagrams[sortedWord]){
            groupAnagrams[sortedWord].push(word);
        }
        else {
            groupAnagrams[sortedWord]=[word];
        }
    }
    const result = Object.values(groupAnagrams);
    return result;
}
const input = ["tsar", "rat", "tar", "star", "tars", "cheese"];
const final = groupAnagrams(input);
console.log(final);