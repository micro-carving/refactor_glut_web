function getCurrentTime() {
    let $d = new Date();
    let $str='今天是';
    $str += $d.getFullYear()+'年';       //获取当前年份
    $str += $d.getMonth() + 1 + '月';    //获取当前月份
    $str += $d.getDate() + '日';         //获取当前日期
    let $weekday = $d.getDay();          //0-6，0表示星期天
    if($weekday == 0){
        $str += '星期日';
    }else if($weekday == 1){
        $str += '星期一';
    }else if($weekday == 2){
        $str += '星期二';
    }else if($weekday == 3){
        $str += '星期三';
    }else if($weekday == 4){
        $str += '星期四';
    }else if($weekday == 5){
        $str += '星期五';
    }else if($weekday == 6){
        $str += '星期六';
    }
    return $str;
}
// 定时器，每隔1秒更新一次时间
setInterval(function () {
    $('#getDate').html(getCurrentTime());
},1000);