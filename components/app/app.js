(function () {
    'use strict';

    let ReactDOM = window.ReactDOM,
        React = window.React,
        Model = window.Model;

    class TooltipLevel extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                skillListData: Model.skillListData,
                levels: Model.levels
            }
        }

        changeLevel(i, el) {
            let arr = this.state.skillListData.slice();
            arr[i].level = el;

            this.setState({
                skillListData: arr
            })
            //я понял что так работать не будет
        }

        render() {
            let list = this.state.levels.map((el, i) => {
                return (
                    <div className="skills-tooltip__item"
                         key={i}
                         onClick={this.changeLevel.bind(this, i, el)}>{el}</div>
                )
            });
            return (
                <div className="skills-tooltip">
                    {list}
                </div>
            );
        }
    }

    class SkillItem extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isShow: false
            }
        }

        showTooltip() {
            this.setState({
                isShow: !this.state.isShow
            })
        }

        render() {
            return (
                <div className="skills__item">
                    <span className="skills__title">{this.props.title}</span>
                    <span className="skills__level js-level">{this.props.level}</span>
                    <a href="#" className="skills__change js-change"
                       onClick={this.showTooltip.bind(this)}>Edit
                        {this.state.isShow ? <TooltipLevel/> : null}
                    </a>
                    <a href="#" className="skills__change js-info">Info</a>
                    <a href="#" className="skills__delete js-delete">Delete</a>
                </div>
            )
        }
    }

    class SkillList extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                skillListData: Model.skillListData
            }
        }

        getList() {
            return this.state.skillListData.map(el => {
                return (
                    <SkillItem key={el.id}
                               title={el.title}
                               level={el.level}
                    />
                )
            })
        }

        render() {
            let list = this.getList();
            return (
                <div className="skills">
                    {list}
                </div>
            )
        }
    }

    ReactDOM.render(
        <SkillList/>,
        document.getElementById('root')
    );
})();