'use strict';const httpVal = /http:\/\/(www\.)?zoomsphere\.com/g;const httpsVal = 'https:\/\/www.zoomsphere.com';class Replace {  static replaceHttp(attachment) {    if (typeof attachment === 'object' && attachment !== null) {      return attachment[0].toString().replace(httpVal, httpsVal);    }    if (typeof attachment === 'string' && attachment !== null) {      return attachment.replace(httpVal, httpsVal);    }  }}module.exports = Replace;