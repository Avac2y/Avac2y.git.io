// 文章详情页面的JavaScript交互功能

document.addEventListener('DOMContentLoaded', function() {
    // 获取URL参数中的文章ID
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'));
    
    if (!articleId) {
        showError('未找到文章ID，请返回博客列表页面');
        return;
    }
    
    // 加载文章内容
    loadArticle(articleId);
    
    // 加载评论
    loadComments(articleId);
    
    // 加载相关文章
    loadRelatedArticles(articleId);
    
    // 设置评论表单提交
    setupCommentForm(articleId);
});

// 模拟文章数据（实际应用中应从API获取）
const articles = [
    {
        id: 1,
        title: '如何使用Node.js构建高性能Web服务器',
        author: {
            name: '张三',
            avatar: 'https://via.placeholder.com/50',
            bio: '资深Web开发工程师，Node.js专家'
        },
        date: '2023-12-15',
        category: 'technology',
        image: 'https://via.placeholder.com/1200x600',
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
            
            <pre><code>
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(\`Master \${process.pid} is running\`);

  // 创建工作进程
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(\`Worker \${worker.process.pid} died\`);
  });
} else {
  // 工作进程可以共享任何TCP连接
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World\\n');
  }).listen(8000);

  console.log(\`Worker \${process.pid} started\`);
}
            </code></pre>
            
            <h3>2. 实现缓存策略</h3>
            <p>使用内存缓存（如Redis或Node.js内置的Map）可以显著减少数据库查询和计算开销。</p>
            
            <h3>3. 异步操作优化</h3>
            <p>确保正确使用异步操作，避免阻塞事件循环。利用Promise和async/await可以使异步代码更加清晰。</p>
            
            <h2>监控与调试</h2>
            <p>使用工具如PM2进行进程管理和监控，使用New Relic或Datadog等服务进行性能监控，可以帮助识别和解决性能瓶颈。</p>
            
            <h2>结论</h2>
            <p>Node.js是构建高性能Web服务器的强大工具，通过正确的架构设计和性能优化技巧，可以充分发挥其潜力。希望本文对您构建高效的Node.js应用有所帮助。</p>
        `,
        tags: ['Node.js', 'Web开发', '后端', '性能优化'],
        comments: [
            {
                id: 101,
                author: '李四',
                date: '2023-12-16',
                content: '非常实用的文章，我按照文中的集群模块配置，服务器性能提升了30%！'
            },
            {
                id: 102,
                author: '王五',
                date: '2023-12-17',
                content: '请问对于内存泄漏问题，有什么好的解决方案吗？'
            }
        ],
        related: [2, 3, 4]
    },
    {
        id: 2,
        title: '现代CSS布局技术详解',
        author: {
            name: '李四',
            avatar: 'https://via.placeholder.com/50',
            bio: '前端开发工程师，CSS专家'
        },
        date: '2023-12-10',
        category: 'design',
        image: 'https://via.placeholder.com/1200x600',
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
            
            <h2>CSS变量与主题切换</h2>
            <p>使用CSS变量（自定义属性）可以轻松实现主题切换和样式复用。</p>
        `,
        tags: ['CSS', '前端', '设计', '响应式设计'],
        comments: [
            {
                id: 201,
                author: '张三',
                date: '2023-12-11',
                content: 'Grid布局确实强大，但浏览器兼容性如何？'
            }
        ],
        related: [1, 3, 5]
    },
    // 其他文章数据...
];

// 加载文章内容
function loadArticle(articleId) {
    // 在实际应用中，这里应该是API请求
    const article = articles.find(a => a.id === articleId);
    
    if (!article) {
        showError('未找到文章，请返回博客列表页面');
        return;
    }
    
    // 更新页面标题
    document.title = `${article.title} - 洋芋'Log`;
    
    // 更新文章内容
    const articleHeader = document.querySelector('.article-header');
    articleHeader.querySelector('.article-category').textContent = getCategoryName(article.category);
    articleHeader.querySelector('.article-date').textContent = formatDate(article.date);
    articleHeader.querySelector('.article-title').textContent = article.title;
    
    const authorInfo = articleHeader.querySelector('.author-info');
    authorInfo.querySelector('h4').textContent = article.author.name;
    authorInfo.querySelector('p').textContent = article.author.bio;
    articleHeader.querySelector('.author-avatar').src = article.author.avatar;
    
    // 更新特色图片
    document.querySelector('.article-featured-image img').src = article.image;
    document.querySelector('.article-featured-image img').alt = article.title;
    
    // 更新文章内容
    document.querySelector('.article-content').innerHTML = article.content;
    
    // 更新标签
    const tagsContainer = document.querySelector('.article-tags');
    tagsContainer.innerHTML = '';
    article.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'tag';
        tagSpan.textContent = tag;
        tagsContainer.appendChild(tagSpan);
    });
}

