// 洋芋'Log博客系统后端服务

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// 创建Express应用
const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 静态文件服务
app.use(express.static(path.join(__dirname)));

// 模拟数据库
const blogData = {
  posts: [
    {
      id: 1,
      title: '如何使用Node.js构建高性能Web服务器',
      excerpt: '本文将介绍如何利用Node.js的异步特性构建高性能的Web服务器，包括最佳实践和性能优化技巧。',
      author: '张三',
      date: '2023-12-15',
      category: 'technology',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Node.js', 'Web开发', '后端'],
      content: `
        <p>Node.js作为一个基于Chrome V8引擎的JavaScript运行环境，因其高效的非阻塞I/O模型而广受欢迎。本文将深入探讨如何利用Node.js构建高性能的Web服务器。</p>
        
        <h2>为什么选择Node.js？</h2>
        <p>Node.js的事件驱动、非阻塞I/O模型使其非常适合处理I/O密集型应用。与传统的多线程服务器相比，Node.js使用单线程事件循环处理并发请求，避免了线程上下文切换的开销。</p>
        
        <h2>Express.js框架简介</h2>
        <p>Express是Node.js最流行的Web框架之一，它提供了一系列强大的功能，如路由、中间件、模板引擎等，使开发Web应用变得简单高效。</p>
        
        <pre><code>
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
        </code></pre>
        
        <h2>性能优化技巧</h2>
        <p>以下是一些提高Node.js服务器性能的关键技巧：</p>
        
        <h3>1. 使用集群模块</h3>
        <p>Node.js是单线程的，但可以使用cluster模块创建多个工作进程，充分利用多核CPU。</p>
        
        <h3>2. 实现缓存策略</h3>
        <p>使用内存缓存（如Redis或Node.js内置的Map）可以显著减少数据库查询和计算开销。</p>
        
        <h3>3. 异步操作优化</h3>
        <p>确保正确使用异步操作，避免阻塞事件循环。利用Promise和async/await可以使异步代码更加清晰。</p>
        
        <h2>结论</h2>
        <p>Node.js是构建高性能Web服务器的强大工具，通过正确的架构设计和性能优化技巧，可以充分发挥其潜力。</p>
      `
    },
    {
      id: 2,
      title: '现代CSS布局技术详解',
      excerpt: '探索Flexbox和Grid等现代CSS布局技术，以及如何使用它们创建响应式和灵活的网页布局。',
      author: '李四',
      date: '2023-12-10',
      category: 'design',
      image: 'https://via.placeholder.com/600x400',
      tags: ['CSS', '前端', '设计'],
      content: `
        <p>CSS布局技术在过去几年中有了显著的发展，从传统的浮动和定位，到现代的Flexbox和Grid，为开发者提供了更强大、更灵活的布局工具。</p>
        
        <h2>Flexbox布局</h2>
        <p>Flexbox是一种一维布局模型，特别适合于在行或列方向上分配空间和对齐项目。</p>
        
        <pre><code>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
        </code></pre>
        
        <h2>Grid布局</h2>
        <p>CSS Grid是一个二维布局系统，允许开发者创建复杂的网格布局，控制行和列。</p>
        
        <pre><code>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
        </code></pre>
        
        <h2>响应式布局策略</h2>
        <p>结合媒体查询、Flexbox和Grid，可以创建适应各种屏幕尺寸的响应式布局。</p>
      `
    },
    {
      id: 3,
      title: '深入理解JavaScript异步编程',
      excerpt: '从回调函数到Promise，再到async/await，全面解析JavaScript中的异步编程模式。',
      author: '王五',
      date: '2023-12-05',
      category: 'technology',
      image: 'https://via.placeholder.com/600x400',
      tags: ['JavaScript', '前端', '编程'],
      content: `
        <p>JavaScript的异步编程模式是前端开发中的重要概念，本文将从基础到高级，全面介绍JavaScript中的异步编程技术。</p>
        
        <h2>回调函数</h2>
        <p>回调函数是JavaScript中最基本的异步编程方式，但容易导致回调地狱问题。</p>
        
        <h2>Promise</h2>
        <p>Promise提供了更优雅的异步编程方式，解决了回调地狱问题。</p>
        
        <h2>Async/Await</h2>
        <p>Async/Await是基于Promise的语法糖，使异步代码看起来更像同步代码，提高了可读性。</p>
      `
    },
    {
      id: 4,
      title: 'React性能优化策略',
      excerpt: '学习如何优化React应用性能，包括组件渲染优化、状态管理和代码分割等技术。',
      author: '赵六',
      date: '2023-11-28',
      category: 'technology',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', '前端', '性能优化'],
      content: `
        <p>随着React应用规模的增长，性能优化变得越来越重要。本文将介绍一系列React性能优化策略。</p>
        
        <h2>组件渲染优化</h2>
        <p>使用React.memo、useMemo和useCallback可以避免不必要的组件重渲染。</p>
        
        <h2>状态管理优化</h2>
        <p>合理组织状态结构，避免过度渲染。</p>
        
        <h2>代码分割</h2>
        <p>使用React.lazy和Suspense实现代码分割，减少初始加载时间。</p>
      `
    },
    {
      id: 5,
      title: '用户体验设计原则',
      excerpt: '探讨优秀用户体验设计的核心原则，以及如何将这些原则应用到实际项目中。',
      author: '钱七',
      date: '2023-11-20',
      category: 'design',
      image: 'https://via.placeholder.com/600x400',
      tags: ['UX', '设计', '用户体验'],
      content: `
        <p>用户体验设计是现代产品开发中不可或缺的一部分，本文将探讨UX设计的核心原则。</p>
        
        <h2>以用户为中心</h2>
        <p>了解用户需求和行为是设计的基础。</p>
        
        <h2>一致性</h2>
        <p>保持界面元素和交互模式的一致性，降低用户学习成本。</p>
        
        <h2>反馈</h2>
        <p>提供及时、清晰的反馈，让用户知道系统状态。</p>
      `
    },
    {
      id: 6,
      title: '数据可视化最佳实践',
      excerpt: '如何有效地将复杂数据转化为直观的可视化图表，提高数据理解和决策效率。',
      author: '孙八',
      date: '2023-11-15',
      category: 'design',
      image: 'https://via.placeholder.com/600x400',
      tags: ['数据可视化', '设计', 'D3.js'],
      content: `
        <p>数据可视化是将复杂数据转化为直观图形的过程，本文将介绍数据可视化的最佳实践。</p>
        
        <h2>选择合适的图表类型</h2>
        <p>根据数据特点和目标选择最合适的图表类型。</p>
        
        <h2>简化设计</h2>
        <p>移除不必要的视觉元素，突出重要信息。</p>
        
        <h2>交互性</h2>
        <p>添加适当的交互功能，让用户能够探索数据。</p>
      `
    }
  ],
  comments: [
    { id: 101, postId: 1, author: '李四', date: '2023-12-16', content: '非常实用的文章，我按照文中的集群模块配置，服务器性能提升了30%！' },
    { id: 102, postId: 1, author: '王五', date: '2023-12-17', content: '请问对于内存泄漏问题，有什么好的解决方案吗？' },
    { id: 201, postId: 2, author: '张三', date: '2023-12-11', content: 'Grid布局确实强大，但浏览器兼容性如何？' }
  ],
  subscribers: []
};

