import { browserHistory } from 'react-router';

export function Signin(props) {
    browserHistory.push('/page1');
	return {
        type: "SIGN_IN",
        payload: props.password
    }
}

export function page1Submit(props) {
	return {
        type: "PAGE_1",
        payload: props
    }
}

export function page2Submit(props) {
	return {
        type: "PAGE_2",
        payload: props
    }
}
