export const INITIALIZE = 'INITIALIZE';


export function initialize(status){

	return {
		type:INITIALIZE,
		status:status,
	}
	
}
