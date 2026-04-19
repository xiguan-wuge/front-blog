# GitHub Workflow 指南

## 概述

GitHub Workflow 是 GitHub Actions 的一部分，用于自动化软件开发流程。本文档基于项目中的 `deploy.yml` 配置进行讲解。

## deploy.yml 配置详解

```yaml
name: Deploy to GitHub Pages
```

### 触发条件 (on)

```yaml
on:
  push:
    branches:
      - main
  workflow_dispatch:
```

- **`push`**: 当代码推送到 `main` 分支时自动触发
- **`workflow_dispatch`**: 支持手动触发（可在 GitHub 仓库的 Actions 页面手动运行）

### 并发控制 (concurrency)

```yaml
concurrency:
  group: pages
  cancel-in-progress: false
```

- **`group: pages`**: 同一 group 的 workflow 只会同时运行一个
- **`cancel-in-progress: false`**: 新触发时不会取消正在运行的 workflow，保证部署顺序

### Jobs 配置

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
```

- **`runs-on: ubuntu-latest`**: 在最新的 Ubuntu 系统上运行
- **`permissions`**: 授予写权限以部署内容

### Steps 步骤

| 步骤 | Action | 作用 |
|------|--------|------|
| Checkout | `actions/checkout@v4` | 拉取代码仓库 |
| Setup pnpm | `pnpm/action-setup@v4` | 安装 pnpm 包管理器 |
| Setup Node | `actions/setup-node@v4` | 配置 Node.js 环境 |
| Install Dependencies | `pnpm install --frozen-lockfile` | 安装项目依赖 |
| Build | `pnpm run docs:build` | 构建文档 |
| Deploy | `peaceiris/actions-gh-pages@v3` | 部署到 GitHub Pages |

## 常用 GitHub Actions Action

| Action | 用途 |
|--------|------|
| `actions/checkout` | 检出代码 |
| `actions/setup-node` | 配置 Node.js |
| `actions/setup-python` | 配置 Python |
| `pnpm/action-setup` | 配置 pnpm |
| `peaceiris/actions-gh-pages` | 部署到 GitHub Pages |
| `JamesIves/github-pages-deploy-action` | 另一种部署方式 |

## 常见变量

- **`secrets.GITHUB_TOKEN`**: GitHub 自动生成的令牌，用于认证
- **`github.ref`**: 当前分支/标签名
- **`github.sha`**: 提交的 SHA 值
- **`github.event_name`**: 触发事件类型

## 更多学习资源

- [GitHub Actions 官方文档](https://docs.github.com/en/actions)
- [GitHub Marketplace](https://github.com/marketplace?type=actions)
