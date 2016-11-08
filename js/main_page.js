/**
 * Created by Administrator on 2016/9/23.
 */

function firstCloseExpand() {
    var showStataFirst = document.getElementById('first_content').style;
    console.log("showStataFirst:" + showStataFirst);
    if (showStataFirst.display == 'none')
        showStataFirst.display = 'block';
    else
        showStataFirst.display = 'none';
}

function secondCloseExpand() {
    var showStataSecond = document.getElementById('second_content').style;
    console.log("showStataSecond:" + showStataSecond);
    if (showStataSecond.display == 'none')
        showStataSecond.display = 'block';
    else
        showStataSecond.display = 'none';
}


function OutSideCloseExpand() {
    var showStataFirst = document.getElementById('nav_content').style;
    console.log("showStataFirst:" + showStataFirst);
    if (showStataFirst.display == 'none')
        showStataFirst.display = 'block';
    else
        showStataFirst.display = 'none';
}

function OutSideCloseExpand() {
    var showStataSecond = document.getElementById('nav_content').style;
    console.log("showStataSecond:" + showStataSecond);
    if (showStataSecond.display == 'none')
        showStataSecond.display = 'block';
    else
        showStataSecond.display = 'none';
}

function setHeightWithScreen(iframe) {
    if (iframe){
        var iframeWin = iframe.contentWindow;
        iframeWin.height = document.body.offsetHeight;
    }
}

function iframeHeight() {
    var myframe_body_heigth = document.getElementById('main_iframe_parent').offsetHeight;
    var myframe_body_width = document.getElementById('main_iframe_parent').offsetWidth;
    document.getElementById('myframe_body').height = myframe_body_heigth;
    document.getElementById('myframe_body').width = myframe_body_width;
}

window.setInterval("reinitIframe()", 5);

function reinitIframe() {
    var iframe = document.getElementById("myframe_body");
    try {
        iframe.height = iframe.contentWindow.document.documentElement.scrollHeight;
    } catch (ex) {
    }
}

window.onload = function () {
    setIframeHeight(document.getElementById('external-frame'));
};

function setIframeHeight(iframe) {
    if (iframe) {
        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
        }
    }
};

