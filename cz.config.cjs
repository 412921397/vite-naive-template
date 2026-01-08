module.exports = {
  messages: {
    type: "选择提交类型:",
    scope: "选择修改范围（可选）:",
    subject: "填写简要描述（必填）:",
    body: "填写详细描述（可选）:",
    footer: "关联 issue（可选）:",
    confirmCommit: "确认提交？"
  },
  types: [
    { value: "feat", name: "feat: ✨ 新功能" },
    { value: "fix", name: "fix: 🐛 修复 Bug" },
    { value: "docs", name: "docs: 📝 文档" },
    { value: "style", name: "style: 🎨 样式调整" },
    { value: "refactor", name: "refactor: ♻️ 重构" },
    { value: "perf", name: "perf: ⚡ 性能优化" },
    { value: "test", name: "test: 🧪 测试" },
    { value: "chore", name: "chore: 🔧 构建/工具" }
  ]
};
