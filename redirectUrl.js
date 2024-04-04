function redirectUrl() {
    const redirectObj = {
        "https://depp.wang/2020/03/26/how-to-inset-slide-in-markdown/": "https://depp.wang/2020/03/26/how-to-insert-slide-in-markdown/",
        "https://depp.wang/2020/03/26/how-to-inset-slide-in-markdown/#more": "https://depp.wang/2020/03/26/how-to-insert-slide-in-markdown/",
        "https://depp.wang/2020/03/26/how-to-inset-slide-in-markdown/undefined": "https://depp.wang/2020/03/26/how-to-insert-slide-in-markdown/",
        "https://depp.wang/2019/05/17/how-to-read-online-and-derect-download-github-file/":"https://depp.wang/2019/05/17/how-to-direct-download-github-a-file/"
    };

    const newUrl = redirectObj[window.location.href];
    if (typeof newUrl !== 'undefined') {
        window.location = newUrl;
    }
}

redirectUrl();