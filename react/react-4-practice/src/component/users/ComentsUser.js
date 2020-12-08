import React, {Component} from 'react';
import './Users.css'

class ComentsUser extends Component {
    colore() {
        let r = Math.floor(Math.random() * (256))
        let g = Math.floor(Math.random() * (256))
        let b = Math.floor(Math.random() * (256))
        let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        return color
    }

    render() {
        let {item} = this.props;

        return (
            <div style={{background: `${this.colore()}`}} className={'divka3'}>
                {item.id}.{item.name}-{item.body}
            </div>
        );
    }
}

export default ComentsUser