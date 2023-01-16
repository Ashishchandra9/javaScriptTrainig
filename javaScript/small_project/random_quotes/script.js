function generate(){
    var quotes = {"-Albert Einstein": '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it"',"-Candace Bushnell":'"Maybe some women arent meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with-Carrie Bradshaw"'}

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random()*authors.length)]

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}