import { CustomError } from './custom-error';

export class DatabaseConnectionErrror extends CustomError {
	statusCode = 500;
	reason = 'Error connecting to database';

	constructor() {
		super();

		Object.setPrototypeOf(this, DatabaseConnectionErrror.prototype);
	}

	serializeErrors() {
		return [{ message: this.reason }];
	}
}
