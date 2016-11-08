/**
 * Created by Administrator on 2016/10/9.
 */

function chooseWay(id) {
    if (id == 'import_excel'){
        document.getElementById('import_single').style.display="none";
        document.getElementById('import_excel').style.display="block";
    } else if (id == 'import_single'){
        document.getElementById('import_excel').style.display="none";
        document.getElementById('import_single').style.display="block";
    }
}