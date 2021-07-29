/* httpRequestAxios v0.1.0 | (c) 2021 by Gleisson Neves */

/**
 * All http code states 
 */
const STATUS_HTTP = [
	{status: "200", msg:'OK'},
	{status: "201", msg:'Created'},
	{status: "202", msg:'Accepted'},
	{status: "203", msg:'Non-Authoritative Information'},
	{status: "204", msg:'No Content'},
	{status: "205", msg:'Reset Content'},
	{status: "206", msg:'Partial Content'},
	{status: "207", msg:'Multi-Status (WebDAV)'},
	{status: "208", msg:'Already Reported (WebDAV)'},
	{status: "226", msg:'IM Used'},
	{status: "300", msg:'Multiple Choices'},
	{status: "301", msg:'Moved Permanently'},
	{status: "302", msg:'Found'},
	{status: "303", msg:'See Other'},
	{status: "304", msg:'Not Modified'},
	{status: "305", msg:'Use Proxy'},
	{status: "306", msg:'(Unused)'},
	{status: "307", msg:'Temporary Redirect'},
	{status: "308", msg:'Permanent Redirect (experimental)'},
 	{status: "400", msg:'Bad Request'},
	{status: "401", msg:'Unauthorized'},
	{status: "402", msg:'Payment Required'},
	{status: "403", msg:'Forbidden'},
	{status: "404", msg:'Not Found'},
	{status: "405", msg:'Method Not Allowed'},
	{status: "406", msg:'Not Acceptable'},
	{status: "407", msg:'Proxy Authentication Required'},
	{status: "408", msg:'Request Timeout'},
	{status: "409", msg:'Conflict'},
	{status: "410", msg:'Gone'},
	{status: "411", msg:'Length Required'},
	{status: "412", msg:'Precondition Failed'},
	{status: "413", msg:'Request Entity Too Large'},
	{status: "414", msg:'Request-URI Too Long'},
	{status: "415", msg:'Unsupported Media Type'},
	{status: "416", msg:'Requested Range Not Satisfiable'},
	{status: "417", msg:'Expectation Failed'},
	{status: "418", msg:'Client Error: I\'m a teapot'},
	{status: "420", msg:'Enhance Your Calm (Twitter)'},
	{status: "422", msg:'Unprocessable Entity (WebDAV)'},
	{status: "423", msg:'Locked (WebDAV)'},
	{status: "424", msg:'Failed Dependency (WebDAV)'},
	{status: "425", msg:'Reserved for WebDAV'},
	{status: "426", msg:'Upgrade Required'},
	{status: "428", msg:'Precondition Required'},
	{status: "429", msg:'Too Many Requests'},
	{status: "431", msg:'Request Header Fields Too Large'},
	{status: "444", msg:'No Response (Nginx)'},
	{status: "449", msg:'Retry With (Microsoft)'},
	{status: "450", msg:'Blocked by Windows Parental Controls (Microsoft)'},
	{status: "451", msg:'Unavailable For Legal Reasons'},
	{status: "499", msg:'Client Closed Request (Nginx)'},
	{status: "500", msg:'Internal Server Error'},
	{status: "501", msg:'Not Implemented'},
	{status: "502", msg:'Bad Gateway'},
	{status: "503", msg:'Service Unavailable'},
	{status: "504", msg:'Gateway Timeout'},
	{status: "505", msg:'HTTP Version Not Supported'},
	{status: "506", msg:'Variant Also Negotiates (Experimental)'},
	{status: "507", msg:'Insufficient Storage (WebDAV)'},
	{status: "508", msg:'Loop Detected (WebDAV)'},
	{status: "509", msg:'Bandwidth Limit Exceeded (Apache)'},
	{status: "510", msg:'Not Extended'},
	{status: "511", msg:'Network Authentication Required'},
	{status: "598", msg:'Network read timeout error'},
	{status: "599", msg:'Network connect timeout error'},
];

/**
 * Method used to get the request code 
 * 
 * @param String statusCodeRequest
 * @returns Object|undefined
 */
export function getStatusCodeRequest(statusCodeRequest) {
    return STATUS_HTTP.find(STATUS_HTTP => STATUS_HTTP.status === statusCodeRequest);
}

/**
 * Method used to get the message request code 
 * 
 * @param String statusCode
 * @returns String
 */
export function getMessageStatusCode(statusCode) {
	return getStatusCodeRequest(statusCode).msg;
}
