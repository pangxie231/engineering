学习打包工具

总目标是熟悉工程化，围绕打包工具自己配置
包括rollup+vue3+Typescript+husky+eslint+prettier

当前规划
用rollup
- 从0搭建一个Vue3的项目
  - 修改文件内容时，热更新 ok
  - 尝试自己创建一种语法，自己编写一个插件来转换它
  - rollup dev下也会直接写入文件到磁盘而不是内存中(考虑使用esbuild作为开发或者转换成webpack)
  - 添加less、sass、scss、stylus的支持 ok (只要配置了postcss-plugin, 不管是sass或者less都会先通过对应的编译器转为css, 然后css会经过postcss的处理)
  - 添加对typescript的支持
  - 添加jsx/tsx的支持