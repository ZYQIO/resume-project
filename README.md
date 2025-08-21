# 邹亚桥 - 个人简历网站

一个现代化的响应式个人简历网站，展示前端开发工程师邹亚桥的专业技能、工作经历和项目经验。

## 🌟 特性

- **响应式设计** - 完美适配PC、平板和移动设备
- **现代化UI** - 采用渐变色彩和卡片式布局
- **流畅动画** - 滚动动画和交互动效
- **深色主题** - 支持明暗主题切换
- **性能优化** - 懒加载、防抖等优化技术
- **无障碍支持** - 键盘导航和屏幕阅读器友好

## 🚀 技术栈

- **HTML5** - 语义化标签和现代HTML特性
- **CSS3** - Flexbox、Grid、动画和响应式设计
- **JavaScript ES6+** - 现代JavaScript特性
- **Font Awesome** - 图标库
- **Google Fonts** - 字体优化

## 📱 响应式断点

- **桌面端**: 1200px+
- **平板端**: 768px - 1199px
- **移动端**: 320px - 767px

## 🎨 设计特色

### 色彩方案
- 主色调: #2563eb (蓝色)
- 辅助色: #7c3aed (紫色)
- 背景色: #f8fafc (浅灰)
- 文字色: #1f2937 (深灰)

### 布局特点
- 固定导航栏
- 全屏英雄区域
- 卡片式内容展示
- 时间轴工作经历
- 技能进度条
- 项目网格布局

## 📂 项目结构

```
Resume-project/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 交互脚本
├── README.md           # 项目说明
└── 邹亚桥-前端-5.pdf   # 原始简历
```

## 🛠️ 本地开发

1. 克隆项目
```bash
git clone <repository-url>
cd Resume-project
```

2. 启动本地服务器
```bash
# 使用Python
python -m http.server 8000

# 或使用Node.js
npx serve .

# 或使用Live Server (VS Code插件)
```

3. 访问网站
```
http://localhost:8000
```

## 🌐 部署到GitHub Pages

### 方法一：自动部署

1. 将代码推送到GitHub仓库
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/resume-website.git
git push -u origin main
```

2. 在GitHub仓库设置中启用GitHub Pages
   - 进入仓库设置 (Settings)
   - 找到 Pages 选项
   - 选择 Source 为 "Deploy from a branch"
   - 选择 main 分支和 / (root) 目录
   - 点击 Save

3. 等待几分钟，网站将自动部署到：
```
https://yourusername.github.io/resume-website
```

### 方法二：使用GitHub Actions

创建 `.github/workflows/deploy.yml` 文件：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

## 📋 内容结构

### 1. 基本信息
- 姓名：邹亚桥
- 职位：前端开发工程师
- 工作年限：5年
- 联系方式：13477681517 / 13477681517@163.com

### 2. 个人优势
- 团队管理经验
- 技术攻关能力
- 新人指导能力
- 全栈技术栈
- 移动端开发
- 权限系统设计

### 3. 工作经历
- 海宏技术有限公司 (2023.12 - 至今)
- 深圳成客数科科技有限公司 (2023.06 - 2023.09)
- 深圳市惟客数据科技有限公司 (2021.03 - 2023.04)
- 深圳关爱铃数字科技有限公司 (2019.10 - 2021.03)
- 深圳市城投集团 (2018.10 - 2019.10)

### 4. 项目经验
- 关爱铃云呼平台
- 东鹏营销引流平台
- 关爱铃时间银行app
- 创投后台管理系统

### 5. 技能特长
- 前端技术：Vue.js, React, JavaScript/ES6+, TypeScript
- 构建工具：Webpack, Vite, pnpm
- 移动端开发：Taro, uni-app, 微信小程序
- 其他技能：Node.js, Docker, CI/CD

### 6. 开源工具
- vcast-cli
- virtual-scroll
- ci-demo
- ui-lib-2020
- vuex-plugins-persistence
- 基于vue2的移动端架构

## 🎯 功能特性

### 交互功能
- 响应式导航栏
- 平滑滚动
- 滚动动画
- 技能条动画
- 返回顶部按钮
- 页面进度条
- 主题切换
- 移动端菜单

### 性能优化
- 图片懒加载
- 滚动事件防抖
- CSS动画优化
- 字体预加载

### 用户体验
- 加载动画
- 悬停效果
- 工具提示
- 键盘导航
- 触摸手势支持

## 🔧 自定义配置

### 修改个人信息
编辑 `index.html` 文件中的相关内容：
- 姓名和职位
- 联系方式
- 工作年限
- 个人描述

### 修改样式
编辑 `styles.css` 文件：
- 修改色彩方案
- 调整布局
- 自定义动画

### 添加新功能
编辑 `script.js` 文件：
- 添加新的交互功能
- 修改动画效果
- 扩展主题功能

## 📱 移动端优化

- 触摸友好的按钮尺寸
- 适配不同屏幕尺寸
- 移动端导航菜单
- 触摸手势支持
- 性能优化

## 🌍 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- 移动端浏览器

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目。

## 📞 联系

- 电话：13477681517
- 邮箱：13477681517@163.com
- 工作地点：深圳

---

**注意**: 这是一个静态网站项目，可以直接部署到任何静态网站托管服务上，如GitHub Pages、Netlify、Vercel等。
