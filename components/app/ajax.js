;(function () {
    'use strict';

    class Ajax {
        constructor(opt) {
            this.__url = opt.url;
            this.__method = opt.method;
            this.__data = opt.data;
            this.__callback = opt.callback;
            this._request();
        }

        _request() {
            let xhr = new XMLHttpRequest();
            xhr.open(this.__method, this.__url, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200)
                        this.__callback(this.response).bind(this);
                }
            };
            xhr.send(this.__data);
        }
    }

    window.Ajax = Ajax;
}());