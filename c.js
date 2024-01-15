// 获取任务列表的所有任务项
const tasks = document.querySelectorAll('.task');

// 设置初始经验和等级
let experience = 0;
let level = 1;

// 遍历任务列表项，并为每个任务项添加点击事件监听器
tasks.forEach((task) => {
  task.addEventListener('click', () => {
    // 假设每个任务完成后获得 10 经验值
    const experienceReward = 10;
  
    // 更新经验值
    experience += experienceReward;
  
    // 更新经验等级条宽度
    const experienceBar = document.getElementById('experience-progress');
    experienceBar.style.width = `${experience}%`;
  
    // 判断是否升级
    if (experience >= 100) {
      level++;
      experience = 0;
    }
  
    // 更新等级显示
    const levelDisplay = document.getElementById('level');
    levelDisplay.textContent = `等级: ${level}`;
  });
});