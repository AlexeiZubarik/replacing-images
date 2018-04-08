/*$(document).ready(function () {
    $('#button').click(function () {
        $('img').toggleClass('hide');
        const imgs = document.getElementsByTagName('img');
        console.log(imgs);
        for (let i = 0; i < imgs.length; i++) {
            console.log(imgs[i].height + 'x' + imgs[i].width);          
        }
    });
});*/
window.onload = function() {
    const imgGetButton = document.getElementById('button');
    console.log(imgGetButton);

    imgGetButton.onclick = function() {
        const imgs = document.getElementsByTagName('img');
        console.log(typeof imgs, imgs);

        for (let i = 0; i < imgs.length; i++) {
            removeElement(imgs[i]);
        }
    };
};

function removeElement(element) {
    let div = null;    
    console.log(element.previousElementSibling);
    if (element.previousElementSibling) {
        if (element.previousElementSibling.className.split(' ').indexOf('fake-img')) {
            div = element.previousElementSibling;
        } else {
            div = createDivElement(element);
        }        
    } else {
        div = createDivElement(element);
    }   
    
    toggle(element, 'hide');
    toggle(div, 'hide');    
    element.parentNode.insertBefore(div, element);
}


function createDivElement(imgElem) {
    const height = imgElem.height;
    const width = imgElem.width;
    const alt = imgElem.alt;
    const div = document.createElement('div');

    div.className = 'fake-img hide';
    div.style.height = `${height}px`;
    div.style.width = `${width}px`;
    div.innerText = alt;
    console.log(`${height}x${width}`);

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