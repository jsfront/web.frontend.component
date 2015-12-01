web.frontend.component
======================

## **Big picture**

Here are some commonly used web-frontend components.

In [/library](https://github.com/thzt/web.frontend.component/tree/master/library) directory, there are some pure javascript libs.

In [/jqueryplugin](https://github.com/thzt/web.frontend.component/tree/master/jqueryplugin) directory, there are some plugins based on jquery.

## **Dependency**

About "underscore", it is a library provided some functional-style methods,

some operations on set would be simplified by using it.

About "/bootstrap" "/bootstrap-datetimepicker" "/jquerymobile" "/webuploader", 

only a few libs depend on them, I write xxx-wrapper to encapsulate them.

such as [modalwrapper](https://github.com/thzt/web.frontend.component/tree/master/jqueryplugin/modalwrapper) encapsulated bootstrap modaldialog,

[datepickerwrapper](https://github.com/thzt/web.frontend.component/tree/master/jqueryplugin/datepickerwrapper) capsulated datetimepicker.

Why do I create these wrappers, you can see chinese blog: 

[设计的连续性](https://thzt.github.io/design/)

## **Modularization**

Dealing with each lib, I put all its utilities in one folder.

Most of libs, I create test-xxx.html to show the use-case of them separately.

## **More about jquery plugins**

As you see, there would be so many jqueryplugins in real world project.

So I create a library to manage them: [pluginmanager](https://github.com/thzt/web.frontend.component/tree/master/library/pluginmanager)

**Therefore I can write plugins in an uniform way.**

For more details, you can see [testpluginmanager.html](https://github.com/thzt/web.frontend.component/blob/master/library/pluginmanager/testpluginmanager.html) in its own folder,

or chinese blogs: 

[jQuery插件的把玩方式](https://thzt.github.io/jquery-plugin/)

## **More about design**

other related blog about the art of design are as follow:

[封装的内涵](https://thzt.github.io/encapsulation/)

[设计的正交性](https://thzt.github.io/design-for-orthogonality/)

[你有多少时间用来创造](https://thzt.github.io/creativity/)

[可替换的设计策略](https://thzt.github.io/choice/)

[抽象的层次](https://thzt.github.io/hierarchy-of-abstraction/)

[消除重复与可复用相距多远](http://thzt.github.io/reuse-oriented-programming/)

