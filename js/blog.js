// 博客列表页面的JavaScript交互功能

document.addEventListener('DOMContentLoaded', function() {
    // 模拟博客文章数据（实际应用中应从API获取）
    const blogPosts = [
        {
            id: 1,
            title: '如何使用Node.js构建高性能Web服务器',
            excerpt: '本文将介绍如何利用Node.js的异步特性构建高性能的Web服务器，包括最佳实践和性能优化技巧。',
            author: '张三',
            date: '2023-12-15',
            category: 'technology',
            image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22400%22%20viewBox%3D%220%200%20600%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20fill%3D%22%23ddd%22%20width%3D%22600%22%20height%3D%22400%22%2F%3E%3Ctext%20fill%3D%22%23555%22%20font-family%3D%22sans-serif%22%20font-size%3D%2230%22%20x%3D%22300%22%20y%3D%22200%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E600x400%3C%2Ftext%3E%3C%2Fsvg%3E',
            tags: ['Node.js', 'Web开发', '后端']
        },
        {
            id: 2,
            title: '现代CSS布局技术详解',
            excerpt: '探索Flexbox和Grid等现代CSS布局技术，以及如何使用它们创建响应式和灵活的网页布局。',
            author: '李四',
            date: '2023-12-10',
            category: 'design',
            image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22400%22%20viewBox%3D%220%200%20600%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20fill%3D%22%23ddd%22%20width%3D%22600%22%20height%3D%22400%22%2F%3E%3Ctext%20fill%3D%22%23555%22%20font-family%3D%22sans-serif%22%20font-size%3D%2230%22%20x%3D%22300%22%20y%3D%22200%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E600x400%3C%2Ftext%3E%3C%2Fsvg%3E',
            tags: ['CSS', '前端', '设计']
        },
        {
            id: 3,
            title: '深入理解JavaScript异步编程',
            excerpt: '从回调函数到Promise，再到async/await，全面解析JavaScript中的异步编程模式。',
            author: '王五',
            date: '2023-12-05',
            category: 'technology',
            image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22400%22%20viewBox%3D%220%200%20600%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20fill%3D%22%23ddd%22%20width%3D%22600%22%20height%3D%22400%22%2F%3E%3Ctext%20fill%3D%22%23555%22%20font-family%3D%22sans-serif%22%20font-size%3D%2230%22%20x%3D%22300%22%20y%3D%22200%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E600x400%3C%2Ftext%3E%3C%2Fsvg%3E',
            tags: ['JavaScript', '前端', '编程']
        },
        {
            id: 4,
            title: 'React性能优化策略',
            excerpt: '学习如何优化React应用性能，包括组件渲染优化、状态管理和代码分割等技术。',
            author: '赵六',
            date: '2023-11-28',
            category: 'technology',
            image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22400%22%20viewBox%3D%220%200%20600%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20fill%3D%22%23ddd%22%20width%3D%22600%22%20height%3D%22400%22%2F%3E%3Ctext%20fill%3D%22%23555%22%20font-family%3D%22sans-serif%22%20font-size%3D%2230%22%20x%3D%22300%22%20y%3D%22200%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E600x400%3C%2Ftext%3E%3C%2Fsvg%3E',
            tags: ['React', '前端', '性能优化']
        },
        {
            id: 5,
            title: '用户体验设计原则',
            excerpt: '探讨优秀用户体验设计的核心原则，以及如何将这些原则应用到实际项目中。',
            author: '钱七',
            date: '2023-11-20',
            category: 'design',
            image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22400%22%20viewBox%3D%220%200%20600%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20fill%3D%22%23ddd%22%20width%3D%22600%22%20height%3D%22400%22%2F%3E%3Ctext%20fill%3D%22%23555%22%20font-family%3D%22sans-serif%22%20font-size%3D%2230%22%20x%3D%22300%22%20y%3D%22200%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E600x400%3C%2Ftext%3E%3C%2Fsvg%3E',
            tags: ['UX', '设计', '用户体验']
        },
        {
            id: 6,
            title: '数据可视化最佳实践',
            excerpt: '如何有效地将复杂数据转化为直观的可视化图表，提高数据理解和决策效率。',
            author: '孙八',
            date: '2023-11-15',
            category: 'design',
            image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22400%22%20viewBox%3D%220%200%20600%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20fill%3D%22%23ddd%22%20width%3D%22600%22%20height%3D%22400%22%2F%3E%3Ctext%20fill%3D%22%23555%22%20font-family%3D%22sans-serif%22%20font-size%3D%2230%22%20x%3D%22300%22%20y%3D%22200%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E600x400%3C%2Ftext%3E%3C%2Fsvg%3E',
            tags: ['数据可视化', '设计', 'D3.js']
        }
    ];

    // 每页显示的文章数量
    const postsPerPage = 4;
    let currentPage = 1;
    let filteredPosts = [...blogPosts];

    // 初始化博客列表
    renderBlogPosts();
    setupPagination();
    setupFilters();

    // 渲染博客文章列表
    function renderBlogPosts() {
        const blogContainer = document.getElementById('blog-posts-container');
        blogContainer.innerHTML = '';

        // 计算当前页的文章
        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        const currentPosts = filteredPosts.slice(startIndex, endIndex);

        if (currentPosts.length === 0) {
            blogContainer.innerHTML = '<div class="no-results">没有找到匹配的文章</div>';
            return;
        }

        currentPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'blog-card';
            postElement.innerHTML = `
                <div class="blog-image">
                    <img src="${post.image}" alt="${post.title}">
                    <span class="blog-category">${getCategoryName(post.category)}</span>
                </div>
                <div class="blog-content">
                    <h3><a href="article.html?id=${post.id}">${post.title}</a></h3>
                    <p>${post.excerpt}</p>
                    <div class="blog-meta">
                        <span class="blog-author">${post.author}</span>
                        <span class="blog-date">${formatDate(post.date)}</span>
                    </div>
                    <div class="blog-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            blogContainer.appendChild(postElement);
        });
    }

    // 设置分页
    function setupPagination() {
        const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
        const pageNumbers = document.querySelector('.page-numbers');
        const prevButton = document.querySelector('.prev-page');
        const nextButton = document.querySelector('.next-page');

        // 更新页码
        pageNumbers.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const pageSpan = document.createElement('span');
            pageSpan.textContent = i;
            if (i === currentPage) {
                pageSpan.className = 'current';
            }
            pageSpan.addEventListener('click', () => {
                currentPage = i;
                renderBlogPosts();
                setupPagination();
            });
            pageNumbers.appendChild(pageSpan);
        }

        // 更新上一页/下一页按钮状态
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages || totalPages === 0;

        // 添加按钮事件监听
        prevButton.onclick = function() {
            if (currentPage > 1) {
                currentPage--;
                renderBlogPosts();
                setupPagination();
            }
        };

        nextButton.onclick = function() {
            if (currentPage < totalPages) {
                currentPage++;
                renderBlogPosts();
                setupPagination();
            }
        };
    }

    // 设置过滤器
    function setupFilters() {
        // 分类过滤
        const categoryFilter = document.getElementById('category-filter');
        categoryFilter.addEventListener('change', function() {
            const selectedCategory = this.value;
            
            if (selectedCategory === 'all') {
                filteredPosts = [...blogPosts];
            } else {
                filteredPosts = blogPosts.filter(post => post.category === selectedCategory);
            }
            
            currentPage = 1;
            renderBlogPosts();
            setupPagination();
        });

        // 搜索过滤
        const searchInput = document.querySelector('.search input');
        const searchButton = document.querySelector('.search button');

        const performSearch = () => {
            const searchTerm = searchInput.value.trim().toLowerCase();
            
            if (searchTerm === '') {
                filteredPosts = [...blogPosts];
            } else {
                filteredPosts = blogPosts.filter(post => 
                    post.title.toLowerCase().includes(searchTerm) || 
                    post.excerpt.toLowerCase().includes(searchTerm) ||
                    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
                );
            }
            
            currentPage = 1;
            renderBlogPosts();
            setupPagination();
        };

        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
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
});