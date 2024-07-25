# QwQ

新增设置项：

首先到 `src/lib/qwq.ts` 中将数组 `allQwQSettings` 新增一个名称（设置项保存的 `key`）。

接着到同文件的 `PagesSettings` 中找到相应的分类，新增一个子项。

结束。

新增设置页面：

到 `src/lib/qwq.ts` 中新建一个分类即可。

新增自定义页面：

到 `src/App.tsx` 中的 `pages` 添加一个类似 `status` 的项；

之后在 `App` 组件中进行判断展示即可。

因为此处自定义页面只有一个，因此没有做封装处理。
