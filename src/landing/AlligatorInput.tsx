import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import AlligatorAnimation, { AnimationStage } from './AlligatorAnimation';

import { leadingBlue, whitestWhite } from '../assets/colors';

interface State {
    working: Boolean,
    link: string,
    stage: AnimationStage,
    request: Promise<string>,
}

export default class AlligatorInput extends React.Component<{}, State> {
    state = {
        working: false,
        link: '',
        stage: AnimationStage.AnimationEating,
        request: Promise.resolve(''),
    }

    componentDidMount() {
        document.addEventListener('keyup', this.handleEscKey);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.handleEscKey);
    }

    handleEscKey = (event: KeyboardEvent): void => {
        const { working } = this.state;
        if (event.key === 'Escape' && working) {
            const { stage } = this.state;
            this.animationStageFinished(stage);
        }
    }

    handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({link: event.target.value});
    }

    handleBackToInput = (): void => {
        this.setState({
            working: false,
            link: '',
            stage: AnimationStage.AnimationEating,
        });
    }

    handleShortLink = (event: React.MouseEvent<HTMLButtonElement>): void => {
        // TODO: Set real request
        const request = new Promise<string>(function(resolve) { 
            setTimeout(resolve.bind(null, 'sshort.me/asdf'), 500);
        });
        this.setState({
            request,
            working: true,
            stage: AnimationStage.AnimationEating,
        })
    }

    animationStageFinished = async (stage: AnimationStage): Promise<void> => {
        const { request } = this.state;
        if (stage === AnimationStage.AnimationEating) {
            this.setState({stage: AnimationStage.AnimationWaitingForResult});
            const shortLink = await request;
            this.setState({
                stage: AnimationStage.AnimationRevealing,
                link: shortLink,
            });
        } else if (stage === AnimationStage.AnimationRevealing) {
            this.setState({stage: AnimationStage.AnimationFinished});
        }
    }

    render() {
        const { working, link, stage } = this.state;
        if (working) {
            return (
                <AlligatorAnimation
                    text={link}
                    stage={stage}
                    onAnimationFinished={this.animationStageFinished}
                    onBackButton={this.handleBackToInput}
                />
            );
        }
        return (
            <div className="input-group mb-3">
                <input
                    type="text"
                    className={`form-control ${css(styles.input)}`}
                    placeholder="Enter link to shorten"
                    value={link}
                    onChange={this.handleLinkChange}
                />
                <div className="input-group-append">
                    <button
                        className={`btn ${css(styles.btn)}`}
                        type="button"
                        onClick={this.handleShortLink}
                    >Shorten</button>
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: leadingBlue,
        color: whitestWhite,
    },
    input: {
        padding: 25,
    },
})