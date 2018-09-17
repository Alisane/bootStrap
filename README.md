# bootStrap
The index.html is the main page of the website.This website called "微金所"，the bootstrap framework is mainly used for page layout.
I also used less to implement page styles.You can use your computer or mobile phone to visit this website .
## Less
I find use less made my code more concise and to made few mistakes.You can have a try.You must be love it.  \<br>
Here are some of the most common ones
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
