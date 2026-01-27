# 配置Java环境

由于Minecraft是由Java语言编写的沙盒游戏，无论是启动我的世界想开一把单人游戏还是在服务器上运行服务端找几个小伙伴一起游玩，实质都是要在电脑上跑Java代码，所以给你电脑配置一个Java运行环境是必不可少的

但是，并不是所有的Java版本都能支持你要游玩的游戏版本，以下是mc各版本对应的Java版本

| mc 版本             | java 版本                                                    |
| ------------------- | ------------------------------------------------------------ |
| 1.0-1.11.x          | Java 8 推荐，低版本（如Java 6/7）也可运行                    |
| 1.12(17w13a)开始    | **Java 8** (推荐 8u202或更高)                                |
| 1.17(21w19a)开始    | **[Java 16](https://www.google.com/search?q=Java+16&oq=mc各版本对应的java版本&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIHCAMQABjvBTIHCAQQABjvBdIBCjExODUxajBqMTWoAgiwAgHxBYf5SmoNqhqV8QWH-UpqDaoalQ&sourceid=chrome&ie=UTF-8&mstk=AUtExfA_b1Uuxt-qY6ULHv_Al9wuSvO4mJ94aT4sDe-_GZmCM4d3ddrfEIHf4qkPfpfTnU9n7ZCKGX-zakLsvR5zW80Y7_Rv9KoFbVnlxO0Wwe4CjZcAouXfh6w4imcOvSZlLBDDjAX54MsmlDPINQ7fkVJlYqWNaTMvwNRsAdzcZkRsItA&csui=3&ved=2ahUKEwjR0fes8P2RAxWpIEQIHQyxDdsQgK4QegQIAxAF)** (可兼容 Java 17) |
| 1.18(1.18-pre2)开始 | **Java 17** (推荐 17.0.1)                                    |
| 1.19(22w18a)开始    | **Java 17**                                                  |
| 1.20.5(24w14a)开始  | **[Java 21](https://www.google.com/search?q=Java+21&oq=mc各版本对应的java版本&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIHCAMQABjvBTIHCAQQABjvBdIBCjExODUxajBqMTWoAgiwAgHxBYf5SmoNqhqV8QWH-UpqDaoalQ&sourceid=chrome&ie=UTF-8&mstk=AUtExfA_b1Uuxt-qY6ULHv_Al9wuSvO4mJ94aT4sDe-_GZmCM4d3ddrfEIHf4qkPfpfTnU9n7ZCKGX-zakLsvR5zW80Y7_Rv9KoFbVnlxO0Wwe4CjZcAouXfh6w4imcOvSZlLBDDjAX54MsmlDPINQ7fkVJlYqWNaTMvwNRsAdzcZkRsItA&csui=3&ved=2ahUKEwjR0fes8P2RAxWpIEQIHQyxDdsQgK4QegQIAxAB)** (需64位系统) |

想来你已经决定好要下载哪一个版本的Java了，那么接下来便是去Java官网找到你要下载的JDK版本的下载链接(下载前请确认你所使用的系统并下载正确的JDK)

**Java Downloads: https://www.oracle.com/java/technologies/downloads/**

> 这里可能会有疑惑，为什么我要把 java 写为 JDK，这涉及到 java 的几个版本问题
>
> 实际上，Java 是一种编程语言，而 JDK（Java Development Kit）是用于开发 Java 应用程序的一套工具
>
> 也许有了解过 java 的同学想问，为什么不安装 JRE。这就涉及到 JRE 和 JDK 的区别了
>
> JDK 包括了编译器（javac）、解释器（java）、调试器（jdb）、文档生成工具（javadoc）等开发工具，以及 Java 运行环境（JRE）和 Java 基础类库（Java API）
>
> JRE 中包含了 Java 虚拟机（JVM）和 Java 标准类库，是运行 Java 程序所必需的环境
>
> 换句话说，JDK 是 JRE plus，JRE 能实现的功能，JDK 都能实现。JRE 没有的功能 ，JDK 也能实现。如果有想要从事 Java 开发的同学，JDK 是刚需。所以果断装全面的，避免以后出现各种麻烦

## Linux

如果你使用的是Linux系统，那么在下载压缩包后要选择合适的位置新建安装目录。比如

```shell
mkdir -p /home/local/java
```

找到你下载的压缩包的位置，将你下载的压缩包移动到该目录

```shell
mv xxx.tar.gz /home/local/java
```

进入目录

```shell
cd /home/local/java
```

解压压缩包

```shell
tar -zxvf xxx.tar.gz
```

配置环境变量，输入命令打开profile文件

```shell
vim /etc/profile
```

单击 **i** 键编辑在末尾添加：

```shell
export JAVA_HOME=/usr/java/你解压出的文件夹
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
```

单击ESC并输入:wq保存退出

验证是否配置完成，在shell输入

```shell
java -version
```

如果返回了版本信息则配置成功

## Windows

如果是windows用户，在下载完exe文件后找到合适位置新建一个文件夹,运行安装程序(.exe)并将安装路径改为你新建的文件夹

等待安装结束后进入安装路径并将路径复制,找到"编辑系统环境变量",点击"环境变量"并在用户变量或者系统变量随便一个位置新建变量,变量名为`JAVA_HOME`,变量值为刚才复制的路径

找到 **Path** 变量,新建值为 `%JAVA_HOME%\bin`

保存退出,win键(就是你键盘左下ctrl键右边那个键)+R输入cmd打开命令行,输入

```shell
java -version
```

 如果返回了版本信息则配置成功
