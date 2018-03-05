import { OnClickEvent, Component, Param } from "rainbowui-core";
import { Util } from 'rainbow-foundation-tools';
import PropTypes from 'prop-types';

export default class MultilevelSideMenuItemSecond extends Component {

    renderComponent() {
        const id =_.uniqueId();
        return (
            <dl className={"fore"+id}>
                <dt>
                    <a href="#" onClick={this.onClickItem.bind(this)}>
                        {this.props.value}
                    </a>
                </dt>
                <dd>
                        {this.props.children}
                </dd>
            </dl>
        );
    }

    onClickItem(e) {
        e.preventDefault ? e.preventDefault() : window.event.returnValue == false;
        this.props.onClick(new OnClickEvent(this, event, Param.getParameter(this)));
    }
};


MultilevelSideMenuItemSecond.propTypes = $.extend({}, Component.propTypes, {

});

MultilevelSideMenuItemSecond.defaultProps = $.extend({}, Component.defaultProps, {

});