/**
 * Created by Administrator on 2016/10/21.
 */
function save_para_table() {

    var tableinfo = gettableinfo();
    alert(tableinfo);
}
//get table infomation
function gettableinfo() {
    var key = "";
    var value = "";
    var tabledata = "";
    var table = $("#para_table");
    var tbody = table.children();
    var trs = tbody.children();
    for (var i = 1; i < trs.length; i++) {
        var tds = trs.eq(i).children();
        for (var j = 0; j < tds.length; j++) {
            if (j == 0) {
                if (tds.eq(j).text() == null || tds.eq(j).text() == "") {
                    return null;
                }
                key = "key\":\"" + tds.eq(j).text();
            }
            if (j == 1) {
                if (tds.eq(j).text() == null || tds.eq(j).text() == "") {
                    return null;
                }
                value = "value\":\"" + tds.eq(j).text();
            }
        }
        if (i == trs.length - 1) {
            tabledata += "{\"" + key + "\",\"" + value + "\"}";
        } else {
            tabledata += "{\"" + key + "\",\"" + value + "\"},";
        }
    }
    tabledata = "[" + tabledata + "]";
    return tabledata;
}

function tdclick(tdobject) {
    var td = $(tdobject);
    td.attr("onclick", "");
    //1,取出当前td中的文本内容保存起来
    var text = td.text();
    //2,清空td里面的内容
    td.html(""); //也可以用td.empty();
    //3，建立一个文本框，也就是input的元素节点
    var input = $("<input>");
    //4，设置文本框的值是保存起来的文本内容
    input.attr("value", text);
    input.bind("blur", function () {
        var inputnode = $(this);
        var inputtext = inputnode.val();
        var tdNode = inputnode.parent();
        tdNode.html(inputtext);
        tdNode.click(tdclick);
        td.attr("onclick", "tdclick(this)");
    });
    input.keyup(function (event) {
        var myEvent = event || window.event;
        var kcode = myEvent.keyCode;
        if (kcode == 13) {
            var inputnode = $(this);
            var inputtext = inputnode.val();
            var tdNode = inputnode.parent();
            if (inputtext)
                tdNode.html(inputtext);
            else
                tdNode.html(text);
            tdNode.click(tdclick);
        }
    });

    //5，将文本框加入到td中
    td.append(input);
    var t = input.val();
    input.val("").focus().val(t);
//              input.focus();

    //6,清除点击事件
    td.unbind("click");
}
function addtr() {
    var table = $("#para_table");
    var tr = $("<tr>" +
        "<td  onclick='tdclick(this)'>" + "</td>" +
        "<td  onclick='tdclick(this)'>" + "</td>" +
        "<td  align='center' onclick='deletetr(this)'><button type='button'  class='btn btn-xs btn-link' >" + "删除" + "</button></td></tr>");
    table.append(tr);
}

function deletetr(tdobject) {
    var td = $(tdobject);
    td.parents("tr").remove();
}

var row_count = 1;    //因为页面已经有一行了，为了和谐，所以直接从2开始。详细见pic
function addNewRow() {
    var table1 = $("#time_table");
    var row = $("<tr></tr>");
    var td_1 = $("<td class='online_submit_content_card_text_blue_18'></td>");
    var td_2 = $("<td class='online_submit_content_card_text_blue_18'></td>");
    var td_3 = $("<td class='online_submit_content_card_text_blue_28'></td>");
    var td_4 = $("<td class='online_submit_content_card_text_blue_18'></td>");
    var td_5 = $("<td class='online_submit_content_card_text_blue_18'></td>");

    td_1.append($("<input type='text' style='width: 80%; height: 100%' id='onetime_start_nick' />"));
    td_2.append($("<input type='text' style='width: 80%; height: 100%' id='start_H_" + row_count + "' />"));
    td_3.append($("<input type='text' style='width: 80%; height: 100%' id='start_H_" + row_count + "' />"));
    td_4.append($("<img class='icon-trash' src='./img/photo.png' id='" + row_count + "' onclick='addPic(" + row_count + ")'/>"));
    td_5.append($("<a id='" + row_count + "' onclick='del(" + row_count + ")'>删除</a>"));
    row.append(td_1);
    row.append(td_2);
    row.append(td_3);
    row.append(td_4);
    row.append(td_5);
    table1.append(row);
    row_count++;
}


/*// js部分需要合并部分。
function addNewRow() {
    var table1 = $("#time_table");
    var firstTr = table1.find("tbody>tr:first");
    var row = $("<tr></tr>");
    var td = $("<td style='text-align: center;'><input type='text' class='span1' style='width: 85px;' onblur='checkNick()' id='time_nick' value='时段" + row_count + "'/></td><td style='text-align: center;'><input type='text' class='span1' maxlength='2' id='time_H' value='6' />&nbsp;：&nbsp;<input type='text' class='span1' maxlength='2' id='time_m' value='00'/>&nbsp;：&nbsp;<input type='text' class='span1' id='time_s' disabled='disabled' value='00'/></td><td style='text-align: center;'><input type='text' class='span1' maxlength='2' id='time_H' value='6' />&nbsp;：&nbsp;<input type='text' class='span1' maxlength='2' id='time_m' value='00'/>&nbsp;：&nbsp;<input type='text' class='span1' id='time_s' disabled='disabled' value='00'/></td><td style='text-align: center;'><i class='icon-trash'  id='" + row_count + "' onclick='del(" + row_count + ")'></i></td>");

    row.append(td);
    table1.append(row);
    row_count++;
}*/

function del(e) {
    //获取选中的复选框，然后循环遍历删除
    var ckbs = $("#" + e + "");
    ckbs.each(function () {
        $(this).parent().parent().remove();
    });
}

function addPic() {
    
}