const parser = () => {
    const bodyElem = document.querySelector('body'),
        textNode = [];


    function recursion (elem) {

        elem.childNodes.forEach(item => {
            if (item.nodeName.match(/^H\d/)) {
                const obj = {
                    header: item.nodeName,
                    content: item.textContent
                };
                textNode.push(obj);
            }
            else recursion(item);
        });

    }

    recursion(bodyElem);

    //Отправляем данные на сервер
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(textNode)
    })
        .then(response => response.json())
        .then(data => console.log(data));
};

export default parser;