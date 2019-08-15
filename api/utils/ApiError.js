module.exports = class ApiError extends Error {
	constructor(obj = { message: 'There was an error', status: 404, redirectUrl: null }) {
		super(obj.message);
		this.name = "ApiError";
		this.status = obj.status;
		this.msg = obj.message;
		this.redirectUrl = obj.redirectUrl;
	}
}