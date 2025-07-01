1. 真是坑呀，必须要添加一个README.md文件才能提交代码...
2. 使用github pages部署时config.mts中的base设置为仓库名字
3. logo图片要放到public下才能被打包，配置时不需要带上仓库名称，因为logo项比base多一级，打包会自动加上base
4. icon图片要放到public下才能被打包，配置时需要带上仓库名称，因为head和base是同一级