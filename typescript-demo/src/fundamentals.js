// import "./scss/styles.scss";
// import {log} from "util";
/**
 * Variable and Data type
 */
// tslint:disable
/**
 * var vs let/const
 */
function main() {
    console.log("START");
    if (true) {
        var lang = "vi";
        var target = "en-us";
        console.log("inside block");
        console.log(target);
    }
    console.log(lang);
    //console.log(target);
}
function main1() {
    var x = 5;
    console.log(x);
    var x = 10;
    console.log(x);
    var y = 55;
    console.log(y);
    //let y = 100;
    console.log(y);
}
function main2() {
    var x = 5;
    console.log(x);
    var y = 10;
    console.log(y);
}
/**
 * Data types
 */
function main3() {
    var message;
    var total = 100;
    var isProduction = true;
    var prices = [120, 88, 60];
    var languages = ['vi', 'en-us'];
    var now = new Date();
    var unknown;
    var Direction;
    (function (Direction) {
        Direction[Direction["UP"] = 0] = "UP";
        Direction[Direction["DOWN"] = 1] = "DOWN";
        Direction[Direction["LEFT"] = 2] = "LEFT";
        Direction[Direction["RIGHT"] = 3] = "RIGHT";
    })(Direction || (Direction = {}));
    ;
    function log(msg) {
        console.log(msg);
    }
    isProduction = false;
    unknown = Direction.UP;
    unknown = 'changed';
    var post = {
        id: "postId",
        title: 'Post Title',
        body: 'Post Body'
    };
    message = "50";
    function getPost(postId) {
        // do something to retrieve post
        return {
            id: postId,
            title: 'Post Title',
            body: 'Post Body',
            extra: 'data'
        };
    }
}
main();
main1();
main2();
main3();
