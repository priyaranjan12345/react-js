'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return e(
                'span',
                { style: { color: "blue", background: "silver", fontSize: 22 } },
                'You liked this.'
            );
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

/// create element
class MyElement extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return e(
            'h1',
            {},
            "Hello React"
        )
    }
}


const rootContainer = document.querySelector('#root');
const myroot = ReactDOM.createRoot(rootContainer);
myroot.render(e(MyElement));