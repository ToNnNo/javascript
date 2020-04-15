class Autocomplete {
    constructor(target) {

        this.target = target;
        this.url = target.dataset.url;
        this.key = target.dataset.key;
        this.length = target.dataset.length || 2;

        this.target.setAttribute('autocomplete', "off");

        this.addEvent();
    }

    addEvent() {
        this.target.addEventListener('keyup', (event) => {
            this.keyup(event);
        });
        this.target.addEventListener('keydown', (event) => {
            this.keydown(event);
        });
    }

    keyup(event){
        if(event.key === 'Escape'){
            this._remove();
            return;
        }

        if(event.key === 'ArrowDown'){
            this.down();
            return;
        }

        if(event.key === 'ArrowUp'){
            this.up();
            return;
        }

        if (this.target.value.length >= this.length) {
            fetch(this.url)
                .then(response => response.json())
                .then(response => {
                    const filtered = this.filter(response);
                    this.toHtmlList(filtered);
                })
        } else {
            this._remove();
        }
    }

    keydown(event){
        if(event.key === 'Tab'){
            this.select();
        }
    }

    filter(datas){
        return datas.filter( data => data.name.startsWith(this.target.value));
    }

    toHtmlList(datas){
        let ul = document.querySelector('#autocomplete') || document.createElement('ul');
        ul.setAttribute('id', 'autocomplete');
        ul.innerHTML = "";

        for(let data of datas) {
            let li = document.createElement('li');
            li.textContent = data[this.key];
            li.addEventListener('click', () => {
                this.target.value = data[this.key];
                this._remove();
            });

            ul.appendChild(li);
        }

        this.target.after(ul);
    }

    _remove(){
        let list = document.querySelector('#autocomplete');
        if(list) {
            list.remove();
        }
    }

    down(){
        let li = document.querySelector('#autocomplete > li.active');
        if(!li){
            document.querySelector('#autocomplete > li:first-child').classList.add('active');
        }else{
            let next = li.nextSibling;
            if(next) {
                li.classList.remove('active');
                next.classList.add('active');
            }
        }
    }

    up(){
        let li = document.querySelector('#autocomplete > li.active');
        if(li){
            let prev = li.previousSibling;
            if(prev) {
                li.classList.remove('active');
                prev.classList.add('active');
            }
        }
    }

    select(){
        let li = document.querySelector('#autocomplete > li.active');
        this.target.value = li.textContent;
        this._remove()
    }
}

window.addEventListener('DOMContentLoaded', function(){

    let inputs = document.querySelectorAll('[data-module="autocomplete"]');

    for(let input of inputs){
        new Autocomplete(input);
    }

});
