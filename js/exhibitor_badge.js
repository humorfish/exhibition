/**
 * Created by Administrator on 2016/10/22.
 */
function save_para_table(){

    var tableinfo = gettableinfo();
    alert(tableinfo);


}
//get table infomation
function gettableinfo(){
    var key = "";
    var value = "";
    var tabledata = "";
    var table = $("#para_table");
    var tbody = table.children();
    var trs = tbody.children();
    for(var i=1;i<trs.length;i++){
        var tds = trs.eq(i).children();
        for(var j=0;j<tds.length;j++){
            if(j==0){
                if(tds.eq(j).text()==null||tds.eq(j).text()==""){
                    return null;
                }
                key = "key\":\""+tds.eq(j).text();
            }
            if(j==1){
                if(tds.eq(j).text()==null||tds.eq(j).text()==""){
                    return null;
                }
                value = "value\":\""+tds.eq(j).text();
            }
        }
        if(i==trs.length-1){
            tabledata += "{\""+key+"\",\""+value+"\"}";
        }else{
            tabledata += "{\""+key+"\",\""+value+"\"},";
        }
    }
    tabledata = "["+tabledata+"]";
    return tabledata;
}

function tdclick(tdobject){
    var td=$(tdobject);
    td.attr("onclick", "");
    //1,取出当前td中的文本内容保存起来
    var text=td.text();
    //2,清空td里面的内容
    td.html(""); //也可以用td.empty();
    //3，建立一个文本框，也就是input的元素节点
    var input=$("<input>");
    //4，设置文本框的值是保存起来的文本内容
    input.attr("value",text);
    input.bind("blur",function(){
        var inputnode=$(this);
        var inputtext=inputnode.val();
        var tdNode=inputnode.parent();
        tdNode.html(inputtext);
        tdNode.click(tdclick);
        td.attr("onclick", "tdclick(this)");
    });
    input.keyup(function(event){
        var myEvent =event||window.event;
        var kcode=myEvent.keyCode;
        if(kcode==13){
            var inputnode=$(this);
            var inputtext=inputnode.val();
            var tdNode=inputnode.parent();
            if (inputtext)
                tdNode.html(inputtext);
            else
                tdNode.html(text);
            tdNode.click(tdclick);
        }
    });

    //5，将文本框加入到td中
    td.append(input);
    var t =input.val();
    input.val("").focus().val(t);
//              input.focus();

    //6,清除点击事件
    td.unbind("click");
}

var row_count = 1;    //因为页面已经有一行了，为了和谐，所以直接从2开始。详细见pic
function addNewRow() {
    var table1 = $("#time_table");
    var row = $("<tr></tr>");
    var td_1 = $("<td class='table_item_title_4'></td>");
    var td_2 = $("<td class='table_item_title_16'></td>");
    var td_3 = $("<td class='table_item_title_16'></td>");
    var td_4 = $("<td class='table_item_title_16'></td>");
    var td_5 = $("<td class='table_item_title_16'></td>");
    var td_6 = $("<td class='table_item_title_16'></td>");
    var td_7 = $("<td class='table_item_title_16'></td>");

    td_1.append($("<span type='text' style='color:#000000 width: 80%; height: 80%' id='onetime_start_nick'> "+row_count+"</span>"));
    td_2.append($("<input type='text' style='width: 80%; height: 80%' id='start_H_" + row_count + "' />"));
    td_3.append($("<input type='text' style='width: 80%; height: 80%' id='start_H_" + row_count + "' />"));
    td_4.append($("<input type='text' style='width: 80%; height: 80%' id='start_H_" + row_count + "' />"));
    td_5.append($("<input type='text' style='width: 80%; height: 80%' id='start_H_" + row_count + "' />"));
    td_6.append($("<input type='text' style='width: 80%; height: 80%' id='start_H_" + row_count + "' />"));
    td_7.append($("<a href='#' onclick='save_badge(this)'>保存</a>|<a id='" + row_count + "' onclick='del(" + row_count + ")'>删除</a>"));
    row.append(td_1);
    row.append(td_2);
    row.append(td_3);
    row.append(td_4);
    row.append(td_5);
    row.append(td_6);
    row.append(td_7);
    table1.append(row);
    row_count++;
}

function del(e) {
    //获取选中的复选框，然后循环遍历删除
    var ckbs = $("#" + e + "");
    ckbs.each(function () {
        $(this).parent().parent().remove();
    });
}
