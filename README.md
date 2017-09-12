### react文件结构的优化

推荐按照组件的功能来组织结构，比如一个用于搜索的组件，它本身应该是自运行的，里面有搜索框，图片显示，Loading，错误处理，数据处理等多个组件，并且最好是设置一些默认值。

对于更复杂的组件，这种结构也适用，比如reducer,action等也可以包含在功能组件下。同级组件的reducers,actions最后在一个文件里合并。

### 参考

- [component-folder-pattern](https://medium.com/styled-components/component-folder-pattern-ee42df37ec68)
- [深入浅出React和Redux](https://github.com/mocheng/react-and-redux)