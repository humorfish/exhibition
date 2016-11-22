/*/**
 * Created by Administrator on 2016/9/28.
 *!/
$(function () {
    $("#select").click(function () {
        if ($(this).attr("checked")) {
            $("input[name=items]").each(function () {
                $(this).attr("checked", true);
            });
        } else {
            $("input[name=items]").each(function () {
                $(this).attr("checked", false);
            });
        }
    });
    //得到选中的值，ajax操作使用  
    $("#submit").click(function () {
        var text = "";
        $("input[name=items]").each(function () {
            if ($(this).attr("checked")) {
                text += "," + $(this).val();
            }
        });
        alert(text);
    });
});*/

/*function show()
{
    var reader = new FileReader();
    reader.onload = function()
    {
        alert(this.result)
    }
    var f = document.getElementById("filePicker").files[0];
    reader.readAsText(f);
}

function getFileUrl(sourceId) {
    var url;
    if (navigator.userAgent.indexOf("MSIE") >= 1 && !(navigator.userAgent.indexOf("MSIE 10.0") > 0) ) { // IE10取消了滤镜
        //url = document.getElementById(sourceId).value;
        document.all.imgOne.select();
        $("#preview").focus();
        url = document.selection.createRange().text;

    } else if (navigator.userAgent.indexOf("Firefox") > 0) { // Firefox
        url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
    } else if (navigator.userAgent.indexOf("Chrome") > 0) { // Chrome
        url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
    }else if(navigator.userAgent.indexOf("MSIE 10.0") > 0){
        url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
    }else{
        url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
    }
    return url;
}

/!**
 * 将本地图片 显示到浏览器上
 *!/
function preImg(sourceId, targetId) {
    var url = getFileUrl(sourceId);
    var imgPre = document.getElementById(targetId);
    if(window.navigator.userAgent.indexOf("MSIE") >= 1 && !(navigator.userAgent.indexOf("MSIE 10.0") > 0) ) {
        var picpreview=document.getElementById("preview");
        picpreview.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = url;
    }else{
        imgPre.src = url;
    }

}

function getFullPath(obj)
{
    if(obj)
    {
//ie
        if (window.navigator.userAgent.indexOf("MSIE")>=1)
        {
            obj.select();
            return document.selection.createRange().text;
        }
//firefox
        else if(window.navigator.userAgent.indexOf("Firefox")>=1)
        {
            if(obj.files)
            {
                return obj.files.item(0).getAsDataURL();
            }
            return obj.value;
        }
        return obj.value;
    }
}*/



