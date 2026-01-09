# Paper核心

## 启动服务器
### 同意 EULA
EULA 为 "Minecraft 最终用户许可协议", 具体内容详见: https://www.minecraft.net/zh-hans/eula
想开启Minecraft服务端, 必须同意EULA
创建 `eula.txt`, 并输入
```txt
eula=true
```

### 创建启动文件

在服务端**核心文件同目录**下创建 `run.bat`(windows)/`run.sh`(Linux), 内容为:
```shell
java -jar -Xms最小内存 -Xmx最大内存 <服务端核心名>.jar nogui
```
如: 
```shell
java -jar -Xms512M -Xmx4G server.jar nogui
```
 保存

## 启动
windows: 双击 `run.bat`
Linux: 输入 `sudo ./run.sh`


## 常见问题
### 未配置 Java 环境变量
解决方案一:
- 重新配置环境变量

解决方案二:
- 在启动脚本中手动设置 java 路径

::: code-group
```shell [Windows]
JAVA_PATH="<Java根目录>\\bin\\java.exe"
"%JAVA_PATH%" -jar -Xms最小内存 -Xmx最大内存 <服务端核心名>.jar nogui
```

```shell [Linux]
JAVA_PATH="<Java根目录>/bin/java"
"$JAVA_PATH" -jar -Xms最小内存 -Xmx最大内存 <服务端核心名>.jar nogui
```
:::
### Java 版本错误
- 当前Minecraft版本 与 当前Java版本 **不兼容**
	- 参照[[必要环境]]中的Java推荐版本, 重新安装Java环境
- 系统中有多个 Java 版本, 且默认 Java 版本与当前Minecraft版本不兼容
	- 同 "未配置Java环境变量" 解决方案


### 创建启动文件

在服务端**核心文件同目录**下创建 `run.bat`(windows)/`run.sh`(Linux), 内容为:
::: code-group

```shell [自动选择java]
java -jar -Xms最小内存 -Xmx最大内存 <服务端核心名>.jar nogui
```

```shell [Windows手动指定Java]
JAVA_PATH="<Java根目录>\\bin\\java.exe"
"%JAVA_PATH%" -jar -Xms最小内存 -Xmx最大内存 <服务端核心名>.jar nogui
```

```shell [Linux手动指定Java]
JAVA_PATH="<Java根目录>/bin/java"
"$JAVA_PATH" -jar -Xms最小内存 -Xmx最大内存 <服务端核心名>.jar nogui
```

:::

#inbaojdoa
