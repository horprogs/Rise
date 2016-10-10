;(function () {
    'use strict';

    class Model {
        constructor() {
            this.data = [
                {
                    title: 'HTML',
                    level: 'Advanced',
                    info: 'Info HTML'
                },
                {
                    title: 'CSS',
                    level: 'Advanced',
                    info: 'Info CSS'
                },
                {
                    title: 'JavaScript',
                    level: 'Intermediate',
                    info: 'Info JavaScript'
                }
            ];
            this.requiredSkills = [
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
                    level: 'Advanced'
                },
                {
                    title: 'JavaScript Frameworks',
                    level: 'Novice'
                }
            ];
            this.levels = ['Novice', 'Intermediate', 'Advanced', 'Expert'];
        }
    }

    window.Model = new Model();
}());