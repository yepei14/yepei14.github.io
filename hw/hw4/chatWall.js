// 需要用到的值的声明及初始化
var socket= io('https://wall.cgcgbcbc.com/');
var count = 0, // 记录当前可加入消息的box
    flag = 0, // 记录当前是否有管理员消息，有为1，否则为0
    messagebox = $(".messagebox"),
    headimg = $(".headimg"), nickname = $(".nickname"),
    content = $(".content"), footer = $("#footer")[0];
var speed = 10, pos = 0, contentPos = [0, 0, 0, 0],
    nicknamePos = [0, 0, 0, 0];// 控制滚动
var timer, adminTimer;// 计时器
var xmlhttp = new XMLHttpRequest();// 创建XMLHttpRequest对象

// 显示历史消息
xmlhttp.onreadystatechange=function(){
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var history = JSON.parse(xmlhttp.responseText);
      for (var i = 0; i < messagebox.length; i++){
        headimg[i].setAttribute("src", history[i].headimgurl);// 加载用户头像
        nickname[i].innerHTML = history[i].nickname + ":";// 加载用户昵称
        content[i].innerHTML = history[i].content;// 加载消息内容
        nickname[i].style.left = "0px";// 初始化昵称的位置
        content[i].style.left = "0px";// 初始化内容的位置
      }
    }
}
xmlhttp.open("GET","https://wall.cgcgbcbc.com/api/messages",true);
xmlhttp.send();

// 普通用户消息
socket.on('new message',function(json){
  headimg[count].setAttribute("src", json.headimgurl);// 加载用户头像
  nickname[count].innerHTML = json.nickname + ":";// 加载用户昵称
  content[count].innerHTML = json.content;// 加载消息内容
  nickname[count].style.left = "0px";// 初始化昵称的位置
  content[count].style.left = "0px";// 初始化内容的位置
  if (flag){
    count = count < messagebox.length ? ++count : 1;
  }
  else{
    count = count < messagebox.length ? ++count : 0;
  }
});

// 管理员消息
socket.on('admin', function(json){
  flag = 1;
  count = count == 0 ? 1 : count;
  headimg[0].setAttribute("src", "admin.png");
  nickname[0].innerHTML = json.nickname + ":";// 加载管理员昵称
  content[0].innerHTML = json.content;// 加载消息内容
  nickname[0].style.left = "0px";// 初始化昵称的位置
  content[0].style.left = "0px";// 初始化内容的位置
  nickname[0].style.color = 'red';
  content[0].style.color = 'red';
  clearTimeout(adminTimer);
  adminTimer = setTimeout(function(){
    nickname[0].style.color = 'white';
    content[0].style.color = 'white';
    flag = 0;
  }, 10000);
})

// 底部公告滚动及消息过长时的滚动
function MarqueeLeft(){
  // 底部公告滚动
  if (pos > 0){
    pos--;
    footer.style.left = pos + "px";
  }
  else{
    setTimeout('pos = footer.scrollWidth', 1500);
  }
  // 过长消息和名字滚动
  for (i in messagebox){
    if (content[i].offsetWidth < content[i].scrollWidth){
      // 如果消息长度大于容器长度
      if (contentPos[i] + content[i].scrollWidth > 0){
        contentPos[i]--;
        content[i].style.left = contentPos[i] + "px";
      }
      else{
        contentPos[i] = 0;
      }
    }
    if (nickname[i].offsetWidth < nickname[i].scrollWidth){
      // 如果昵称长度大于容器长度
      if (nicknamePos[i] + nickname[i].scrollWidth > 0){
        nicknamePos[i]--;
        nickname[i].style.left = nicknamePos[i] + "px";
      }
      else{
        nicknamePos[i] = 0;
      }
    }
  }
}

// 滚动效果的计时器
clearInterval(timer);
timer = setInterval(MarqueeLeft,speed);