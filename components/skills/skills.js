;(function () {
    'use strict';

    let SkillItem = window.SkillItem,
        Model = window.Model;

    class Skills {
        constructor() {
            this.data = Model.data;
            this._renderForm();
            this.getItems();
        }

        _renderForm() {
            let main = document.querySelector('.js-main'),
                form = document.createElement('div');

            form.classList.add('skills-new');

            form.innerHTML = `
                <form class="js-skills-new">
                    <input type="text" class="skills-new__input js-skills-new-input" placeholder="New skill..">
                    <input type="submit" class="btn btn--blue" value="Add">
                </form>
                `;

            main.appendChild(form);
            document.querySelector('.js-skills-new').addEventListener('submit', (event) => {
                event.preventDefault();
                let title = document.querySelector('.js-skills-new-input').value;
                this.addItem(title);
            });
        }

        updateView() {
            document.querySelector('.js-skills').remove();
            this.getItems();
        }

        deleteItem(item) {
            for (let key in Model.data) {
                if (+item.getAttribute('data-id') === +key) {
                    delete Model.data[key];
                    break;
                }
            }
            this.updateView();
        }

        addItem(title) {
            let newItem = {
                title: title,
                level: Model.levels[0]
            };
            Model.data.push(newItem);

            this.updateView();
        }

        getItems() {
            for (let key in this.data) {
                let val = this.data[key];
                let title = val.title,
                    level = val.level,
                    info = val.info,
                    id = key;

                let div = document.createElement('div'),
                    main = document.querySelector('.js-main');

                div.classList.add('skills', 'js-skills');
                main.appendChild(div);

                let item = new SkillItem({
                    title,
                    level,
                    id,
                    info
                });

                item.itemSkill.addEventListener('click', (event) => {
                    let me = event.target,
                        parent = event.currentTarget;

                    if (me.classList.contains('js-delete')) {
                        this.deleteItem(parent);
                    }
                });

            }
        }
    }

    window.Skills = Skills;
}());