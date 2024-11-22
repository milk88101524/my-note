
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
    component: ComponentCreator('/my-note/docs','cdc'),
    routes: [
      {
        path: '/my-note/docs/Git/gitNote1',
        component: ComponentCreator('/my-note/docs/Git/gitNote1','6ec'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/intro',
        component: ComponentCreator('/my-note/docs/intro','32a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/JavaScript/JSNote1',
        component: ComponentCreator('/my-note/docs/JavaScript/JSNote1','5ef'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/JavaScript/JSNote11',
        component: ComponentCreator('/my-note/docs/JavaScript/JSNote11','463'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/JavaScript/JSNote12',
        component: ComponentCreator('/my-note/docs/JavaScript/JSNote12','491'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/JavaScript/JSNote13',
        component: ComponentCreator('/my-note/docs/JavaScript/JSNote13','f49'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/JavaScript/JSNote14',
        component: ComponentCreator('/my-note/docs/JavaScript/JSNote14','cea'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/JavaScript/JSNote15',
        component: ComponentCreator('/my-note/docs/JavaScript/JSNote15','cd6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/JavaScript/JSNote2',
        component: ComponentCreator('/my-note/docs/JavaScript/JSNote2','25a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/JavaScript/JSNote3',
        component: ComponentCreator('/my-note/docs/JavaScript/JSNote3','d5d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/JavaScript/JSNote4',
        component: ComponentCreator('/my-note/docs/JavaScript/JSNote4','58c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/JavaScript/types/JSNote10',
        component: ComponentCreator('/my-note/docs/JavaScript/types/JSNote10','6e9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/JavaScript/types/JSNote5',
        component: ComponentCreator('/my-note/docs/JavaScript/types/JSNote5','130'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/JavaScript/types/JSNote6',
        component: ComponentCreator('/my-note/docs/JavaScript/types/JSNote6','328'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/JavaScript/types/JSNote7',
        component: ComponentCreator('/my-note/docs/JavaScript/types/JSNote7','80d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/JavaScript/types/JSNote8',
        component: ComponentCreator('/my-note/docs/JavaScript/types/JSNote8','2e5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/JavaScript/types/JSNote9',
        component: ComponentCreator('/my-note/docs/JavaScript/types/JSNote9','589'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/KotlinCompose/JetpackComposeNote1',
        component: ComponentCreator('/my-note/docs/KotlinCompose/JetpackComposeNote1','a1c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/KotlinCompose/JetpackComposeNote2',
        component: ComponentCreator('/my-note/docs/KotlinCompose/JetpackComposeNote2','529'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/KotlinCompose/JetpackComposeNote3',
        component: ComponentCreator('/my-note/docs/KotlinCompose/JetpackComposeNote3','9be'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/KotlinCompose/JetpackComposeNote4',
        component: ComponentCreator('/my-note/docs/KotlinCompose/JetpackComposeNote4','ed7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/KotlinCompose/JetpackComposeNote5',
        component: ComponentCreator('/my-note/docs/KotlinCompose/JetpackComposeNote5','9dd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/KotlinCompose/JetpackComposeNote6',
        component: ComponentCreator('/my-note/docs/KotlinCompose/JetpackComposeNote6','9c9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/KotlinCompose/JetpackComposeNote7',
        component: ComponentCreator('/my-note/docs/KotlinCompose/JetpackComposeNote7','6bf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/KotlinCompose/Kotlin&ComposeIntro',
        component: ComponentCreator('/my-note/docs/KotlinCompose/Kotlin&ComposeIntro','1ae'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/KotlinCompose/Kotlin語法',
        component: ComponentCreator('/my-note/docs/KotlinCompose/Kotlin語法','b4d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Swift/swiftNote1',
        component: ComponentCreator('/my-note/docs/Swift/swiftNote1','7dc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Swift/swiftNote10',
        component: ComponentCreator('/my-note/docs/Swift/swiftNote10','d04'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Swift/swiftNote11',
        component: ComponentCreator('/my-note/docs/Swift/swiftNote11','171'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Swift/swiftNote12',
        component: ComponentCreator('/my-note/docs/Swift/swiftNote12','cec'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Swift/swiftNote13',
        component: ComponentCreator('/my-note/docs/Swift/swiftNote13','244'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Swift/swiftNote14',
        component: ComponentCreator('/my-note/docs/Swift/swiftNote14','76c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Swift/swiftNote15',
        component: ComponentCreator('/my-note/docs/Swift/swiftNote15','96c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Swift/swiftNote16',
        component: ComponentCreator('/my-note/docs/Swift/swiftNote16','787'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Swift/swiftNote17',
        component: ComponentCreator('/my-note/docs/Swift/swiftNote17','7fc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Swift/swiftNote2',
        component: ComponentCreator('/my-note/docs/Swift/swiftNote2','d4e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Swift/swiftNote3',
        component: ComponentCreator('/my-note/docs/Swift/swiftNote3','bec'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Swift/swiftNote4',
        component: ComponentCreator('/my-note/docs/Swift/swiftNote4','fcc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Swift/swiftNote5',
        component: ComponentCreator('/my-note/docs/Swift/swiftNote5','820'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Swift/swiftNote6',
        component: ComponentCreator('/my-note/docs/Swift/swiftNote6','237'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Swift/swiftNote7',
        component: ComponentCreator('/my-note/docs/Swift/swiftNote7','555'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Swift/swiftNote8',
        component: ComponentCreator('/my-note/docs/Swift/swiftNote8','06a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/Swift/swiftNote9',
        component: ComponentCreator('/my-note/docs/Swift/swiftNote9','5c7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/SwiftUI/swiftUINote1',
        component: ComponentCreator('/my-note/docs/SwiftUI/swiftUINote1','6c6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/SwiftUI/swiftUINote2',
        component: ComponentCreator('/my-note/docs/SwiftUI/swiftUINote2','dbf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/SwiftUI/swiftUINote3',
        component: ComponentCreator('/my-note/docs/SwiftUI/swiftUINote3','4f2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/SwiftUI/swiftUINote4',
        component: ComponentCreator('/my-note/docs/SwiftUI/swiftUINote4','dd5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/SwiftUI/swiftUINote5',
        component: ComponentCreator('/my-note/docs/SwiftUI/swiftUINote5','193'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/SwiftUI/swiftUINote6',
        component: ComponentCreator('/my-note/docs/SwiftUI/swiftUINote6','8eb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/SwiftUI/swiftUINote7',
        component: ComponentCreator('/my-note/docs/SwiftUI/swiftUINote7','257'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/SwiftUI/swiftUINote8',
        component: ComponentCreator('/my-note/docs/SwiftUI/swiftUINote8','d60'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-note/docs/SwiftUI/swiftUINote9',
        component: ComponentCreator('/my-note/docs/SwiftUI/swiftUINote9','0d4'),
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
