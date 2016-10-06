;(function () {
    'use strict';

    let levels, data;

    class Model {
        constructor() {
            data = [
                {
                    title: 'HTML',
                    level: 'Advanced'
                },
                {
                    title: 'CSS',
                    level: 'Advanced'
                },
                {
                    title: 'JavaScript',
                    level: 'Intermediate'
                }
            ];
            levels = ['Novice', 'Intermediate', 'Advanced', 'Expert'];
        }
    }

    class TooltipLevel {
        constructor(opt) {
            this.levels = levels;
            this._handlerMe = opt.me;
            this._handlerParent = opt.parent;
            this._render();

        }

        _clear() {
            if (document.querySelector('.skills-tooltip')) {
                for (let i = 0; i < document.querySelectorAll('.skills-tooltip').length; ++i) {
                    document.querySelectorAll('.skills-tooltip')[i].remove();
                }
            }
        }

        _render() {
            this._clear();

            let tooltip = document.createElement('div');
            tooltip.classList.add('skills-tooltip');

            this.levels.forEach(item => {
                tooltip.innerHTML += `
                    <a href="#" class="skills-tooltip__item js-change-level" data-level="${item}">${item}</a>
                `;
            });

            this._handlerMe.classList.toggle('skills__change--active');
            this._handlerMe.appendChild(tooltip);
            tooltip.addEventListener('click', this._onChangeLevel.bind(this));
        }

        _onChangeLevel(event) {
            event.preventDefault();

            let me = event.target,
                newLevel;

            if (!me.classList.contains('js-change-level')) {
                return;
            }

            newLevel = me.getAttribute('data-level');
            this._handlerParent.querySelector('.js-level').innerHTML = newLevel;
            this._handlerMe.classList.toggle('skills__change--active');
            this._clear();
        }
    }

    class SkillItem {
        constructor(opt) {
            this.title = opt.title;
            this.level = opt.level;
            this._render();

        }

        _render() {
            let main = document.querySelector('.js-main'),
                item = document.createElement('div');

            item.classList.add('skills__item', 'js-skills-item');

            item.innerHTML = `
                <span class="skills__title">${this.title}</span>
                <span class="skills__level js-level">${this.level}</span>
                <a href="#" class="skills__change js-change">Edit</a>
                <a href="#" class="skills__delete js-delete">Delete</a>`;

            main.appendChild(item);
            item.addEventListener('click', this._onClickSkill.bind(this));
        }

        _deleteItem(item) {
            item.remove();
        }

        _onClickSkill(event) {
            event.preventDefault();

            let me = event.target,
                parent = event.currentTarget;

            if (me.classList.contains('js-change')) {
                new TooltipLevel({
                    me,
                    parent
                });
                return;
            }

            if (me.classList.contains('js-delete')) {
                this._deleteItem(parent);
            }
        }


    }

    class Skills {
        constructor() {
            this.data = data;
            this._renderForm();
            this._getItems();

        }

        _renderForm() {
            let main = document.querySelector('.js-main'),
                form = document.createElement('div');

            form.classList.add('skills-new');

            form.innerHTML = `
                <form class="js-skills-new">
                    <input type="text" class="skills-new__input js-skills-new-input" placeholder="New skill..">
                    <input type="submit" class="btn btn--blue" value="Save">
                </form>
                `;

            main.appendChild(form);
        }

        _getItems() {
            for (let val of this.data) {
                let title = val.title,
                    level = val.level;

                new SkillItem({
                    title,
                    level
                })

            }
        }
    }

    window.Model = Model;
    window.Skills = Skills;
}());