window.onload = function() {
    const imgGetButton = document.getElementById('button');

    imgGetButton.onclick = function() {
        const imgs = document.getElementsByTagName('img');

        for (let i = 0; i < imgs.length; i++) {
            removeElement(imgs[i]);
        }
    };
};

function removeElement(element) {
    let div = null
    const prevElement = element.previousSibling;

    if (prevElement.className === 'fake-img' || prevElement.className === 'fake-img hide') {
        div = prevElement;          
    } else {
        div = createDivElement(element);        
        element.parentNode.insertBefore(div, element);
    }    
    
    toggle(element, 'hide');
    toggle(div, 'hide'); 
}


function createDivElement(imgElem) {
    const height = imgElem.height;
    const width = imgElem.width;
    const alt = imgElem.alt;
    const div = document.createElement('div');

    div.className = 'fake-img hide';
    div.style.height = `${height}px`;
    div.style.width = `${width}px`;

    if (alt) {
        div.innerText = alt;
    } else {
        div.innerText = 'Нет описания к изображению';
    }

    return div;
}

function toggle(element, className) {
    if (element.classList) {
        element.classList.toggle(className);
    } else {
        const classes = element.className.split(' ');
        const i = classes.indexOf(className);

        if (i >= 0) {
            classes.splice(i, 1);
        } else {
            classes.push(className);
            element.className = classes.join(' ');
        }
    }
}