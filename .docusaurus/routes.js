
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-note/',
    component: ComponentCreator('/my-note/','696'),
    exact: true
  },
  {
    path: '/my-note/__docusaurus/debug',
    component: ComponentCreator('/my-note/__docusaurus/debug','17e'),
    exact: true
  },
  {
    path: '/my-note/__docusaurus/debug/config',
    component: ComponentCreator('/my-note/__docusaurus/debug/config','152'),
    exact: true
  },
  {
    path: '/my-note/__docusaurus/debug/content',
    component: ComponentCreator('/my-note/__docusaurus/debug/content','5f4'),
    exact: true
  },
  {
    path: '/my-note/__docusaurus/debug/globalData',
    component: ComponentCreator('/my-note/__docusaurus/debug/globalData','dfa'),
    exact: true
  },
  {
    path: '/my-note/__docusaurus/debug/metadata',
    component: ComponentCreator('/my-note/__docusaurus/debug/metadata','1b9'),
    exact: true
  },
  {
    path: '/my-note/__docusaurus/debug/registry',
    component: ComponentCreator('/my-note/__docusaurus/debug/registry','a2f'),
    exact: true
  },
  {
    path: '/my-note/__docusaurus/debug/routes',
    component: ComponentCreator('/my-note/__docusaurus/debug/routes','578'),
    exact: true
  },
  {
    path: '/my-note/blog/archive',
    component: ComponentCreator('/my-note/blog/archive','ca6'),
    exact: true
  },
  {
    path: '/my-note/docs/tags',
    component: ComponentCreator('/my-note/docs/tags','453'),
    exact: true
  },
  {
    path: '/my-note/markdown-page',
    component: ComponentCreator('/my-note/markdown-page','e74'),
    exact: true
  },
  {
    path: '/my-note/todo',
    component: ComponentCreator('/my-note/todo','35d'),
    exact: true
  },
  {
    path: '/my-note/docs',
    component: ComponentCreator('/my-note/docs','6a1'),
    routes: [
      {
        path: '/my-note/docs/intro',
        component: ComponentCreator('/my-note/docs/intro','32a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote1',
        component: ComponentCreator('/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote1','e85'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote2',
        component: ComponentCreator('/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote2','135'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote3',
        component: ComponentCreator('/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote3','0d0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote4',
        component: ComponentCreator('/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote4','81f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote5',
        component: ComponentCreator('/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote5','eda'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote6',
        component: ComponentCreator('/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote6','dd0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote7',
        component: ComponentCreator('/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote7','0c6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Kotlin & Jetpack Compose/Kotlin語法',
        component: ComponentCreator('/my-note/docs/Kotlin & Jetpack Compose/Kotlin語法','578'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/test/test',
        component: ComponentCreator('/my-note/docs/test/test','b7f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/my-note/docs/tutorial-basics/congratulations','320'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/my-note/docs/tutorial-basics/create-a-blog-post','644'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/my-note/docs/tutorial-basics/create-a-document','fb2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/my-note/docs/tutorial-basics/create-a-page','aa2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/my-note/docs/tutorial-basics/deploy-your-site','6e9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/my-note/docs/tutorial-basics/markdown-features','8fd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/my-note/docs/tutorial-extras/manage-docs-versions','54c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/my-note/docs/tutorial-extras/translate-your-site','90a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
