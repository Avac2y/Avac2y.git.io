// 1. 定义文档列表（后续新增文档只需在这里添加条目）
const docs = [
  { name: "JavaScript 笔记", filename: "js-notes.md" },
  { name: "HTML 基础", filename: "html.md" },
  { name: "CSS 布局技巧", filename: "css-layout.md" },
  // 新增文档时，在这里添加 { name: "文档名", filename: "文件名.md" }
];

// 2. 生成侧边栏文档链接
const docList = document.getElementById('docList');
docs.forEach(doc => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '#';
  a.textContent = doc.name;
  // 点击链接时加载对应文档
  a.addEventListener('click', (e) => {
    e.preventDefault();
    loadDoc(doc.filename);
  });
  li.appendChild(a);
  docList.appendChild(li);
});

// 3. 加载并解析 Markdown 文档
async function loadDoc(filename) {
  const docContent = document.getElementById('docContent');
  try {
    // 读取 docs 文件夹中的 .md 文件
    const response = await fetch(`docs/${filename}`);
    if (!response.ok) throw new Error('文档不存在');

    const markdown = await response.text();
    // 将 Markdown 转为 HTML 并渲染
    docContent.innerHTML = marked.parse(markdown);
  } catch (error) {
    docContent.innerHTML = `<p>错误：无法加载文档 - ${error.message}</p>`;
  }
}
