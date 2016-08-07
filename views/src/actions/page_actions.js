import { browserHistory } from 'react-router';

export function Signin(props) {
    browserHistory.push('/page1');
	return {
        type: "SIGN_IN",
        payload: props.password
    }
}

export function page1Submit(props) {
    browserHistory.push('/page2');
	return {
        type: "PAGE_1",
        payload: props
    }
}

export function page2Submit(props) {
    browserHistory.push('/page3');

	return {
        type: "PAGE_2",
        payload: props
    }
}

export function page3Submit(props) {
    browserHistory.push('/page4');

	return {
        type: "PAGE_3",
        payload: props
    }
}

export function page4Submit(props) {
    browserHistory.push('/page5');

	return {
        type: "PAGE_4",
        payload: props
    }
}

export function page5Submit(props) {
    browserHistory.push('/page6');

	return {
        type: "PAGE_5",
        payload: props
    }
}

export function page6Submit(props) {
    browserHistory.push('/page7');

	return {
        type: "PAGE_6",
        payload: props
    }
}
