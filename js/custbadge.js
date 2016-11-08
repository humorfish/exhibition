/**
 * Created by you on 2016/11/8.
 */
var custBadge = new Object();


var hd;
function trDoubleClick(trobj){
    var tr=$(trobj);
    tr.attr("onclick", "");
    var tdl=tr.find("td");
    for(var i=0;i<tdl.length;i++){
        if(i==0){
            //第一列保持不变
            console.log(tdl.eq(i).find("input").val());
        }else if(i==tdl.length-1){
            //最后一列先清除  修改，删除 按钮
            tdl.eq(i).html("");
            //然后 添加 保存 和 取消 按钮
            tdl.eq(i).html("<a href='#' onclick='save_badge(this)'>保存</a>|<a href='#' onclick='cancel_badge(this)'>取消</a>");
        }else{
            //保存td的值
            var tdtext=tdl.eq(i).text();
            //清空td里的内容
            tdl.eq(i).html("");
            var input=$("<input>");
            input.attr("value",tdtext);
            tdl.eq(i).append(input);
//			console.log(tdl.eq(i).text());
        }

    }

}


function tdDouClick(tdobj){
    var tr=$(tdobj).parent();
    var tdl=tr.find("td");
    for(var i=0;i<tdl.length;i++){
        if(i==0){
            //第一列保持不变

//			console.log(tdl.eq(i).find("input").val());
        }else if(i==tdl.length-1){
            //最后一列先清除  修改，删除 按钮
            tdl.eq(i).html("");
            //然后 添加 保存 和 取消 按钮
            tdl.eq(i).html("<a href='#' onclick='save_badge(this)'>保存</a>|<a href='#' onclick='cancel_badge(this)'>取消</a>");
        }else{
            //保存td的值
            var tdtext=tdl.eq(i).text();
            //清空td里的内容
            tdl.eq(i).html("");

            //把td的值 付 给 input
            var input=$("<input>");
            input.attr("value",tdtext);
            tdl.eq(i).append(input);

            //同时 添加隐藏域 保存td值，用于取消操作还原 td原值
            input=$("<input hidden='true'>");
            input.attr("value",tdtext);
            tdl.eq(i).append(input);

            //清除点击事件
            tdl.eq(i).attr("onclick", "");

        }

    }

}

function save_badge(savebtu){
    var saveobj=$(savebtu);
    var tdl=saveobj.parent().parent().find("td");
    var params=new Object();
    if(tdl.length>0){
        params.ids=tdl.eq(0).find("input").val();
        params.name=tdl.eq(1).find("input").val();
        params.sector=tdl.eq(2).find("input").val();
        params.duties=tdl.eq(3).find("input").val();
        params.mobile=tdl.eq(4).find("input").val();
        params.email=tdl.eq(5).find("input").val();
        params.projids=$('#projids').val();
        params.contids=$('#contids').val();
        params.custids=$('#custids').val();
    }

    $.ajax({
        type: "post",
        url: "add",
        data: params,
        dataType: 'json',
        success: function(data){
            console.log(data);
            if(data.msg!=''){
                alert(data.msg);
            }else{
                if(data.code==0&&data.data.length>0&&data.data[0]!=''){
                    console.log(data.data[0]);
                    //为新添加记录 付 ids
                    tdl.eq(0).html("");
                    var input=$("<input hidden='true'>");
                    input.attr("value",data.data[0]);
                    tdl.eq(0).append(input);
                }
                cancel_badge(saveobj,true);
            }
        },
        error:function(data){
            alert("错误请求"+data);
        }
    });

}

//取消按钮 把input还原回 td
function cancel_badge(cb,save){
    var cbobj=$(cb);
    var tdl=cbobj.parent().parent().find("td");
    for(var i=0;i<tdl.length;i++){
        if(i==0){
            //第一列保持不变
//			console.log(tdl.eq(i).find("input").val());
        }else if(i==tdl.length-1){
            //最后一列先清除  修改，删除 按钮
            tdl.eq(i).html("");
            //然后 添加 删除 按钮
            tdl.eq(i).html("<a href='#' onclick='confirm(\"尊敬的用户，您确认要删除该条记录吗？\")?del_badge(this):\"\"'>删除</a>");
        }else{
            //保存input的值
            var inputText;
            //如果是保存成功，设置td值为新值，否则使用隐藏域还原旧值
            if(save){
                inputText=tdl.eq(i).find("input").val();
            }else{
                inputText=tdl.eq(i).find("input:hidden").val();
            }

            //清除td里的内容
            tdl.eq(i).html("");

            //重新为td赋值
            tdl.eq(i).html(inputText);

            //重新为td添加 点击事件
            tdl.eq(i).attr("onclick", "tdDouClick(this)");
        }
    }

}

function del_badge(delbtu){
    console.log(delbtu);
    var delobj=$(delbtu);
    var tdl=delobj.parent().parent().find("td");
    for(var i=0;i<tdl.length;i++){
        if(i==0){
            //获取隐藏列的ids
            var ids=tdl.eq(i).find("input").val();
            if(ids!=null&&ids!=""){
                $.ajax({
                    type: "post",
                    url: "del",
                    data: {projids:$('#projids').val(),contids:$('#contids').val(),custids:$('#custids').val(),ids:ids},
                    dataType: 'json',
                    success: function(data){
                        if(data.msg!=''){
                            alert(data.msg);
                        }else{
                            delobj.parent().parent().remove();
                        }
                    },
                    error:function(data){
                        console.log("错误请求"+data);
                    }
                });
            }
        }

    }
}
