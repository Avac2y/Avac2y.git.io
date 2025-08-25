// 主JavaScript文件 - 处理通用交互功能

document.addEventListener('DOMContentLoaded', function() {
    // 深色模式切换
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // 检查本地存储中的主题偏好
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
    
    // 主题切换事件监听
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // 订阅表单提交
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                // 显示成功消息
                const formContainer = this.parentElement;
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = '感谢订阅！我们会将最新内容发送到您的邮箱。';
                
                formContainer.innerHTML = '';
                formContainer.appendChild(successMessage);
                
                // 将邮箱保存到本地存储（实际应用中应发送到服务器）
                saveSubscriber(email);
            } else {
                // 显示错误消息
                showInputError(emailInput, '请输入有效的电子邮件地址');
            }
        });
    }
    
    // 移动端导航菜单
    const navToggle = document.createElement('div');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const navbar = document.querySelector('.navbar .container');
    navbar.insertBefore(navToggle, navbar.firstChild);
    
    navToggle.addEventListener('click', function() {
        const nav = document.querySelector('.navbar nav');
        nav.classList.toggle('active');
        
        const icon = this.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });
    
    // 滚动时导航栏效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// 辅助函数
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function showInputError(inputElement, message) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    
    // 移除任何现有的错误消息
    const existingError = inputElement.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // 添加新的错误消息
    inputElement.parentElement.appendChild(errorMessage);
    
    // 添加错误样式
    inputElement.classList.add('error');
    
    // 3秒后移除错误消息
    setTimeout(() => {
        errorMessage.remove();
        inputElement.classList.remove('error');
    }, 3000);
}

function saveSubscriber(email) {
    // 在实际应用中，这里应该是一个API请求
    // 现在我们只是保存到本地存储作为演示
    let subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
    subscribers.push({
        email: email,
        date: new Date().toISOString()
    });
    localStorage.setItem('subscribers', JSON.stringify(subscribers));
    
    // 如果有后端API，可以这样调用
    // fetch('/api/subscribe', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email: email })
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch(error => console.error('Error:', error));
}

// 通用API请求函数
async function fetchAPI(endpoint, options = {}) {
    try {
        const response = await fetch(`/api/${endpoint}`, options);
        if (!response.ok) {
            throw new Error(`API请求失败: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('API请求错误:', error);
        return null;
    }
}