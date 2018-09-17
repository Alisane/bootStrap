# bootStrap
The index.html is the main page of the website.This website called "微金所"，the bootstrap framework is mainly used for page layout.
I also used less to implement page styles.You can use your computer or mobile phone to visit this website .
## Less
I find use less made my css code more concise and to made few mistakes.You can have a try.You must be love it.<br>  Here are some of the most common ones
```
/**/才会编译，在.css文件中可见
//不会编译，在.css文件中不可见
/*变量  @变量名：值*/
@baseColor:#e92322;
a {
  color: @baseColor;
}
/*混入可以将一个定义好的样式引入到另一个样式中，类似于函数调用*/
.addRadius(@r:10px){/*默认10px*/
  border-radius: @r;
  -webkit-border-radius: @r;
  -moz-border-radius: @r;
}
div {
  width:200px;
  height:200px;
  .addRadius(5px);
}
/*嵌套:实现选择器的继承，减少代码量，使代码结构更清晰*/
.jd_header{
  width: 100px;
  height: 100px;
  .addRadius();
  >div {
    &::before {
      content: "";
    }
    width: 100%;
    a{
      text-decoration: underline;
      &:hover {
        text-decoration:none;
      }
    }
    >h3 {
      width: 100%;
      height: 100%;
    }
    ul {
      list-style: none;
    }
  }
}
```
# iscroll.js
When you visit this website with your mobile phone ,you may find a horizontal sliding navigation bar(横向滑动的导航条),it is difficult to use javascript by myself,but iscroll.js hlep me solved the problem.If you want to know more about it, please visited this url百度(http://www.360doc.com/content/14/0724/11/16276861_396699901.shtml)[百度](http://www.360doc.com/content/14/0724/11/16276861_396699901.shtml)
```
var myScroll = new IScroll(".tabs_parent",{
        scrollX:true,
        scrollY:false
    });
```
