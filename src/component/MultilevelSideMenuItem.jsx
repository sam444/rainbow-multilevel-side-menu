import { OnClickEvent, Component, Param } from "rainbowui-core";
import { Util } from 'rainbow-foundation-tools';
import PropTypes from 'prop-types';

export default class MultilevelSideMenuItem extends Component {

    renderComponent() {
        return (
            <div className="item">
                <h3>
                    <span>·</span>
                    <a href="#" onClick={this.onClickItem.bind(this)}>
                        {this.props.value}
                    </a>
                </h3>
                {this.renderItem()}
            </div>
        );
    }

    renderItem() {
        if (this.props.children != null && this.props.children != undefined) {
            return (
                <div className="item-list clearfix">
                    <div className="close">x</div>
                    <div className="subitem">
                        {this.props.children}
                    </div>
                    <div className="cat-right">
                    </div>
                </div>
            );
        }
    }

    onClickItem(e) {
        e.preventDefault ? e.preventDefault() : window.event.returnValue == false;
        this.props.onClick(new OnClickEvent(this, event, Param.getParameter(this)));

    }
};


MultilevelSideMenuItem.propTypes = $.extend({}, Component.propTypes, {
    icon: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string
});


MultilevelSideMenuItem.defaultProps = $.extend({}, Component.defaultProps, {
    icon: "glyphicon glyphicon-home",
    value: "MenuItem"
});