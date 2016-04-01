import {INITIALIZE} from '../actions';

let INITIAL_STATE = {
	loaded:false,
};


export default (state = INITIAL_STATE, action) =>{

	let ret;

	switch( action.type){

		case INITIALIZE:
			ret = Object.assign({},state,{
				loaded:action.status
			});

			break;

		default:
			ret = state;
			break;

	}

	console.debug("ACTION "+action.type);
	console.debug(ret);
	return ret;
	
}
