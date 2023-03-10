import { sidebar } from 'vuepress-theme-hope'

export const desktopSidebar = sidebar({
  '/desktop/document/': [
    '/desktop/document/v2/',
    {
      text: '自定义源',
      icon: 'diy',
      prefix: 'diy-source/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '列表和歌单',
      icon: 'songlist',
      prefix: 'list/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '桌面歌词',
      icon: 'lyric',
      prefix: 'lyric/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '同步和备份',
      icon: 'sync',
      prefix: 'sync-backup/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '其他问题',
      icon: 'other',
      prefix: 'other/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '播放和下载',
      icon: 'play',
      prefix: 'play-download/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '界面显示异常',
      icon: 'screen',
      prefix: 'screen-abnormal/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '安装',
      icon: 'package',
      prefix: 'install/',
      children: 'structure',
      collapsable: true,
    },
    'data-path',
    'hotkey.md',
    'scheme-url.md',
    'run-params.md',
    'license.md',
    'use-source.md',
  ],
  // '/desktop/document/v1/': [],
  '/desktop/document/v2/': [
    {
      text: '列表和歌单',
      icon: 'songlist',
      prefix: 'list/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '桌面歌词',
      icon: 'lyric',
      prefix: 'lyric/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '同步和备份',
      icon: 'sync',
      prefix: 'sync-backup/',
      children: 'structure',
      collapsable: true,
    },
    {
      text: '其他问题',
      icon: 'other',
      prefix: 'other/',
      children: 'structure',
      collapsable: true,
    },
    'changLog.md',
    'localMusic.md',
  ],
})