var row_count = 1;    //因为页面已经有一行了，为了和谐，所以直接从2开始。详细见pic
function addNewTable() {
    var table = $("#time_table");
    var tbody = $("<tbody id= '"+ row_count + "' style='width: 100%;'></tbody>");
    var row = $('<tr class="exhibition_table_tr">'+
    '<td class="exhibition_td_left">'+
        '<div class="exhibitros_item_text_right">产品名称 '+ row_count+'</div>'+
    '</td>'+
    '<td style="width: 1px; background-color: #ffffff"></td>'+
        '<td class="exhibitors_td_center">'+
        '<div class="container-fluid">'+
        '<div class="row">'+
        '<div class="col-xs-6"><input'+
    'style="width: 300px; height: 40px; line-height: 40px; margin: 10px 10px 10px 0px;">'+
        '</div>'+
        '<div class="col-xs-6">'+
        '<button class="btn btn-danger"'+
        'onclick="del('+ row_count+')">删除'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</td>'+
        '</tr>'+

        '<tr class="exhibitors_tr_white">'+
        '<td>'+
        '<div style="height: 1px;background-color: #ffffff"></div>'+
        '</td>'+
        '</tr>'+

        '<tr class="exhibitors_tr_gray">'+
        '<td class="exhibition_td_left">'+
        '<div class="exhibitros_item_text_right">产品介绍</div>'+
        '</td>'+
        '<td style="width: 1px; background-color: #ffffff"></td>'+
        '<td class="exhibitors_td_center">'+
        '<div>'+
        '<textarea style="width: 98%; min-height: 60px; margin:4px 16px 3px 15px;"></textarea>'+
        '<div class="exhibition_red_text">* 限300字以内， 只填写产品介绍</div>'+
    '</div>'+
    '</td>'+
    '</tr>'+

    '<tr class="exhibitors_tr_white">'+
        '<td>'+
        '<div style="height: 1px;background-color: #ffffff"></div>'+
        '</td>'+
        '</tr>'+

        '<tr class="exhibitors_tr_gray">'+
        '<td class="exhibition_td_left">'+
        '<div class="exhibitros_item_text_right">产品图片</div>'+
        '</td>'+
        '<td style="width: 1px; background-color: #ffffff"></td>'+
        '<td class="exhibitors_td_center">'+
        '<div style="display: table">'+
        '<div style="display: table-row">'+
        '<div style="display: table-cell">'+
        '<input style="width: 300px;height: 20px;margin-left: 15px; background-color: #ffffff" type="file">'+
        '</div>'+
        '<div style="display: table-cell">'+
        '<div class="exhibition_blue_text_special"> 上传</div>'+
        '</div>'+
        '<div style="display: table-cell">'+
        '<div class="exhibition_red_text"> 请上传分辨率为200dpi的高清晰图片， 文件大小在800kb 以内</div>'+
    '</div>'+
    '</div>'+
    '<div style="display: table-row">'+
        '<div style="display: table-cell">'+
        '<a href="#" style="margin: 10px 0px 10px 15px;">12345623153.jpg</a>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</td>'+
    '</tr>');

    var rowDeviler =$( '<tr style="height: 6px; background-color: #ffffff"></tr>');
    /*var row1 = $("<tr class='exhibition_table_tr'><td class='exhibition_td_left'><div class='exhibitros_item_text_right'>产品名称 " + row_count +"</div> </td> <td style='width: 1px; background-color: #ffffff'></td> <td class='exhibitors_td_center'> <div class='container-fluid'> <div class='row'> <div class='col-xs-6'><input style='width: 300px; height: 40px; line-height: 40px; margin: 10px 10px 10px 0px;'> </div> <div class='col-xs-6'>" +
        "<button style='width: 60px; height: 36px; margin: 10px 10px 10px 0px; border-radius: 4px; background-color: #9b4449; color: #ffffff; font-size: 16px' onclick='del(" + row_count + ")'>删除</button>" +
        "</div> </div> </div> </td> </tr>");
    var row2 = $("<tr class='exhibitors_tr_white'> <td> <div style='height: 1px;background-color: #ffffff'></div> </td> </tr>");
    var row3 = $("<tr class='exhibitors_tr_gray'> <td class='exhibition_td_left'> <div class='exhibitros_item_text_right'>产品介绍</div> </td> <td style='width: 1px; background-color: #ffffff'></td> <td class='exhibitors_td_center'> <div> <input style='min-width: 99%; min-height: 80px; margin:1px 3px 3px 15px;'> <div class='exhibition_red_text'>* 限300字以内， 只填写产品介绍</div> </div></td></tr>");
    var row4 = $("<tr class='exhibitors_tr_white'><td>  <div style='height: 1px;background-color: #ffffff'></div> </td> </tr>");
    var row5 = $("<tr class='exhibitors_tr_gray'> <td class='exhibition_td_left'><div class='exhibitros_item_text_right'>产品图片</div>        </td> <td style='width: 1px; background-color: #ffffff'></td><td class='exhibitors_td_center'><div style='display: table'><div style='display: table-row'><div style='display: table-cell'>" +
        "<input style='width: 300px;height: 20px;margin-left: 15px; background-color: #ffffff' type='file'> </div> <div style='display: table-cell'></div> <div style='display: table-cell'> <div class='exhibition_blue_text_special'> 上传</div> " +
        " </div> <div style='display: table-cell'> <div class='exhibition_red_text'> 请上传分辨率为200dpi的高清晰图片， 文件大小在800kb 以内</div> </div> </div> <div style='display: table-row'>  <div style='display: table-cell'> <a href='#' style='margin: 10px 0px 10px 15px;'>12345623153.jpg</a> </div> </div> </div> </td>  </tr>");
    var row6= $("<div id='" + row_count + "' style='height: 6px; background-color: #ffffff'></div>");*/

    tbody.append(row);
    tbody.append(rowDeviler);
    table.append(tbody);
    row_count++;
}

function del(e) {
    //获取选中的复选框，然后循环遍历删除
    var ckbs = $("#" + e + "");
    ckbs.each(function () {
        $(this).remove();
    });
}