// 加载评论
function loadComments(articleId) {
    // 在实际应用中，这里应该是API请求
    const article = articles.find(a => a.id === articleId);
    
    if (!article || !article.comments) {
        return;
    }
    
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = '';
    
    // 更新评论计数
    document.getElementById('comment-count').textContent = article.comments.length;
    
    article.comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
            <div class="comment-header">
                <h4>${comment.author}</h4>
                <span class="comment-date">${formatDate(comment.date)}</span>
            </div>
            <div class="comment-content">
                <p>${comment.content}</p>
            </div>
        `;
        commentsContainer.appendChild(commentElement);
    });
}

// 加载相关文章
function loadRelatedArticles(articleId) {
    // 在实际应用中，这里应该是API请求
    const article = articles.find(a => a.id === articleId);
    
    if (!article || !article.related) {
        return;
    }
    
    const relatedContainer = document.getElementById('related-articles-container');
    relatedContainer.innerHTML = '';
    
    article.related.forEach(relatedId => {
        const relatedArticle = articles.find(a => a.id === relatedId);
        if (relatedArticle) {
            const articleElement = document.createElement('div');
            articleElement.className = 'related-article';
            articleElement.innerHTML = `
                <a href="article.html?id=${relatedArticle.id}">
                    <img src="${relatedArticle.image}" alt="${relatedArticle.title}">
                    <h4>${relatedArticle.title}</h4>
                </a>
                <span class="related-date">${formatDate(relatedArticle.date)}</span>
            `;
            relatedContainer.appendChild(articleElement);
        }
    });
}

// 设置评论表单提交
function setupCommentForm(articleId) {
    const commentForm = document.querySelector('.comment-form');
    
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const textarea = this.querySelector('textarea');
        const nameInput = this.querySelector('input[type="text"]');
        const emailInput = this.querySelector('input[type="email"]');
        
        const comment = textarea.value.trim();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        
        if (!comment || !name || !email) {
            alert('请填写所有必填字段');
            return;
        }
        
        // 在实际应用中，这里应该是API请求
        // 现在我们只是模拟添加评论
        const newComment = {
            id: Date.now(),
            author: name,
            date: new Date().toISOString().split('T')[0],
            content: comment
        };
        
        // 找到当前文章并添加评论
        const article = articles.find(a => a.id === articleId);
        if (article) {
            if (!article.comments) {
                article.comments = [];
            }
            article.comments.push(newComment);
            
            // 重新加载评论
            loadComments(articleId);
            
            // 清空表单
            textarea.value = '';
            nameInput.value = '';
            emailInput.value = '';
            
            // 显示成功消息
            alert('评论已提交');
        }
    });
}

// 显示错误信息
function showError(message) {
    const articleContent = document.querySelector('.article-container .container');
    articleContent.innerHTML = `
        <div class="error-message">
            <h2>出错了</h2>
            <p>${message}</p>
            <a href="blog.html" class="btn">返回博客列表</a>
        </div>
    `;
}

// 辅助函数：格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// 辅助函数：获取分类名称
function getCategoryName(category) {
    const categories = {
        'technology': '技术',
        'design': '设计',
        'business': '商业',
        'lifestyle': '生活方式'
    };
    return categories[category] || category;
}