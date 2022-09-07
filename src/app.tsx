// 运行时配置
import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import Footer from './components/Footer';
import RightContent from './components/RightContent';
import {RunTimeLayoutConfig} from '@umijs/max'


// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string, settings?: Partial<LayoutSettings> }> {
  return { name: '@umijs/max', settings: {} };
}

export const layout:RunTimeLayoutConfig  = ({initialState}) => {
  return {
    headerRender: true,
    rightContentRender: () => <RightContent />,
    waterMarkProps: {
      fontColor: 'rgba(128,123,123,0.1)',
    },
    footerRender: () => <Footer />,
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    ...initialState?.settings
  };
};
