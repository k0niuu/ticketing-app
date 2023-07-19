import { NextFunction, Request, Response } from 'express';
import { DatabaseConnectionErrror } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err instanceof RequestValidationError) {
		return res.status(err.statusCode).send({ errors: err.serializeErrors() });
	}

	if (err instanceof DatabaseConnectionErrror) {
		return res.status(err.statusCode).send({ errors: err.serializeErrors() });
	}

	res.status(400).send({
		errord: [{ message: 'Something went wrong' }],
	});
};
