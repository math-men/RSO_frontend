import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import alligatorEatingImg from '../assets/animation/alligatorEating.gif';
import alligatorReturningImg from '../assets/animation/alligatorReturning.png';
import { whitestWhite, errorRed } from '../assets/colors';


interface State {
    copied: boolean,
}

interface Props {
    text: string,
    error?: string,
    stage: AnimationStage,
    onAnimationFinished: (stage: AnimationStage) => void,
    onBackButton: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export enum AnimationStage {
    AnimationEating,
    AnimationWaitingForResult,
    AnimationRevealing,
    AnimationFinished,
}


export default class AlligatorAnimation extends React.Component<Props, State> {
    state = {
        copied: false,
    };

    copyText = async () => {
        const { text } = this.props;
        await navigator.clipboard.writeText(text);
        this.setState({ copied: true });
    };

    alligator = () => {
        const { stage } = this.props;
        if (stage === AnimationStage.AnimationEating) {
            return <img
                src={alligatorEatingImg}
                className={css(styles.alligator)}
                alt="alligator"
            />;
        }
        return <img
            src={alligatorReturningImg}
            className={css(styles.alligator)}
            alt="alligator"
        />;
    };

    render() {
        const { stage, text, error, onAnimationFinished, onBackButton } = this.props;
        const { copied } = this.state;
        return (
            <div className={css(styles.wrapper)}>
                <div
                    className={css(
                        styles.mask,
                        styles.animation,
                        stage === AnimationStage.AnimationEating ? styles.maskFirstStage : null,
                        stage === AnimationStage.AnimationWaitingForResult ? styles.maskWaiting : null,
                        stage === AnimationStage.AnimationRevealing ? styles.maskSecondStage : null,
                    )}
                    onAnimationEnd={() => onAnimationFinished(stage)}
                >
                    {this.alligator()}
                </div>
                <div className={css(
                    styles.textWrapper,
                    styles.animation,
                    stage === AnimationStage.AnimationEating ? styles.textHiding : null,
                    stage === AnimationStage.AnimationWaitingForResult ? styles.textHidden : null,
                    stage === AnimationStage.AnimationRevealing ? styles.textShowing : null,
                )}>
                    <h3
                        className={css(
                            styles.text,
                            error ? styles.error : null,
                        )}
                    >
                        {error || text}
                    </h3>
                    <div className={css(
                        styles.buttonsContainer,
                        stage === AnimationStage.AnimationFinished ? null : styles.buttonsHidden,
                    )}>
                        {
                            error ? null :
                                <button
                                    className={`btn btn-outline-light ${css(styles.button)}`}
                                    onClick={this.copyText}
                                >{copied ? 'Copied' : 'Copy'}</button>
                        }
                        <button
                            className={`btn btn-outline-light ${css(styles.button)}`}
                            onClick={onBackButton}
                        >Back</button>
                    </div>
                </div>
            </div>
        )
    }
};

const buttonContainerWidth = 90;
const textWidth = 700;
const alligatorWidth = 183;
const alligatorHeight = 100;

const maskFirstStageAnimation = {
    '0%': {
        width: 0,
    },
    '100%': {
        width: 'calc(100vw - 400px + 183px)',
    }
};
const maskSecondStageAnimation = {
    '0%': {
        width: 'calc(100vw - 400px + 183px)',
    },
    '100%': {
        width: 0,
    },
};
const hideText = {
    '0%': {
        clipPath: `polygon(0 0, calc(100vw - 400px + ${alligatorWidth / 2}px) 0,` +
            ` calc(100vw - 400px + ${alligatorWidth / 2}px) 100%, 0 100%)`,
    },
    '100%': {
        clipPath: `polygon(calc(100vw - 400px + ${alligatorWidth / 2}px) 0, calc(100vw - 400px + ${alligatorWidth / 2}px)` +
            ` 0, calc(100vw - 400px + ${alligatorWidth / 2}px) 100%, calc(100vw - 400px + ${alligatorWidth / 2}px) 100%)`,
    },
};
const showText = {
    '0%': {
        clipPath: `polygon(calc(100vw - 400px + ${alligatorWidth / 2}px) 0, calc(100vw - 400px + ${alligatorWidth / 2}px)` +
            ` 0, calc(100vw - 400px + ${alligatorWidth / 2}px) 100%, calc(100vw - 400px + ${alligatorWidth / 2}px) 100%)`,
    },
    '100%': {
        clipPath: `polygon(0 0, calc(100vw - 400px + ${alligatorWidth / 2}px) 0,` +
            ` calc(100vw - 400px + ${alligatorWidth / 2}px) 100%, 0 100%)`,
    },
};


const styles = StyleSheet.create({
    wrapper: {
        height: 34,
    },
    alligator: {
        marginTop: -15,
        width: alligatorWidth,
        height: alligatorHeight,
        position: 'absolute',
        right: 0,
        zIndex: 1000,
    },
    animation: {
        animationDuration: '5s',
        animationTimingFunction: 'linear',
        animationIterationCount: 1,
        animationFillMode: 'forwards',
    },
    textWrapper: {
        position: 'absolute',
        width: '100vw',
        left: 0,
        padding: `0 calc(((100vw - ${textWidth}px)/2) - ${buttonContainerWidth}px) 0 calc((100vw - ${textWidth}px)/2)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: whitestWhite,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        margin: 0,
    },
    error: {
        color: errorRed,
    },
    textHidden: {
        visibility: 'hidden',
    },
    textHiding: {
        animationName: [hideText],
    },
    textShowing: {
        animationName: [showText],
    },
    mask: {
        position: 'absolute',
        left: 0,
    },
    maskFirstStage: {
        animationName: [maskFirstStageAnimation],
    },
    maskSecondStage: {
        animationName: [maskSecondStageAnimation],
    },
    maskWaiting: {
        width: 'calc(100vw - 400px + 183px)',
    },
    buttonsContainer: {
        display: 'inline-flex',
        justifyContent: 'flex-end',
        width: buttonContainerWidth,
        transition: 'opacity 0.3s',
    },
    buttonsHidden: {
        opacity: 0,
    },
    button: {
        fontSize: 10,
        padding: '3px 6px',
        marginLeft: 2,
    }
});
