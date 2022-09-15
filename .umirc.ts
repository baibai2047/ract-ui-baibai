import { defineConfig} from "dumi";
// 此处更换为自己的仓库名
let base = '/react-ui-baibai';
let publicPath = '/react-ui-baibai/';

export default defineConfig({
    title:'React UI By baibai2047', // 站点名称
    mode:'site',
    outputPath:'doc-site', // 输出文件夹
    exportStatic :{}, // 生成静态路由，不走前端路由
    dynamicImport :{}, // 拆包，站点过大时优化首屏加载速度
    base, // 此处更换为自己的仓库名
    publicPath, // 此处更换为自己的仓库名
})