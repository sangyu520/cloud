import './App.css'
import { IconCloud } from './components/magicui/IconCloud'; // 根据实际路径修改

const slugs = [
  "typescript",
  "javascript",
  "qq",
  "java",
  "react",
  "vite",
  "cplusplus",
  "kalilinux",
  "css",
  "nodedotjs",
  "wordpress",
  "nextdotjs",
  "xiaohongshu",
  "treyarch",
  "monkeytie",
  "steam",
  "MySQL",
  "vercel",
  "Hexo",
  "neteasecloudmusic",
  "zhihu",
  "docker",
  "git",
  "lamborghini",
  "github",
  "huawei",
  "republicofgamers",
  "apple",
  "bilibili",
  "mihoyo",
];

// IconCloudDemo 组件
export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}

function App() {
  return (
    <>
      {/* 添加 IconCloudDemo 组件 */}
      <IconCloudDemo />
    </>
  );
}

export default App;
