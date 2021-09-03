export default function FormatUrl(url) {

    let formatedUrl = '';
    if (url === undefined) {
        console.log('url: ',url);
        return formatedUrl = 'undefined';
    }else{
        formatedUrl = url.replace(/\s/g, '-');
        return formatedUrl
    }
    // console.log('url: ',formatedUrl);
}