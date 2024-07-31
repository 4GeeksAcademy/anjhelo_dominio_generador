let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = [".com", ".net", ".us", ".io"]

let word = " ";

for(let i = 0; i < pronoun.length; i++)
{
    for(let j = 0; j < adj.length; j++)
    {
        for(let k = 0; k < noun.length; k++)
        {
            for(let x = 0; x < extension.length; x++)
            {
                word = pronoun[i] + adj[j] + noun[k] + extension[x];
                console.log(word);
            }
                
        }
    }
}
