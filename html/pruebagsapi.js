var spreadsheetUrl = 'https://spreadsheets.google.com/feeds/cells/127Z2VE4OwnX1dfr_da7S39V7fCSVKjvKivC5LQCMtGs/1/public/full?alt=json';

var resultados = []

fetch(spreadsheetUrl)
    .then(results => results.json())
    .then(function(data) {
        resultados = data.feed.entry;
        lastElement =  parseInt(resultados.length) - 1;
        rows = parseInt(resultados[lastElement].gs$cell.row);
        columns = parseInt(resultados[lastElement].gs$cell.col);
        firstElement = columns;
        increment = columns;
        j = 0;
        copy = [];
        mimi = 0;
        for (var i = 1; i <= lastElement; i+=increment) 
        {
            mimi = i + firstElement - 1;
            var temp = document.getElementsByTagName("template")[0];
            var tempcontent = temp.content;
            copy.push(document.importNode(tempcontent, true));
            copy[j].getElementById("title").textContent = resultados[mimi].gs$cell.$t;
            copy[j].getElementById("title").id = "title" + j;
            copy[j].getElementById("description").textContent = resultados[mimi + 1].gs$cell.$t;
            copy[j].getElementById("description").id = "description" + j;
            copy[j].getElementById("link").href = resultados[mimi + 2].gs$cell.$t;
            copy[j].getElementById("link").textContent = resultados[mimi].gs$cell.$t;
            copy[j].getElementById("link").id = "link" + j;
            copy[j].getElementById("image").src = resultados[mimi + 3].gs$cell.$t;
            copy[j].getElementById("image").alt = resultados[mimi].gs$cell.$t;
            copy[j].getElementById("image").id = "image" + j;
            document.getElementById("app").appendChild(copy[j]);
            j++;
    
        }
    })







    


