import { browserHistory } from 'react-router';
import axios from 'axios';
import crypto from 'crypto';

export function Signin(props) {
    browserHistory.push('/page1');
	return {
        type: "SIGN_IN",
        payload: props
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


export function page7Submit(props) {
    browserHistory.push('/page8');

	return {
        type: "PAGE_7",
        payload: props
    }
}

export function page8Submit(props) {
    browserHistory.push('/page9');

	return {
        type: "PAGE_8",
        payload: props
    }
}

export function page9Submit(props) {
    browserHistory.push('/page10');

	return {
        type: "PAGE_9",
        payload: props
    }
}

export function page10Submit(props) {
    browserHistory.push('/page11');

	return {
        type: "PAGE_10",
        payload: props
    }
}

export function page11Submit(props) {
    browserHistory.push('/page12');

	return {
        type: "PAGE_11",
        payload: props
    }
}

export function page12Submit(props) {
    browserHistory.push('/page13');

	return {
        type: "PAGE_12",
        payload: props
    }
}

export function page13Submit(props) {
    browserHistory.push('/page14');

	return {
        type: "PAGE_13",
        payload: props
    }
}

export function page14Submit(props) {
    browserHistory.push('/page15');

	return {
        type: "PAGE_14",
        payload: props
    }
}

export function page15Submit(props) {
    browserHistory.push('/page16');

	return {
        type: "PAGE_15",
        payload: props
    }
}

export function page16Submit(props) {
    browserHistory.push('/page17');

	return {
        type: "PAGE_16",
        payload: props
    }
}

export function page17Submit(props) {
    browserHistory.push('/page18');

	return {
        type: "PAGE_17",
        payload: props
    }
}

export function page18Submit(props) {
    browserHistory.push('/page19');

	return {
        type: "PAGE_18",
        payload: props
    }
}

export function page19Submit() {
    return {
        type: "FINISH"
    }
}
