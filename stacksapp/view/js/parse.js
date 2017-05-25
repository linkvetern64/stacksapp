/**
 * Created by josh on 5/25/17.
 */

function testCode(){
    $dir = "sites/all/libraries";
    $files = file_scan_directory($dir, '/.*\.js$/');
}