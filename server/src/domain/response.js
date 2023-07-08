import httpCodes from "./httpCodes.js";

class Response {
  constructor(code, message, data){
    const { statusCode, httpStatus } = typeof code === 'string' ? httpCodes[code] : code;
    this.timeStamp = new Date().toLocaleString();
    this.statusCode = statusCode;
    this.httpStatus = httpStatus;
    this.message = message;
    this.data = data;
  }
}

export default Response;