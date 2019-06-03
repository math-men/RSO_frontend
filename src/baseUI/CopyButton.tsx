import React from 'react';


interface Props {
    className?: string,
    copyText: string,
    children: React.ReactChild,
    onCopy?: Function,
}

export default class CopyButton extends React.Component<Props> {
    copyToClipboard = () => {
        const { copyText, onCopy } = this.props;
        const el = document.createElement('textarea');
        el.value = copyText;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        if (onCopy) {
            onCopy();
        }
    };

    render() {
        const { className, children } = this.props;
        return (
            <button
                type="button"
                className={className}
                onClick={this.copyToClipboard}
            >
                {children}
            </button>
        );
    }
}
