
let dataInsertedHere = document.getElementsByClassName('dataToBeInserted')
let input = document.getElementById('input')

input.addEventListener('keyup',(e)=>{
    const searchKey = e.target.value.toLowerCase();

    const filteredEmojiList= emojiList.filter((emoji)=>
        emoji.description.toLowerCase().includes(searchKey)||
        emoji.aliases.toString().toLowerCase().includes(searchKey)
    );
    render(filteredEmojiList)
})

function render(filteredEmojiList){
    dataInsertedHere[0].innerHTML=""
    
    filteredEmojiList.forEach(element => {
        let htmlToBeInserted = 
        `
        <div style="display: flex; align-items: center; border-bottom: 1px solid #333333;">
        <div style="min-width: 8%;font-size: xxx-large; font-weight: 200;">${element.emoji}</div>
        <div style="min-width: 40%; font-size: x-large; font-weight: 200;">${element.aliases.toString()}</div>
        <div style="font-size: x-large; font-weight: 200;">${element.description}</div>
        </div>
        `
        dataInsertedHere[0].insertAdjacentHTML('afterBegin',htmlToBeInserted);
    });
}

window.onload = ()=> render(emoji)