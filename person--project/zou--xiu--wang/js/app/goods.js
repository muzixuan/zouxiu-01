/**
 * Created by Administrator on 2017/1/9.
 */
/*goods1-box1  Json数据的加载*/
var goods1 = [{gid:"1",gimg:"images/index-pic/0104goods_a1.jpg"},
    {gid:"2",gimg:"images/index-pic/0104goods_a2.jpg"},
    {gid:"3",gimg:"images/index-pic/0104goods_a3.jpg"},
    {gid:"4",gimg:"images/index-pic/0104goods_a4.jpg"},
    {gid:"5",gimg:"images/index-pic/0104goods_a5.jpg"},
    {gid:"6",gimg:"images/index-pic/0104goods_a6.jpg"},
];
var _goods1box = document.getElementById("goods1-box");
function loadjson1(){
    for(var i = 0; i< goods1.length; i++){
        var _json = goods1[i];
        var _div = document.createElement("div");
        _div.className = "pic";
        var _a = document.createElement("a");
        _a.setAttribute("href","#");
        var _img = document.createElement("img");
        _img.src = _json.gimg;
        _a.appendChild(_img)
        _div.appendChild(_a);
        _goods1box.appendChild(_div);
    }
}
loadjson1();

/*goods1-box2 Json数据加载*/
var goods2 = [{gid:"1",gimg:"images/index-pic/0105goods_b1.jpg"},
    {gid:"2",gimg:"images/index-pic/0105goods_b2.jpg"},
    {gid:"3",gimg:"images/index-pic/0105goods_b3.jpg"},
    {gid:"4",gimg:"images/index-pic/0105goods_b4.jpg"},
    {gid:"5",gimg:"images/index-pic/0105goods_b5.jpg"},
    {gid:"6",gimg:"images/index-pic/0105goods_b6.jpg"},
];
var _goods2box = document.getElementById("goods2-box");
function loadjson2(){
    for(var i = 0; i<goods2.length; i++){
        var _json = goods2[i];
        var _div = document.createElement("div");
        _div.className = "pic";
        var _a = document.createElement("a");
        _a.setAttribute("href","#");
        var _img = document.createElement("img");
        _img.src = _json.gimg;
        _a.appendChild(_img);
        _div.appendChild(_a);
        _goods2box.appendChild(_div);
    }
}
loadjson2();

/*goods1-box3  Json数据加载*/
var goods3 = [{gid:"1",gimg:"images/index-pic/0105goods_c1.jpg"},
    {gid:"2",gimg:"images/index-pic/0105goods_c2.jpg"},
    {gid:"3",gimg:"images/index-pic/0105goods_c3.jpg"},
    {gid:"4",gimg:"images/index-pic/0105goods_c4.jpg"},
    {gid:"5",gimg:"images/index-pic/0105goods_c5.jpg"},
    {gid:"6",gimg:"images/index-pic/0105goods_c6.jpg"},
];
var _goods3box = document.getElementById("goods3-box");
function loadjson3(){
    for(var i = 0; i<goods3.length; i++){
        var _json = goods3[i];
        var _div = document.createElement("div");
        _div.className = "pic";
        var _a = document.createElement("a");
        _a.setAttribute("href","#");
        var _img = document.createElement("img");
        _img.src = _json.gimg;
        _a.appendChild(_img);
        _div.appendChild(_a);
        _goods3box.appendChild(_div);
    }
}
loadjson3();
/*goods1-box4  Json数据加载*/
var goods4 = [{gid:"1",gimg:"images/index-pic/0105goods_d1.jpg"},
    {gid:"2",gimg:"images/index-pic/0105goods_d2.jpg"},
    {gid:"3",gimg:"images/index-pic/0105goods_d3.jpg"},
    {gid:"4",gimg:"images/index-pic/0105goods_d4.jpg"},
    {gid:"5",gimg:"images/index-pic/0105goods_d5.jpg"},
    {gid:"6",gimg:"images/index-pic/0105goods_d6.jpg"},
];
var _goods4box = document.getElementById("goods4-box");
function loadjson4(){
    for(var i = 0; i< goods4.length; i++){
        var _json = goods4[i];
        var _div = document.createElement("div");
        _div.className = "pic";
        var _a = document.createElement("a");
        _a.setAttribute("href","#");
        var _img = document.createElement("img");
        _img.src = _json.gimg;
        _a.appendChild(_img);
        _div.appendChild(_a);
        _goods4box.appendChild(_div);
    }
}
loadjson4();
/*goods1-box5 Json数据加载*/
var goods5 = [{gid:"1",gimg:"images/index-pic/0105goods_e1.jpg"},
    {gid:"2",gimg:"images/index-pic/0105goods_e2.jpg"},
    {gid:"3",gimg:"images/index-pic/0105goods_e3.jpg"},
    {gid:"4",gimg:"images/index-pic/0105goods_e4.jpg"},
    {gid:"5",gimg:"images/index-pic/0105goods_e5.jpg"},
    {gid:"6",gimg:"images/index-pic/0105goods_e6.jpg"},
];
var _goods5box = document.getElementById("goods5-box");
function loadjson5(){
    for(var i = 0; i< goods5.length; i++){
        var _json = goods5[i];
        var _div = document.createElement("div");
        _div.className = "pic";
        var _a = document.createElement("a");
        _a.setAttribute("href","#");
        var _img = document.createElement("img");
        _img.src = _json.gimg;
        _a.appendChild(_img);
        _div.appendChild(_a);
        _goods5box.appendChild(_div);
    }
}
loadjson5();
/*goods1-box6 Json数据加载*/
var goods6 = [{gid:"1",gimg:"images/index-pic/0105goods_f1.jpg"},
    {gid:"2",gimg:"images/index-pic/0105goods_f2.jpg"},
    {gid:"3",gimg:"images/index-pic/0105goods_f3.jpg"},
    {gid:"4",gimg:"images/index-pic/0105goods_f4.jpg"},
    {gid:"5",gimg:"images/index-pic/0105goods_f5.jpg"},
    {gid:"6",gimg:"images/index-pic/0105goods_f6.jpg"},
];
var _goods6box = document.getElementById("goods6-box");
function loadjson6(){
    for(var i = 0; i< goods6.length; i++){
        var _json = goods6[i];
        var _div = document.createElement("div");
        _div.className = "pic";
        var _a = document.createElement("a");
        _a.setAttribute("href","#");
        var _img = document.createElement("img");
        _img.src = _json.gimg;
        _a.appendChild(_img);
        _div.appendChild(_a);
        _goods6box.appendChild(_div);
    }
}
loadjson6();
