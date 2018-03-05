import { OnClickEvent, Component, Param } from "rainbowui-core";
import { Util } from 'rainbow-foundation-tools';
import PropTypes from 'prop-types';

export default class MultilevelSideMenuItemThird extends Component {

    renderComponent() {
        return (
            <em>
                <a href="#" onClick={this.onClickItem.bind(this)}>{this.props.value}</a>
            </em>
        );
    }

    onClickItem(e) {
        e.preventDefault ? e.preventDefault() : window.event.returnValue == false;
        this.props.onClick(new OnClickEvent(this, event, Param.getParameter(this)));
    }
};


MultilevelSideMenuItemThird.propTypes = $.extend({}, Component.propTypes, {

});

MultilevelSideMenuItemThird.defaultProps = $.extend({}, Component.defaultProps, {

});