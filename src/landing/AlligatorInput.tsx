import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import api from '../api';

import AlligatorAnimation, { AnimationStage } from './AlligatorAnimation';

import { leadingBlue, whitestWhite } from '../assets/colors';
import { transformLink } from '../redux/links';


interface State {
    working: Boolean,
    link: string,
    error?: string,
    stage: AnimationStage,
    request: Promise<object>,
}

export default class AlligatorInput extends React.Component<{}, State> {
    state = {
        working: false,
        link: '',
        error: undefined,
        stage: AnimationStage.AnimationEating,
        request: Promise.resolve({ data: { shortenedUrl: '' } }),
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
        this.setState({ link: event.target.value });
    }

    handleBackToInput = (): void => {
        this.setState({
            working: false,
            error: undefined,
            link: '',
            stage: AnimationStage.AnimationEating,
        });
    }

    handleShortLink = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const { link } = this.state;
        const request: Promise<object> = api.post(
            '/api/link',
            { url: link },
        );
        this.setState({
            request,
            working: true,
            stage: AnimationStage.AnimationEating,
        });
    }

    animationStageFinished = async (stage: AnimationStage): Promise<void> => {
        const { request } = this.state;
        if (stage === AnimationStage.AnimationEating) {
            this.setState({ stage: AnimationStage.AnimationWaitingForResult });
            try {
                const response = await request;
                const link = transformLink(response.data);
                this.setState({
                    stage: AnimationStage.AnimationRevealing,
                    link: link.shortenedUrl,
                });
            } catch (err) {
                this.setState({
                    stage: AnimationStage.AnimationRevealing,
                    error: 'Could not fetch link. Try again later!',
                });
            }
        } else if (stage === AnimationStage.AnimationRevealing) {
            this.setState({ stage: AnimationStage.AnimationFinished });
        }
    }

    render() {
        const { working, link, stage, error } = this.state;
        if (working) {
            return (
                <AlligatorAnimation
                    text={link}
                    stage={stage}
                    error={error}
                    onAnimationFinished={this.animationStageFinished}
                    onBackButton={this.handleBackToInput}
                />
            );
        }
        return (
            <form
                className="input-group mb-3"
                onSubmit={this.handleShortLink}
            >
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
                        type="submit"
                    >
                        Shorten
                    </button>
                </div>
            </form>
        );
    }
}


const styles = StyleSheet.create({
    btn: {
        backgroundColor: leadingBlue,
        color: whitestWhite,
    },
    input: { padding: 25 },
});
