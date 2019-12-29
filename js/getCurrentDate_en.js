//29/12/2019
//Dec 29, 2019
function getCurrentTime() {
    let $d = new Date();
    let $str = 'Today is ';
    let $month = $d.getMonth();    //获取当前月份
    if ($month === 0) {
        $str += 'Jan. '
    } else if ($month === 1) {
        $str += 'Feb. '
    } else if ($month === 2) {
        $str += 'Mar. '
    } else if ($month === 3) {
        $str += 'Apr. '
    } else if ($month === 4) {
        $str += 'May '
    } else if ($month === 5) {
        $str += 'Jun. '
    } else if ($month === 6) {
        $str += 'Jul. '
    } else if ($month === 7) {
        $str += 'Aug. '
    } else if ($month === 8) {
        $str += 'Sept. '
    } else if ($month === 9) {
        $str += 'Oct. '
    } else if ($month === 10) {
        $str += 'Nov. '
    } else if ($month === 11) {
        $str += 'Dec. '
    }

    $str += ' ' + $d.getDate() + ', ';         //获取当前日期
    $str += $d.getFullYear();       //获取当前年份

    let $weekday = $d.getDay();          //0-6，0表示星期天
    if ($weekday === 0) {
        $str += ' Sun.';
    } else if ($weekday === 1) {
        $str += ' Mon.';
    } else if ($weekday === 2) {
        $str += ' Tues.';
    } else if ($weekday === 3) {
        $str += ' Wed.';
    } else if ($weekday === 4) {
        $str += ' Thurs.';
    } else if ($weekday === 5) {
        $str += ' Fri.';
    } else if ($weekday === 6) {
        $str += ' Sat.';
    }
    return $str;
}

// 定时器，每隔1秒更新一次时间
setInterval(function () {
    $('#getDate_en').html(getCurrentTime());
}, 1000);