// API路由

// 获取所有博客文章
app.get('/api/posts', (req, res) => {
  // 支持分类过滤
  const { category } = req.query;
  let posts = blogData.posts;
  
  if (category && category !== 'all') {
    posts = posts.filter(post => post.category === category);
  }
  
  // 只返回列表所需的字段，不包含完整内容
  const postsList = posts.map(({ id, title, excerpt, author, date, category, image, tags }) => ({
    id, title, excerpt, author, date, category, image, tags
  }));
  
  res.json(postsList);
});

// 获取单篇博客文章
app.get('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = blogData.posts.find(p => p.id === postId);
  
  if (!post) {
    return res.status(404).json({ message: '文章不存在' });
  }
  
  // 获取文章的评论
  const comments = blogData.comments.filter(c => c.postId === postId);
  
  // 获取相关文章（同类别的其他文章）
  const relatedPosts = blogData.posts
    .filter(p => p.category === post.category && p.id !== postId)
    .slice(0, 3)
    .map(({ id, title, image, date }) => ({ id, title, image, date }));
  
  res.json({
    ...post,
    comments,
    relatedPosts
  });
});

// 添加评论
app.post('/api/posts/:id/comments', (req, res) => {
  const postId = parseInt(req.params.id);
  const { author, content, email } = req.body;
  
  // 验证输入
  if (!author || !content) {
    return res.status(400).json({ message: '作者和内容为必填项' });
  }
  
  // 验证文章是否存在
  const post = blogData.posts.find(p => p.id === postId);
  if (!post) {
    return res.status(404).json({ message: '文章不存在' });
  }
  
  // 创建新评论
  const newComment = {
    id: Date.now(),
    postId,
    author,
    date: new Date().toISOString().split('T')[0],
    content
  };
  
  // 添加到评论列表
  blogData.comments.push(newComment);
  
  res.status(201).json(newComment);
});

// 订阅通讯
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  
  // 验证输入
  if (!email) {
    return res.status(400).json({ message: '电子邮件为必填项' });
  }
  
  // 检查是否已订阅
  if (blogData.subscribers.includes(email)) {
    return res.status(400).json({ message: '该邮箱已订阅' });
  }
  
  // 添加到订阅者列表
  blogData.subscribers.push(email);
  
  res.status(201).json({ message: '订阅成功' });
});

// 搜索文章
app.get('/api/search', (req, res) => {
  const { query } = req.query;
  
  if (!query) {
    return res.status(400).json({ message: '搜索关键词为必填项' });
  }
  
  const searchTerm = query.toLowerCase();
  
  // 搜索标题、摘要和标签
  const results = blogData.posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) || 
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  ).map(({ id, title, excerpt, author, date, category, image, tags }) => ({
    id, title, excerpt, author, date, category, image, tags
  }));
  
  res.json(results);
});

// 处理SPA路由
app.get('*', (req, res) => {
  // 对于API请求，返回404
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ message: 'API路由不存在' });
  }
  
  // 对于其他请求，返回index.html
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});