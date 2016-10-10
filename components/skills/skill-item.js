;(function () {
    'use strict';

    let Model = window.Model;

    class _TooltipLevel {
        constructor(opt) {
            this.levels = Model.levels;
            this._handlerMe = opt.me;
            this._handlerParent = opt.parent;
            this._render();

        }

        static clear() {
            if (document.querySelector('.skills-tooltip')) {
                for (let i = 0; i < document.querySelectorAll('.skills-tooltip').length; ++i) {
                    document.querySelectorAll('.skills-tooltip')[i].remove();
                }
            }
        }

        _render() {
            _TooltipLevel.clear();

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
            this.clear();
        }
    }

    class SkillItem {
        constructor(opt) {
            this.title = opt.title;
            this.level = opt.level;
            this.info = opt.info;
            this.id = opt.id;
            this._render();

        }

        _render() {
            let main = document.querySelector('.js-skills');
            this.itemSkill = document.createElement('div');

            this.itemSkill.classList.add('skills__item', 'js-skills-item');
            this.itemSkill.setAttribute('data-id', this.id);

            this.itemSkill.innerHTML = `
                <span class="skills__title">${this.title}</span>
                <span class="skills__level js-level">${this.level}</span>
                <a href="#" class="skills__change js-change">Edit</a>
                <a href="#" class="skills__change js-info">Info</a>
                <a href="#" class="skills__delete js-delete">Delete</a>`;

            main.appendChild(this.itemSkill);
            this.itemSkill.addEventListener('click', this._onClickSkill.bind(this));
        }

        _onClickSkill(event) {
            event.preventDefault();

            let me = event.target,
                parent = event.currentTarget;

            if (me.classList.contains('js-change')) {
                new _TooltipLevel({
                    me,
                    parent
                });
                return;
            }

            if (me.classList.contains('js-info')) {
                this.showInfo(parent);
                return;
            }
            //if (me.classList.contains('js-delete')) {
            //    this.deleteItem.bind(window.skills)(parent);
            //}
        }

        showInfo(item) {
            if (item.nextSibling) {
                if (item.nextSibling.classList.contains('js-skills-info')) {
                    document.querySelector('.js-skills-info').remove();
                    return;
                }
            }

            if (document.querySelector('.js-skills-info')) {
                document.querySelector('.js-skills-info').remove();

            }

            let elem = document.createElement('div');
            elem.classList.add('js-skills-info', 'skills-info');
            elem.innerHTML = Model.data[item.getAttribute('data-id')].info;
            item.parentNode.insertBefore(elem, item.nextSibling);
        }
    }

    window.SkillItem = SkillItem;
}());