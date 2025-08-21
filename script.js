// 导航栏交互
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 点击导航链接时关闭移动端菜单
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 滚动时导航栏样式变化
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // 考虑固定导航栏的高度
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.strength-card, .project-card, .tool-card, .timeline-item, .stat-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// 技能条动画
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const skillsSections = document.querySelectorAll('.skills-category');
    skillsSections.forEach(section => {
        skillObserver.observe(section);
    });
});

// 活跃导航链接高亮
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// 添加活跃状态的CSS
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #2563eb !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// 打字机效果（可选）
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', () => {
    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // 为技能条添加动画延迟
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // 为项目卡片添加动画延迟
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
});

// 工具提示功能
function createTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: #1f2937;
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 14px;
        white-space: nowrap;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    `;
    
    document.body.appendChild(tooltip);
    
    element.addEventListener('mouseenter', (e) => {
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        tooltip.style.opacity = '1';
    });
    
    element.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });
}

// 为技术标签添加工具提示
document.addEventListener('DOMContentLoaded', () => {
    const techTags = document.querySelectorAll('.tech-tag');
    techTags.forEach(tag => {
        createTooltip(tag, `技术栈: ${tag.textContent}`);
    });
});

// 性能优化：防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 优化滚动事件
const optimizedScrollHandler = debounce(() => {
    // 滚动相关的处理逻辑
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// 添加返回顶部按钮
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
    `;
    
    document.body.appendChild(button);
    
    // 显示/隐藏按钮
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    // 点击返回顶部
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 悬停效果
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
        button.style.boxShadow = '0 6px 25px rgba(37, 99, 235, 0.4)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 20px rgba(37, 99, 235, 0.3)';
    });
}

// 初始化返回顶部按钮
document.addEventListener('DOMContentLoaded', createBackToTopButton);

// 添加页面加载进度条
function createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'page-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(45deg, #2563eb, #7c3aed);
        z-index: 1001;
        transition: width 0.3s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// 初始化进度条
document.addEventListener('DOMContentLoaded', createProgressBar);

// 添加键盘导航支持
document.addEventListener('keydown', (e) => {
    // ESC键关闭移动端菜单
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // 方向键导航
    if (e.key === 'ArrowUp' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// 添加触摸手势支持（移动端）
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // 向上滑动
            console.log('向上滑动');
        } else {
            // 向下滑动
            console.log('向下滑动');
        }
    }
}

// 添加图片懒加载支持
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// 初始化懒加载
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// 添加主题切换功能（可选）
function createThemeToggle() {
    const toggle = document.createElement('button');
    toggle.innerHTML = '<i class="fas fa-moon"></i>';
    toggle.className = 'theme-toggle';
    toggle.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(toggle);
    
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const icon = toggle.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    });
}

// 初始化主题切换
document.addEventListener('DOMContentLoaded', createThemeToggle);

// 添加深色主题样式
const darkThemeStyles = `
    .dark-theme {
        background-color: #1f2937;
        color: #f9fafb;
    }
    
    .dark-theme .navbar {
        background: rgba(31, 41, 55, 0.95);
    }
    
    .dark-theme .section {
        background-color: #1f2937;
    }
    
    .dark-theme .bg-light {
        background-color: #111827;
    }
    
    .dark-theme .strength-card,
    .dark-theme .project-card,
    .dark-theme .tool-card,
    .dark-theme .timeline-content,
    .dark-theme .stat-item,
    .dark-theme .contact-item {
        background-color: #374151;
        color: #f9fafb;
    }
    
    .dark-theme .section-title {
        color: #f9fafb;
    }
    
    .dark-theme .nav-link {
        color: #f9fafb;
    }
`;

const darkThemeStyleSheet = document.createElement('style');
darkThemeStyleSheet.textContent = darkThemeStyles;
document.head.appendChild(darkThemeStyleSheet);
